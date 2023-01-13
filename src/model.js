import controller from "./controller.js";
import commandFactory from "./command.js";

// Constructor for Project objects
const projectFactory = (id, projectName, colorTag) => {
    const listItems = [];
    return { id, listItems, projectName, colorTag }
}

// Holds every project item
const projectHolder = [];

// Default project object
const defaultProject = projectFactory(1, 'default', 'white');
projectHolder.push(projectHolder);

// MODEL CONTROLLER
const model = {
    // ID counter (replace with UUID later?)
    idCounter: 1,
    // ID counter for project items
    projIdCounter: 2,

    // Constructor for List objects
    todoFactory(taskName, priority, dueDate, description) {
        return { taskName, priority, dueDate, description };
    },

    // Reference to currently active project
    currentProject: defaultProject,

    // Que for holding previous done commands
    commandQueue: [],

    // Handles commands
    handleCommand(command) {
        if (command.commandType === "create") {
            this.createTodo(this.currentProject, command);
            controller.closeModalReq();
        }
        if (command.commandType === "read") {
            const todo = this.readTodo(this.currentProject, command);
            controller.addDataModalReq(todo);
            controller.setModalMode("update", command.parameters.id);
        }
        if (command.commandType === "update") {
            this.updateTodo(this.currentProject, command);
            controller.closeModalReq();
        }
        if (command.commandType === "delete") {
            this.deleteTodo(this.currentProject, command);
        }
        if (command.commandType === "createProj") {
            this.createProject(command);
        }
        if (command.commandType === "readProj") {
            this.readProject(command);
        }
        if (command.commandType === "undo") {
            const lastCommand = this.commandQueue.pop();
            this.undoCommand(lastCommand);
        } else if (command.commandType !== "read") {
            this.commandQueue.push(command);
        }
    },
    
    // Create project
    createProject(command) {
        let projName = command.parameters.projName;
        const project = projectFactory(this.projIdCounter, projName, "white");
        projectHolder.push(project);
        this.projIdCounter++;
        command.parameters.id = project.id;
        command.parameters.projName = project.projectName;
        command.parameters.color = project.colorTag;
        controller.handleViewCommand(command);
        console.log(project);
    },

    // Read (change) project
    readProject(command) {
        const project = projectHolder.find(project => project.id == command.parameters.id);
        console.log(project);
        controller.handleViewCommand(command);
        for (const todo of project.listItems) {
            console.log(todo);
            const id = todo.id;
            const taskName = todo.taskName;
            const priority = todo.priority;
            const dueDate = todo.dueDate;
            const description = todo.description;
            const command = commandFactory("create", {id, taskName, priority, dueDate, description});
            controller.handleViewCommand(command);
            console.log("TESTED!");
        }
        command.parameters.id = this.currentProject.id;
        this.currentProject = project;
    },

    // Create todo
    createTodo(project = defaultProject, command) {
        let taskName = command.parameters.taskName;
        if (!taskName) { taskName = "Default Name"};
        let priority = command.parameters.priority;
        let dueDate = command.parameters.dueDate;
        let description = command.parameters.description;
        if (!description) { description = "Default Description"};
        const todo = this.todoFactory(taskName, priority, dueDate, description);
        const index = project.listItems.findIndex(todo => todo.id > command.parameters.id );
        // Check if there is an ID (undo operation), if not then assign ID
        if (command.parameters.id) {
            command.commandType = "create";
            todo.id = command.parameters.id;
            const index = project.listItems.findIndex(todo => todo.id > command.parameters.id );
            if (project.listItems[index]) {
                command.parameters.indexID = project.listItems[index].id;
            } else {
                command.parameters.indexID = undefined;
            }
            project.listItems.splice(index, 0, todo);
        } else {
            todo.id = this.idCounter++;
            command.parameters.id = todo.id;
            project.listItems.push(todo);
        }
        // Sends a command for creating the DOM element visually
        controller.handleViewCommand(command);
    },

    // Read todo
    readTodo(project = defaultProject, command) {
        const todo = project.listItems.find(todo => todo.id == command.parameters.id);
        return todo;
    },

    // Update todo
    updateTodo(project = defaultProject, command) {
        // Finds todo with correct id
        const todo = project.listItems.find(todo => todo.id == command.parameters.id);
        // Saves info to allow reversal later
        const oldTodo = {};
        for (const property in todo) {
            oldTodo[property] = todo[property];
        }
        // Edits values
        if (command.parameters.taskName != undefined) { todo.taskName = command.parameters.taskName }
        if (command.parameters.priority != undefined) { todo.priority = command.parameters.priority }
        if (command.parameters.dueDate != undefined) { todo.dueDate = command.parameters.dueDate }
        if (command.parameters.description != undefined) { todo.description = command.parameters.description }
        // Sends a command for updating the DOM element visually
        controller.handleViewCommand(command);
        // Reinjects info into command to allow reversal
        for (const property in oldTodo) {
            command.parameters[property] = oldTodo[property];
        }
    },

    // Delete todo
    deleteTodo(project = defaultProject, command) {
        command.commandType = "delete";
        // Finds todo with correct index and deletes it
        const index = project.listItems.findIndex(todo => todo.id == command.parameters.id);
        if (index > -1) { 
            // But not before copying the todo info to allow reversal later...
            const todo = (project.listItems.splice(index, 1))[0];
            for (const property in todo) {
                command.parameters[property] = todo[property];
            }
        }
        // Sends a command for deleting the DOM element visually
        controller.handleViewCommand(command);
    },

    // Undoes last command
    undoCommand(command) {
        if (command) {
            if (command.commandType === "create") {
                this.deleteTodo(this.currentProject, command);
            }
            else if (command.commandType === "delete") {
                this.createTodo(this.currentProject, command);
            }
            else if (command.commandType === "update") {
                this.updateTodo(this.currentProject, command);
            }
            else if (command.commandType === "readProj") {
                this.readProject(command);
            }
        } else {
        alert("THERE ARE NO COMMANDS TO UNDO");
        }
    }
}

export {
    model,
    defaultProject
}