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

    // Handle open todo click event
    handleOpenTodoClick(e) {
        console.log(e.currentTarget.dataset.id);
    },
    
    // Handle delete todo click event
    handleDeleteTodoClick(e) {
        console.log(e.currentTarget.dataset.id);
        model.deleteTodo(defaultProject, e.target.dataset.id);
    },

    // Handles add todo click event
    handleAddTodoClick(taskName, description) {
        model.createTodo(defaultProject, taskName, undefined, undefined, description);
        view.closeModal();
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