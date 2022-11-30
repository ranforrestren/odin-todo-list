import { model, defaultProject } from './model.js';
import controller from './controller.js';

// DOM Element Setup
const root = document.querySelector('#todoBar');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const addTodoButton = document.querySelector('#addTodoButton');
const submitButton = document.querySelector('#submitButton');

// VIEW CONTROLLER
const view = {

    // Creates todo item
    createTodo(taskName, description) {
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
    },

    // Updates entire todo list
    displayTodos(project) {
        root.replaceChildren();
        project.listItems.forEach(todo => {
            view.createTodo(todo.taskName, todo.description);
        })
    },

    // Opens AddTodo Modal
    openAddTodoModal() {
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
    },

    // Close modal button
    closeModal(e) {
        if (e.target === this) {
            overlay.classList.add('hidden');
            modal.classList.add('hidden');
        }
    },

    // Handling for submission of new todo (MOVE TO CONTROLLER LATER!)
    submitModal() {
        view.closeModal();
    },

    // Event for when open modal button is clicked
    openModalClickEvent() {
        controller.handleOpenModalClick();
    },

    // Event for when add todo button is clicked
    addTodoClickEvent() {
        const taskName = document.getElementById('taskName').value;
        const description = document.getElementById('description').value;
        controller.handleAddTodoClick(taskName, description);
    },
}

// Setup event listeners
addTodoButton.addEventListener('click', view.openModalClickEvent);
overlay.addEventListener('click', view.closeModal);
submitButton.addEventListener('click', view.addTodoClickEvent);

export default view;