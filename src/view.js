import controller from './controller.js';
import commandFactory from './command.js';

// DOM Element Setup
const projBar = document.querySelector('#projectBar');
const todoBar = document.querySelector('#todoBar');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const taskNameInput = document.querySelector('#taskName');
const dueDateInput = document.querySelector('#dueDate');
const priorityInput = document.querySelector('#taskPriority');
const descriptionInput = document.querySelector('#description');

const createProjectButton = document.querySelector('#createProjectButton');
const openModalButton = document.querySelector('#openModalButton');
const modalButton = document.querySelector('#modalButton');
const undoButton = document.querySelector('#undoButton');

// Setup default date for inputs (Can move into own function in refactor?)
const date = new Date();
const currentDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, 10);

// VIEW CONTROLLER
const view = {
    // Handles commands
    handleCommand(command) {
        let id = command.parameters.id;
        let projName = command.parameters.projName;
        let color = command.parameters.color;
        let taskName = command.parameters.taskName;
        let priority = command.parameters.priority;
        let dueDate = command.parameters.dueDate;
        let description = command.parameters.description;
        let indexID = command.parameters.indexID;
        if (command.commandType === "create") {
            this.createTodo(id, taskName, priority, dueDate, description, indexID);
        }
        if (command.commandType === "update") {
            this.updateTodo(id, taskName, priority, dueDate, description);
        }
        if (command.commandType === "delete") {
            this.deleteTodo(id);
        }
        if (command.commandType === "createProj") {
            this.createProject(id, projName, color, indexID);
        }
        if (command.commandType === "readProj") {
            this.readProject(id);
            todoBar.replaceChildren();
        }
        if (command.commandType === "deleteProj") {
            this.deleteProject(id);
        }
    },

    // Creates project item
    createProject(id, name, color, indexID = undefined) {
        // Create project elements
        const projElement = document.createElement('div');
        projElement.classList.add('projectItem', 'createAnimation');
        const projColorTag = document.createElement('div');
        projColorTag.classList.add('colorTag');
        const projName = document.createElement('p');
        projName.classList.add('name');
        const projDeleteButton = document.createElement('button');
        projDeleteButton.classList.add('button', 'delete');
        // Add id data-attribute to elements
        projElement.setAttribute('data-id', id);
        projDeleteButton.setAttribute('data-id', id);
        // Adds event handler for deleting proj
        projDeleteButton.addEventListener('click', this.deleteProjClickEvent);
        // Adds event handler for opening proj
        projElement.addEventListener('click', this.readProjClickEvent);
        // Adds event handler for when animation ends
        projElement.addEventListener('animationend', this.animationEndEvent);
        // Sets correct color tag data attribute
        projColorTag.setAttribute("data-color", color);
        // Injects data to todo elements
        projName.textContent = name;
        projDeleteButton.textContent = 'X';
        // Adds project to the DOM
        // Adds todo to the DOM
        projElement.append(projColorTag, projName, projDeleteButton);
        if (indexID) {
            // Undo operation
            const afterNode = projBar.querySelector(`[data-id="${indexID}"`);
            projBar.insertBefore(projElement, afterNode);
        } else {
            projBar.insertBefore(projElement, createProjectButton);
        }
    },

    // Reads project item
    readProject(id) {
        // Tags all required elements of the project item
        const projElement = projBar.querySelector(`[data-id="${id}"`);
        // Adds update animation
        projElement.classList.add('updateAnimation');
    },

    // Delete project item
    deleteProject(id) {
        // Finds todo element to delete
        const projectElement = projBar.querySelector(`[data-id="${id}"`);
        // Attaches delete animation
        projectElement.classList.add('deleteAnimation');
        projectElement.classList.remove("updatePlayable");
    },

    // Creates todo item
    createTodo(id, taskName, priority, dueDate, description, indexID = undefined) {
        // Create todo elements
        const todoElement = document.createElement('div');
        todoElement.classList.add('todoItem', 'createAnimation');
        const todoPriority = document.createElement('div');
        todoPriority.classList.add('priority');
        const todoName = document.createElement('p');
        todoName.classList.add('name');
        const todoDueDate = document.createElement('p');
        todoDueDate.classList.add('dueDate');
        const todoDescription = document.createElement('p');
        todoDescription.classList.add('description');
        const todoDeleteButton = document.createElement('button');
        todoDeleteButton.classList.add('button', 'delete');
        // Add id data-attribute to elements
        todoElement.setAttribute('data-id', id);
        todoDeleteButton.setAttribute('data-id', id);
        // Adds event handler for deleting todo
        todoDeleteButton.addEventListener('click', this.deleteTodoClickEvent);
        // Adds event handler for opening todo
        todoElement.addEventListener('click', this.readTodoClickEvent);
        // Adds event handler for when animation ends
        todoElement.addEventListener('animationend', this.animationEndEvent);
        // Sets correct priority data attribute
        todoPriority.setAttribute("data-priority", priority);
        // Injects data to todo elements
        todoName.textContent = taskName;
        todoDueDate.textContent = dueDate;
        todoDescription.textContent = description;
        todoDeleteButton.textContent = 'X';
        // Adds todo to the DOM
        todoElement.append(todoPriority, todoName, todoDueDate, todoDescription, todoDeleteButton);
        if (indexID) {
            // Undo operation
            const afterNode = todoBar.querySelector(`[data-id="${indexID}"`);
            todoBar.insertBefore(todoElement, afterNode);
        } else {
            todoBar.appendChild(todoElement);
        }
    },

    // Updates todo item
    updateTodo(id, taskName, priority, dueDate, description) {
        // Tags all required elements of the todo item
        const todoElement = todoBar.querySelector(`[data-id="${id}"`);
        const todoPriority = todoElement.querySelector('.priority');
        const todoName = todoElement.querySelector('.name');
        const todoDueDate = todoElement.querySelector('.dueDate');
        const todoDescription = todoElement.querySelector('.description');
        // Injects new values to elements
        todoPriority.setAttribute("data-priority", priority);
        todoName.textContent = taskName;
        todoDueDate.textContent = dueDate;
        todoDescription.textContent = description;
        // Adds update animation
        todoElement.classList.add('updateAnimation');
    },

    // Deletes todo item
    deleteTodo(id) {
        // Finds todo element to delete
        const todoElement = todoBar.querySelector(`[data-id="${id}"`);
        // Attaches delete animation
        todoElement.classList.add('deleteAnimation');
        todoElement.classList.remove("updatePlayable");
    },

    // Populates modal with provided info
    addDataModal(taskName = "", priority = "Default", dueDate = currentDate, description = "") {
        taskNameInput.value = taskName;
        priorityInput.value = priority;
        dueDateInput.value = currentDate;
        descriptionInput.value = description;
    },

    // Opens modal
    openModal() {
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
    },

    // Close modal
    closeModal() {
        // Resets inputs in modal
        this.addDataModal();
        // Hides modal
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
    },

    // Sets behavior modal button to add / edit
    setModalButtonBehavior(mode, id) {
        this.removeModalButtonListeners();
        if (mode === "create") {
            modalButton.setAttribute("data-mode", "create");
            modalButton.textContent = "Create";
            modalButton.addEventListener('click', this.createTodoClickEvent);
        }
        else if (mode === "update") {
            modalButton.setAttribute("data-mode", "update");
            modalButton.textContent = "Update";
            modalButton.setAttribute('data-id', id);
            modalButton.addEventListener('click', this.updateTodoClickEvent);
        }
    },

    // Removes modal button listeners
    removeModalButtonListeners() {
        modalButton.removeEventListener('click', this.createTodoClickEvent);
        modalButton.removeEventListener('click', this.updateTodoClickEvent);
    },

    // Event for when create proj event is fired
    createProjectClickEvent() {
        // Create and pass "create" command
        const parameters = { projName: "New Project", color: "" };
        const command = commandFactory("createProj", parameters);
        controller.handleModelCommand(command);
    },

    // Event for when read proj event is fired
    readProjClickEvent(e) {
        // Make sure text is not being selected
        let selection = window.getSelection();
        if (selection.type != "Range") {
            // Create and pass "read" command
            const id = e.currentTarget.dataset.id;
            const parameters = { id: id };
            const command = commandFactory("readProj", parameters);
            controller.handleModelCommand(command);
        }
    },

    // Event for when delete proj event is fired
    deleteProjClickEvent(e) {
        e.stopPropagation();
        // Create and pass "delete" command
        const id = e.currentTarget.dataset.id;
        const parameters = { id: id };
        const command = commandFactory("deleteProj", parameters);
        controller.handleModelCommand(command);
    },

    // Event for when create todo event is fired
    createTodoClickEvent() {
        const taskName = document.getElementById('taskName').value;
        const priority = document.getElementById('taskPriority').value;
        const dueDate = document.getElementById('dueDate').value;
        const description = document.getElementById('description').value;
        // Create and pass "create" command
        const parameters = { taskName: taskName, priority: priority, dueDate: dueDate, description: description };
        const command = commandFactory("create", parameters);
        controller.handleModelCommand(command);
    },

    // Event for when read todo event is fired
    readTodoClickEvent(e) {
        // Make sure text is not being selected
        let selection = window.getSelection();
        if (selection.type != "Range") {
            // Create and pass "read" command
            const id = e.currentTarget.dataset.id;
            const parameters = { id: id };
            const command = commandFactory("read", parameters);
            controller.handleModelCommand(command);
        }
    },

    // Event for when update todo event is fired
    updateTodoClickEvent(e) {
        const id = e.currentTarget.dataset.id;
        const taskName = document.getElementById('taskName').value;
        const priority = document.getElementById('taskPriority').value;
        const dueDate = document.getElementById('dueDate').value;
        const description = document.getElementById('description').value;
        // Create and pass "create" command
        const parameters = { id: id, taskName: taskName, priority: priority, dueDate: dueDate, description: description };
        const command = commandFactory("update", parameters);
        controller.handleModelCommand(command);
    },

    // Event for when delete todo event is fired
    deleteTodoClickEvent(e) {
        e.stopPropagation();
        // Create and pass "delete" command
        const id = e.currentTarget.dataset.id;
        const parameters = { id: id };
        const command = commandFactory("delete", parameters);
        controller.handleModelCommand(command);
    },

    // Event for when an animation ends
    animationEndEvent(e) {
        if (e.animationName === "zoomCreate") {
            e.currentTarget.classList.remove("createAnimation");
            e.currentTarget.classList.add("updatePlayable");
        } else if (e.animationName === "shakeUpdate") {
            e.currentTarget.classList.remove("updateAnimation");
        } else if (e.animationName === "zoomDelete") {
            e.currentTarget.remove();
        }
    },

    // Event for when undo event is fired
    undoClickEvent() {
        // Create and pass "undo" command
        const command = commandFactory("undo", undefined);
        controller.handleModelCommand(command);
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
}

// Setup event listeners
createProjectButton.addEventListener('click', view.createProjectClickEvent);
openModalButton.addEventListener('click', view.openModalClickEvent);
overlay.addEventListener('mousedown', view.closeModalClickEvent);
undoButton.addEventListener('click', view.undoClickEvent);

export default view;