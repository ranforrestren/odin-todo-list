import './style.css';
import { model, defaultProject } from './model.js';

const date = new Date();
const currentDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, 10);

model.createTodo(undefined, "Test1", "High", currentDate, "Test Description 1");
model.createTodo(undefined, "Really Really Really Long Name Test", "Default", currentDate, "Really Really Really Really Really Really Long Description Test");
model.createTodo(undefined, "Test3", "Default", currentDate, "Test Description 3");
model.createTodo(undefined, "Test4", "Default", currentDate, "Test Description 4");
model.createTodo(undefined, "Test5", "Medium", currentDate, "Test Description 5");
model.createTodo(undefined, "Test6", "Default", currentDate, "Test Description 6");
model.createTodo(undefined, "Test7", "Default", currentDate, "Test Description 7");
model.createTodo(undefined, "Test8", "Default", currentDate, "Test Description 8");
model.createTodo(undefined, "Test9", "Low", currentDate, "Test Description 9");
model.createTodo(undefined, "Test10", "Default", currentDate, "Test Description 10");
model.createTodo(undefined, "Test11", "Default", currentDate, "Test Description 11");
model.createTodo(undefined, "Test12", "Low", currentDate, "Test Description 12");