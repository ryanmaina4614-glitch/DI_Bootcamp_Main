// =====================================
// IMPORT TODO CLASS
// =====================================

import TodoList from './todo.js';

// =====================================
// CREATE INSTANCE
// =====================================

const myTodo = new TodoList();

// =====================================
// ADD TASKS
// =====================================

myTodo.addTask("Learn JavaScript");
myTodo.addTask("Build a project");
myTodo.addTask("Practice coding");

// =====================================
// COMPLETE TASKS
// =====================================

myTodo.completeTask("Learn JavaScript");

// =====================================
// LIST TASKS
// =====================================

myTodo.listTasks();