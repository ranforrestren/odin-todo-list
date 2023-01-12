import './style.css';
import { model, defaultProject } from './model.js';

const date = new Date();
const currentDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, 10);

model.createTodo(undefined, {taskName:"Test1", priority:"High", dueDate:currentDate, description:"Test Description 1"});
model.createTodo(undefined, {taskName:"Really Really Really Long Name Test", priority:"Default", dueDate:currentDate, description:"Really Really Really Really Really Really Long Description Test"});
model.createTodo(undefined, {taskName:"Test3", priority:"Default", dueDate:currentDate, description:"Test Description 3"});
model.createTodo(undefined, {taskName:"Test4", priority:"Default", dueDate:currentDate, description:"Test Description 4"});
model.createTodo(undefined, {taskName:"Test5", priority:"Medium", dueDate:currentDate, description:"Test Description 5"});
model.createTodo(undefined, {taskName:"Test6", priority:"Default", dueDate:currentDate, description:"Test Description 6"});
model.createTodo(undefined, {taskName:"Test7", priority:"Default", dueDate:currentDate, description:"Test Description 7"});
model.createTodo(undefined, {taskName:"Test8", priority:"Default", dueDate:currentDate, description:"Test Description 8"});
model.createTodo(undefined, {taskName:"Test9", priority:"Low", dueDate:currentDate, description:"Test Description 9"});
model.createTodo(undefined, {taskName:"Test10", priority:"Default", dueDate:currentDate, description:"Test Description 10"});
model.createTodo(undefined, {taskName:"Test11", priority:"Default", dueDate:currentDate, description:"Test Description 11"});
model.createTodo(undefined, {taskName:"Test12", priority:"Low", dueDate:currentDate, description:"Test Description 12"});