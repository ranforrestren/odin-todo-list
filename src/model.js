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

    // Handles commands
    handleCommand(command) {
        if (command.commandType === "create") {
            this.createTodo(undefined, command.parameters);
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
            this.deleteTodo(undefined, command.parameters);
        }
    },

    // Create todo
    createTodo(project = defaultProject, parameters) {
        let taskName = parameters.taskName;
        if (!taskName) { taskName = "Default Name"};
        let priority = parameters.priority;
        let dueDate = parameters.dueDate;
        let description = parameters.description;
        if (!description) { description = "Default Description"};
        const todo = model.todoFactory(project.listItems.length, taskName, priority, dueDate, description);
        project.listItems.push(todo);
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
    deleteTodo(project = defaultProject, parameters) {
        // Finds todo with correct index and deletes it
        let index = parameters.index;
        if (index > -1) { project.listItems.splice(index, 1) }
        // Remaps ids for index
        project.listItems.forEach((todo, i) => {
            todo.id = i;
        })
        // Sends request to refresh todo list
        controller.refreshViewTodosReq(defaultProject);
    },
}

export {
    model,
    defaultProject
}