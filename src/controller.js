import { model, defaultProject } from './model.js';
import view from './view.js';

// CONTROLLER
const controller = {
    // Forwards commands to view
    handleViewCommand(command) {
        view.handleCommand(command);
    },
    
    // Forwards commands to model
    handleModelCommand(command) {
        model.handleCommand(command);
    },

    // Handles request to open modal
    openModalReq() {
        view.openModal();
    },

    setModalMode(mode, id) {
        view.setModalButtonBehavior(mode, id);
    },

    // Handles request to inject data into modal
    addTodoModalReq(todo) {
        let taskName = todo.taskName;
        let priority = todo.priority;
        let dueDate = todo.dueDate;
        let description = todo.description;
        view.addTodoModal(taskName, priority, dueDate, description);
        view.openModal();
    },

    // Handles request to inject data into modal
    addProjModalReq(project) {
        let projName = project.projName;
        let color = project.color;
        view.addProjModal(projName, color);
        view.openModal();
    },

    // Handles request to close modal
    closeModalReq() {
        view.closeModal();
    },

    // Handles open modal click event
    handleOpenModalClick() {
        view.setModalButtonBehavior("create");
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