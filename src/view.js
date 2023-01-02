import { model, defaultProject } from './model.js';
import controller from './controller.js';

// DOM Element Setup
const root = document.querySelector('#todoBar');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const taskNameInput = document.querySelector('#taskName');
const dueDateInput = document.querySelector('#dueDate');
const priorityInput = document.querySelector('#taskPriority');
const descriptionInput = document.querySelector('#description');

const openModalButton = document.querySelector('#openModalButton');
const submitAddTodoButton = document.querySelector('#submitAddTodoButton');

// VIEW CONTROLLER
const view = {

    // Creates todo item
    createTodo(id, taskName, description) {
        // Create todo elements
        const todoElement = document.createElement('div');
        todoElement.classList.add('todoItem');
        const todoName = document.createElement('p');
        todoName.classList.add('name');
        const todoDescription = document.createElement('p');
        todoDescription.classList.add('description');
        const todoDeleteButton = document.createElement('button');
        todoDeleteButton.classList.add('button', 'delete');
        const todoEditButton = document.createElement('button');
        todoEditButton.classList.add('button', 'edit');
        // Add id data-attribute to elements
        todoElement.setAttribute('data-id', id);
        todoDeleteButton.setAttribute('data-id', id);
        // Adds event handler for deleting todo
        todoDeleteButton.addEventListener('click', view.deleteTodoClickEvent);
        // Adds event handler for opening todo
        todoElement.addEventListener('click', view.openTodoClickEvent);
        // Injects data to todo elements
        todoName.textContent = taskName;
        todoDescription.textContent = description;
        todoDeleteButton.textContent = 'X';
        // Adds todo to the DOM
        todoElement.append(todoName, todoDescription, todoEditButton, todoDeleteButton);
        root.appendChild(todoElement);
    },

    // Updates entire todo list
    displayTodos(project) {
        root.replaceChildren();
        project.listItems.forEach(todo => {
            view.createTodo(todo.id, todo.taskName, todo.description);
        })
    },

    // Opens modal
    openModal() {
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
    },

    // Close modal
    closeModal() {
        // Resets inputs in modal
        taskNameInput.value = "";
        const date = new Date();
        dueDateInput.value = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, 10);
        priorityInput.value = "Default";
        descriptionInput.value = "";
        // Hides modal
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
    },

    // Event for when open todo event is fired
    openTodoClickEvent(e) {
        controller.handleOpenTodoClick(e);
    },

    // Event for when delete todo button is clicked
    deleteTodoClickEvent(e) {
        e.stopPropagation();
        controller.handleDeleteTodoClick(e);
    },

    // Event for when open modal button is clicked
    openModalClickEvent() {
        controller.handleOpenModalClick();
    },

    // Event for when the close modal area (overlay) is clicked
    closeModalClickEvent(e) {
        // Check if overlay and not modal was targetted with click
        if (e.target === this) {
            controller.handleCloseModalClick();
        }
    }, 

    // Event for when add todo button is clicked
    addTodoClickEvent() {
        const taskName = document.getElementById('taskName').value;
        const description = document.getElementById('description').value;
        controller.handleAddTodoClick(taskName, description);
    },
}

// Setup event listeners
openModalButton.addEventListener('click', view.openModalClickEvent);
overlay.addEventListener('click', view.closeModalClickEvent);
submitAddTodoButton.addEventListener('click', view.addTodoClickEvent);

export default view;