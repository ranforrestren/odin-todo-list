// Constructor for Project objects
const projectFactory = (projectName) => {
    const listItems = [];
    return { listItems, projectName }
}

// Default project object
const defaultProject = projectFactory('default');

// MODEL CONTROLLER
const model = {

    // Constructor for List objects
    todoFactory(id, taskName, priority, dueDate, description) {
        return { id, taskName, priority, dueDate, description };
    },

    // Add todo
    addTodo(project = defaultProject, taskName, priority, dueDate = '', description) {
        const todo = model.todoFactory(project.listItems.length, taskName, priority, dueDate, description);
        project.listItems.push(todo);
    },

    // Edit todo
    editTodo(project = defaultProject, id, newName, newPrio, newDate, newDesc) {
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
        const index = project.listItems.findIndex(todo => todo.id === id);
        if (index > -1) { project.listItems.splice(index, 1) }
        // Remaps ids for index
        project.listItems.forEach((todo, i) => {
            todo.id = i;
        })
    },
}


export {
    model,
    defaultProject
}