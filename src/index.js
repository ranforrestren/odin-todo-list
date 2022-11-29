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
        root.replaceChildren();
        todoList.forEach(todo => {
            createTodo(todo.taskName, todo.description);
        })
    }

    // Handling for modal button
    const modalButton = document.querySelector('#openModal');
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.modal');
    const submitButton = document.querySelector('#submitButton');

    // Opens modal button
    const openModal = function() {
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
    }

    // Close modal button
    const closeModal = function(e) {
        if (e.target === this) {
            overlay.classList.add('hidden');
            modal.classList.add('hidden');
        }
    }
    modalButton.addEventListener('click', openModal);
    overlay.addEventListener('click', closeModal)

    // Handling for submission of new todo (MOVE TO CONTROLLER LATER!)
    const submitModal = function() {
        const taskName = document.getElementById('taskName');
        const description = document.getElementById('description').value;
        model.addTodo(undefined, taskName.value, undefined, undefined, description);
        closeModal(this);
        displayTodos(model.defaultProject.listItems);
    }
    submitButton.addEventListener('click', submitModal);

    return { displayTodos };
})();

model.addTodo(undefined, "Test1", undefined, undefined, "Test Description 1");
model.addTodo(undefined, "Test2", undefined, undefined, "Test Description 2");
model.addTodo(undefined, "Test3", undefined, undefined, "Test Description 3");
view.displayTodos(model.defaultProject.listItems);
