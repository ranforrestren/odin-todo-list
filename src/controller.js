import { model, defaultProject } from './model.js';
import view from './view.js';

// CONTROLLER
const controller = {
    // Sends request to add Todo
    createTodoReq(taskName, priority, dueDate, description) {
        model.createTodo(defaultProject, taskName, priority, dueDate, description);
    },

    // Sends request to delete Todo
    deleteTodoReq(id) {
        model.deleteTodo(defaultProject, id);
    },

    // Handles create todo click event
    handleCreateTodoClick(taskName, priority, dueDate, description) {
        model.createTodo(defaultProject, taskName, priority, dueDate, description);
        view.closeModal();
    },

    // Handle update todo click event
    handleReadTodoClick(e) {
        const readTodo = model.readTodo(defaultProject, e.currentTarget.dataset.id);
        // Populates modal with correct info and opens it
        console.log(readTodo);
        view.addDataModal(readTodo.taskName, readTodo.priority, readTodo.dueDate, readTodo.description);
        view.openModal();
    },
    
    // Handle delete todo click event
    handleDeleteTodoClick(e) {
        console.log(e.currentTarget.dataset.id);
        model.deleteTodo(defaultProject, e.target.dataset.id);
    },

    // Handles open modal click event
    handleOpenModalClick() {
        view.openModal();
    },

    // Handles close modal click event
    handleCloseModalClick() {
        view.closeModal();
    },
    // Sends request to update DOM Projects
    
    // Sends request to update DOM Todos
    refreshViewTodosReq(project) {
        view.displayTodos(project);
    },
}

export default controller;