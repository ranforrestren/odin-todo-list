const  toDoListItemFactory = (taskName, priority, dueDate, description) => {
    return {taskName, priority, dueDate, description};
};

const toDoItem1 = toDoListItemFactory('Sleep', 'low', 'test', 'Nappys');
const toDoItem2 = toDoListItemFactory('Code', 'high', 'test', 'Code');
const toDoItem3 = toDoListItemFactory('Eat', 'medium', 'test', 'Eat food');
const project1 = [toDoItem1, toDoItem2, toDoItem3];

console.log(project1);