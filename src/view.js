import { model, defaultProject } from './model.js';

// DOM Element Setup
const root = document.querySelector('#todoBar');
const modalButton = document.querySelector('#openModal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
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
    displayTodos(todoList) {
        root.replaceChildren();
        todoList.forEach(todo => {
            view.createTodo(todo.taskName, todo.description);
        })
    },

    // Opens modal button
    openModal() {
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
        const taskName = document.getElementById('taskName');
        const description = document.getElementById('description').value;
        model.addTodo(undefined, taskName.value, undefined, undefined, description);
        view.closeModal();
        view.displayTodos(defaultProject.listItems);
    },
}

// Setup event listeners
modalButton.addEventListener('click', view.openModal);
overlay.addEventListener('click', view.closeModal);
submitButton.addEventListener('click', view.submitModal);

export default view;