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

    // Handles open modal click event
    handleOpenModalClick() {
        view.openAddTodoModal();
    },

    // Handles add todo click event
    handleAddTodoClick(taskName, description) {
        model.addTodo(defaultProject, taskName, undefined, undefined, description);
    },

    // Sends request to update DOM Todos
    refreshViewTodosReq(project) {
        view.displayTodos(project);
    },
}

export default controller;