import './style.css';
import { model, defaultProject } from './model.js';
import commandFactory from './command.js';

const date = new Date();
const currentDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, 10);

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