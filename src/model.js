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

    // Constructor for List objects
    todoFactory(id, taskName, priority, dueDate, description) {
        return { id, taskName, priority, dueDate, description };
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
            const todo = this.readTodo(undefined, command.parameters);
            controller.addDataModalReq(todo);
            controller.setModalMode("update", command.parameters.index);
        }
        if (command.commandType === "update") {
            this.updateTodo(undefined, command.parameters);
            controller.closeModalReq();
        }
        if (command.commandType === "delete") {
            this.deleteTodo(undefined, command);
        }
        if (command.commandType === "undo") {
            const lastCommand = this.commandQueue.pop();
            this.undoCommand(lastCommand);
        } else {
            this.commandQueue.push(command);
        }
    },

    // Create todo
    createTodo(project = defaultProject, command) {
        let taskName = command.parameters.taskName;
        if (!taskName) { taskName = "Default Name"};
        let priority = command.parameters.priority;
        let dueDate = command.parameters.dueDate;
        let description = command.parameters.description;
        if (!description) { description = "Default Description"};
        const todo = model.todoFactory(project.listItems.length, taskName, priority, dueDate, description);
        if (command.parameters.index) {
            project.listItems.splice(command.parameters.index, 0, todo)
        } else {
            command.parameters.index = project.listItems.push(todo) - 1;
        }
        controller.refreshViewTodosReq(defaultProject);
    },

    // Read todo
    readTodo(project = defaultProject, parameters) {
        const todo = project.listItems[parameters.index];
        return todo;
    },

    // Update todo
    updateTodo(project = defaultProject, parameters) {
        // Finds todo with correct id and edits values
        const todo = project.listItems[parameters.index];
        if (parameters.taskName != undefined) { todo.taskName = parameters.taskName }
        if (parameters.priority != undefined) { todo.priority = parameters.priority }
        if (parameters.dueDate != undefined) { todo.dueDate = parameters.dueDate }
        if (parameters.description != undefined) { todo.description = parameters.description }
        controller.refreshViewTodosReq(defaultProject);
    },

    // Delete todo
    deleteTodo(project = defaultProject, command) {
        // Finds todo with correct index and deletes it
        let index = command.parameters.index;
        if (index > -1) { 
            // But not before copying the todo info to allow reversal later...
            const todo = (project.listItems.splice(index, 1))[0];
            for (const property in todo) {
                command.parameters[property] = todo[property];
            }
        }
        // Remaps ids for index
        project.listItems.forEach((todo, i) => {
            todo.id = i;
        })
        // Sends request to refresh todo list
        controller.refreshViewTodosReq(defaultProject);
    },

    // Undoes last command
    undoCommand(command) {
        if (command) {
            if (command.commandType === "create") {
                this.deleteTodo(undefined, command)
            }
            if (command.commandType === "delete") {
                this.createTodo(undefined, command)
            }
        } else {
        alert("THERE ARE NO COMMANDS TO UNDO")
        }
    }
}

export {
    model,
    defaultProject
}