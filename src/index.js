import './style.css';
import { model, defaultProject } from './model.js';

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
        displayTodos(defaultProject.listItems);
    }
    submitButton.addEventListener('click', submitModal);

    return { displayTodos };
})();

model.addTodo(undefined, "Test1", undefined, undefined, "Test Description 1");
model.addTodo(undefined, "Test2", undefined, undefined, "Test Description 2");
model.addTodo(undefined, "Test3", undefined, undefined, "Test Description 3");
view.displayTodos(defaultProject.listItems);

model2.testFunc();