import './style.css';
import { model, defaultProject } from './model.js';
import commandFactory from './command.js';

const date = new Date();
const currentDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, 10);

const command1 = commandFactory("createProj", {projName:"Project 1", color:"red"});
const command2 = commandFactory("createProj", {projName:"Project 2", color:"orange"});
const command3 = commandFactory("createProj", {projName:"Project 3", color:"yellow"});
const command4 = commandFactory("createProj", {projName:"Project 4", color:"green"});
const command5 = commandFactory("createProj", {projName:"Project 5", color:"cyan"});
const command6 = commandFactory("createProj", {projName:"Project 6", color:"blue"});
const command7 = commandFactory("createProj", {projName:"Project 7", color:"purple"});
const command8 = commandFactory("createProj", {projName:"Project 8", color:"pink"});

model.handleCommand(command1);
model.handleCommand(command2);
model.handleCommand(command3);
model.handleCommand(command4);
model.handleCommand(command5);
model.handleCommand(command6);
model.handleCommand(command7);
model.handleCommand(command8);

const command9 = commandFactory("readProj", {id: 1});
model.handleCommand(command9);

model.handleCommand( commandFactory("create", {taskName:"Test1", priority:"High", dueDate:currentDate, description:"Test Description 1"}));
model.handleCommand( commandFactory("create", {taskName:"Really Really Really Long Name Test", priority:"Default", dueDate:currentDate, description:"Really Really Really Really Really Really Long Description Test"}));
model.handleCommand( commandFactory("create", {taskName:"Test3", priority:"Default", dueDate:currentDate, description:"Test Description 3"}));
model.handleCommand( commandFactory("create", {taskName:"Test4", priority:"Default", dueDate:currentDate, description:"Test Description 4"}));
model.handleCommand( commandFactory("create", {taskName:"Test5", priority:"Medium", dueDate:currentDate, description:"Test Description 5"}));
model.handleCommand( commandFactory("create", {taskName:"Test6", priority:"Default", dueDate:currentDate, description:"Test Description 6"}));
model.handleCommand( commandFactory("create", {taskName:"Test7", priority:"Default", dueDate:currentDate, description:"Test Description 7"}));
model.handleCommand( commandFactory("create", {taskName:"Test8", priority:"Default", dueDate:currentDate, description:"Test Description 8"}));
model.handleCommand( commandFactory("create", {taskName:"Test9", priority:"Low", dueDate:currentDate, description:"Test Description 9"}));
model.handleCommand( commandFactory("create", {taskName:"Test10", priority:"Default", dueDate:currentDate, description:"Test Description 10"}));
model.handleCommand( commandFactory("create", {taskName:"Test11", priority:"Default", dueDate:currentDate, description:"Test Description 11"}));
model.handleCommand( commandFactory("create", {taskName:"Test12", priority:"Low", dueDate:currentDate, description:"Test Description 12"}));

const command10 = commandFactory("readProj", {id: 2});
model.handleCommand(command10);

model.handleCommand( commandFactory("create", {taskName:"Test13", priority:"High", dueDate:currentDate, description:"Test Description 13"}));
model.handleCommand( commandFactory("create", {taskName:"Test14", priority:"Medium", dueDate:currentDate, description:"Test Description 14"}));
model.handleCommand( commandFactory("create", {taskName:"Test15", priority:"Low", dueDate:currentDate, description:"Test Description 15"}));

const command11 = commandFactory("readProj", {id: 3});
model.handleCommand(command11);

model.handleCommand( commandFactory("create", {taskName:"Test16", priority:"Low", dueDate:currentDate, description:"Test Description 16"}));
model.handleCommand( commandFactory("create", {taskName:"Test17", priority:"Low", dueDate:currentDate, description:"Test Description 17"}));
model.handleCommand( commandFactory("create", {taskName:"Test18", priority:"Low", dueDate:currentDate, description:"Test Description 18"}));

const command12 = commandFactory("readProj", {id: 4});
model.handleCommand(command12);

model.handleCommand( commandFactory("create", {priority:"Low", dueDate:currentDate}));
model.handleCommand( commandFactory("create", {priority:"Low", dueDate:currentDate}));
model.handleCommand( commandFactory("create", {priority:"Low", dueDate:currentDate}));

const command13 = commandFactory("readProj", {id: 5});
model.handleCommand(command13);

model.handleCommand( commandFactory("create", {priority:"Low", dueDate:currentDate}));
model.handleCommand( commandFactory("create", {priority:"Low", dueDate:currentDate}));
model.handleCommand( commandFactory("create", {priority:"Low", dueDate:currentDate}));

const command14 = commandFactory("readProj", {id: 6});
model.handleCommand(command14);

model.handleCommand( commandFactory("create", {priority:"Low", dueDate:currentDate}));
model.handleCommand( commandFactory("create", {priority:"Low", dueDate:currentDate}));
model.handleCommand( commandFactory("create", {priority:"Low", dueDate:currentDate}));

const command15 = commandFactory("readProj", {id: 7});
model.handleCommand(command15);

model.handleCommand( commandFactory("create", {priority:"Low", dueDate:currentDate}));
model.handleCommand( commandFactory("create", {priority:"Low", dueDate:currentDate}));
model.handleCommand( commandFactory("create", {priority:"Low", dueDate:currentDate}));

const command16 = commandFactory("readProj", {id: 8});
model.handleCommand(command16);

model.handleCommand( commandFactory("create", {priority:"Low", dueDate:currentDate}));
model.handleCommand( commandFactory("create", {priority:"Low", dueDate:currentDate}));
model.handleCommand( commandFactory("create", {priority:"Low", dueDate:currentDate}));

model.handleCommand(command9);