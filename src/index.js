import './style.css';

const  toDoListItemFactory = (taskName, priority, dueDate, description) => {
    return {taskName, priority, dueDate, description};
};

const toDoItem1 = toDoListItemFactory('Sleep', 'low', 'test', 'Nappys');
const toDoItem2 = toDoListItemFactory('Code', 'high', 'test', 'Code');
const toDoItem3 = toDoListItemFactory('Eat', 'medium', 'test', 'Eat food');
const project1 = [toDoItem1, toDoItem2, toDoItem3];

const domManipulator = (() => {
    const root = document.body;

    const createToDoList = function(toDoItem) {
        const toDoListElement = document.createElement('div');
        toDoListElement.classList.add('toDoList');
        const toDoListName = document.createElement('h1');
        toDoListName.classList.add('toDoListName');
        toDoListName.textContent = toDoItem.taskName;
        const toDoListDescription = document.createElement('p');
        toDoListDescription.classList.add('toDoListDescription');
        toDoListDescription.textContent = toDoItem.description;
        root.appendChild(toDoListElement);
        toDoListElement.appendChild(toDoListName);
        toDoListElement.appendChild(toDoListDescription);
    }

    return { createToDoList };
})();

project1.forEach(item => domManipulator.createToDoList(item));

console.log(project1);
