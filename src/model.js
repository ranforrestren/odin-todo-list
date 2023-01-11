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

    // Create todo
    createTodo(project = defaultProject, taskName, priority, dueDate = '', description) {
        const todo = model.todoFactory(project.listItems.length, taskName, priority, dueDate, description);
        project.listItems.push(todo);
        controller.refreshViewTodosReq(defaultProject);
    },

    // Read todo
    readTodo(project = defaultProject, id) {
        const todo = project.listItems.find(matchTodo => matchTodo.id == id);
        return todo;
    },

    // Update todo
    updateTodo(project = defaultProject, id, newName, newPrio, newDate, newDesc) {
        // Finds todo with correct id and edits values
        project.listItems.map((todo) => {
            if (todo.id === id) {
                if (newName != undefined) { todo.taskName = newName }
                if (newPrio != undefined) { todo.priority = newPrio }
                if (newDate != undefined) { todo.dueDate = newDate }
                if (newDesc != undefined) { todo.description = newDesc }
            }
            return todo;
        })
    },

    // Delete todo
    deleteTodo(project = defaultProject, id) {
        // Finds todo with correct id and deletes it
        const index = project.listItems.findIndex(todo => todo.id == id);
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