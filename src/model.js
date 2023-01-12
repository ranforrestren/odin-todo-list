import controller from "./controller.js";

// Constructor for Project objects
const projectFactory = (projectName, colorTag) => {
    const listItems = [];
    return { listItems, projectName, colorTag }
}

// Default project object
const defaultProject = projectFactory('default', 'white');

// MODEL CONTROLLER
const model = {
    // ID counter (replace with UUID later?)
    idCounter: 1,

    // Constructor for List objects
    todoFactory(taskName, priority, dueDate, description) {
        return { taskName, priority, dueDate, description };
    },

    // Que for holding previous done commands
    commandQueue: [],

    // Handles commands
    handleCommand(command) {
        if (command.commandType === "create") {
            this.createTodo(undefined, command);
            controller.closeModalReq();
        }
        if (command.commandType === "read") {
            const todo = this.readTodo(undefined, command);
            controller.addDataModalReq(todo);
            controller.setModalMode("update", command.parameters.id);
        }
        if (command.commandType === "update") {
            this.updateTodo(undefined, command);
            controller.closeModalReq();
        }
        if (command.commandType === "delete") {
            this.deleteTodo(undefined, command);
        }
        if (command.commandType === "undo") {
            const lastCommand = this.commandQueue.pop();
            console.log(lastCommand);
            this.undoCommand(lastCommand);
        } else if (command.commandType !== "read") {
            this.commandQueue.push(command);
        }
        console.log(defaultProject.listItems);
    },

    // Create todo
    createTodo(project = defaultProject, command) {
        let taskName = command.parameters.taskName;
        if (!taskName) { taskName = "Default Name"};
        let priority = command.parameters.priority;
        let dueDate = command.parameters.dueDate;
        let description = command.parameters.description;
        if (!description) { description = "Default Description"};
        const todo = model.todoFactory(taskName, priority, dueDate, description);
        // Check if there is an ID (undo operation), if not then assign ID
        if (command.parameters.id) {
            todo.id = command.parameters.id;
            const index = project.listItems.findIndex(todo => todo.id > command.parameters.id );
            project.listItems.splice(index, 0, todo);
        } else {
            todo.id = this.idCounter++;
            command.parameters.id = todo.id;
            project.listItems.push(todo);
        }
        controller.refreshViewTodosReq(defaultProject);
    },

    // Read todo
    readTodo(project = defaultProject, command) {
        const todo = project.listItems.find(todo => todo.id == command.parameters.id);
        console.log(todo);
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
        // Reinjects info into command to allow reversal
        for (const property in oldTodo) {
            command.parameters[property] = oldTodo[property];
        }
        controller.refreshViewTodosReq(defaultProject);
    },

    // Delete todo
    deleteTodo(project = defaultProject, command) {
        // Finds todo with correct index and deletes it
        const index = project.listItems.findIndex(todo => todo.id == command.parameters.id);
        if (index > -1) { 
            // But not before copying the todo info to allow reversal later...
            const todo = (project.listItems.splice(index, 1))[0];
            for (const property in todo) {
                command.parameters[property] = todo[property];
            }
        }
        // Sends request to refresh todo list
        controller.refreshViewTodosReq(defaultProject);
    },

    // Undoes last command
    undoCommand(command) {
        if (command) {
            if (command.commandType === "create") {
                this.deleteTodo(undefined, command);
            }
            if (command.commandType === "delete") {
                this.createTodo(undefined, command);
            }
            if (command.commandType === "update") {
                this.updateTodo(undefined, command);
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