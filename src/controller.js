import { model, defaultProject } from './model.js';
import view from './view.js';

// CONTROLLER
const controller = {
    // Sends request to add Todo
    addTodoReq(taskName, priority, dueDate, description) {
        model.addTodo(defaultProject, taskName, priority, dueDate, description);
    },

    // Sends request to delete Todo
    deleteTodoReq(id) {
        model.deleteTodo(defaultProject, id);
    },

    // Handle delete todo click event
    handleDeleteTodoClick(e) {
        console.log(e.dataset.id);
        model.deleteTodo(defaultProject, e.dataset.id);
    },

    // Handles open modal click event
    handleOpenModalClick() {
        view.openModal();
    },

    // Handles close modal click event
    handleCloseModalClick() {
        view.closeModal();
    },

    // Handles add todo click event
    handleAddTodoClick(taskName, description) {
        model.addTodo(defaultProject, taskName, undefined, undefined, description);
        view.closeModal();
    },

    // Sends request to update DOM Todos
    refreshViewTodosReq(project) {
        view.displayTodos(project);
    },
}

export default controller;