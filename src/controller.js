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
    handleCreateTodoClick(taskName, dueDate, priority, description) {
        model.createTodo(defaultProject, taskName, dueDate, priority, description);
        view.closeModal();
    },

    // Handle update todo click event
    handleReadTodoClick(e) {
        console.log(e.currentTarget.dataset.id);
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