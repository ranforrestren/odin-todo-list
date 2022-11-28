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

// VIEW CONTROLLER
const view = (() => {
    const root = document.querySelector('#todoBar');

    // Creates todo item
    const createTodo = function (taskName, description) {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todoItem');
        const todoName = document.createElement('p');
        todoName.classList.add('name');
        todoName.textContent = taskName;
        const todoDescription = document.createElement('p');
        todoDescription.classList.add('description');
        todoDescription.textContent = description;
        todoElement.append(todoName, todoDescription);
        root.appendChild(todoElement);
    }

    // Updates entire todo list
    const displayTodos = function (todoList) {
        todoList.forEach(todo => {
            createTodo(todo.taskName, todo.description);
        })
    }

    return { displayTodos };
})();

const todoSample = new Array();
const todo1 = {taskName: "Sleep!", description: "Nappies!"};
const todo2 = {taskName: "Work!", description: "Coding!"};
const todo3 = {taskName: "Anime!", description: "Anime!"};
todoSample.push(todo1);
todoSample.push(todo2);
todoSample.push(todo3);

view.displayTodos(todoSample);