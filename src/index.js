import './style.css';
import { model, defaultProject } from './model.js';
import view from './view.js';
import controller from './controller.js';

model.addTodo(undefined, "Test1", undefined, undefined, "Test Description 1");
model.addTodo(undefined, "Test2", undefined, undefined, "Test Description 2");
model.addTodo(undefined, "Test3", undefined, undefined, "Test Description 3");