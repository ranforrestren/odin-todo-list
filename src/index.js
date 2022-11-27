import './style.css';

// MODEL CONTROLLER
const model = (() => {
    // Constructor for Project objects
    const projectFactory = (projectName) => {
        const listItems = [];
        return { listItems, projectName }
    }

    // Default project object
    const defaultProject = projectFactory('default');

    // Constructor for List objects
    const todoFactory = (id, taskName, priority, dueDate, description) => {
        return { id, taskName, priority, dueDate, description };
    }

    // Add todo
    const addTodo = function (project = defaultProject, taskName, priority, dueDate = '', description) {
        const todo = todoFactory(project.listItems.length, taskName, priority, dueDate, description);
        project.listItems.push(todo);
    }

    // Edit todo
    const editTodo = function (project = defaultProject, id, newName, newPrio, newDate, newDesc) {
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
    }

    // Delete todo
    const deleteTodo = function (project = defaultProject, id) {
        // Finds todo with correct id and deletes it
        const index = project.listItems.findIndex(todo => todo.id === id);
        if (index > -1) { project.listItems.splice(index, 1) }
        // Remaps ids for index
        project.listItems.forEach((todo, i) => {
            todo.id = i;
        })
    }

    return { defaultProject, addTodo, editTodo, deleteTodo }
})();

/*
// VIEW CONTROLLER
const domManipulator = (() => {
    const root = document.body;

    const createToDoList = function (toDoItem) {
        const toDoListElement = document.createElement('div');
        toDoListElement.classList.add('toDoList');
        const toDoListName = document.createElement('h1');
        toDoListName.classList.add('toDoListName');
        toDoListName.textContent = toDoItem.taskName;
        const toDoListDescription = document.createElement('p');
        toDoListDescription.classList.add('toDoListDescription');
        toDoListDescription.textContent = toDoItem.description;
        root.appendChild(toDoListElement);
        toDoListElement.appendChild(toDoListName);
        toDoListElement.appendChild(toDoListDescription);
    }

    return { createToDoList };
})();
*/