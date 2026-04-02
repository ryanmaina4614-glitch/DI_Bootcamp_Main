
// 📝 To Do List


const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const listDiv = document.querySelector(".listTasks");

// BONUS: array of objects
let tasks = [];
let taskId = 0;



// Add Task


function addTask(event) {
    event.preventDefault();

    const value = input.value.trim();

    if (value === "") {
        alert("Please enter a task");
        return;
    }

    // Create task object
    const taskObj = {
        task_id: taskId,
        text: value,
        done: false
    };

    tasks.push(taskObj);

    // Create DOM element
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.setAttribute("data-task-id", taskId);

    // Delete button (X)
    const deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fa-solid", "fa-xmark", "delete-btn");
    deleteBtn.addEventListener("click", deleteTask);

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", doneTask);

    // Label
    const span = document.createElement("span");
    span.textContent = value;

    // Append elements
    taskDiv.appendChild(deleteBtn);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(span);

    listDiv.appendChild(taskDiv);

    // Reset input
    input.value = "";
    taskId++;
}

form.addEventListener("submit", addTask);



// Mark Task as Done


function doneTask(event) {
    const taskDiv = event.target.parentElement;
    const id = Number(taskDiv.getAttribute("data-task-id"));

    const task = tasks.find(t => t.task_id === id);

    task.done = !task.done;

    const span = taskDiv.querySelector("span");

    if (task.done) {
        span.classList.add("done");
    } else {
        span.classList.remove("done");
    }
}



// Delete Task


function deleteTask(event) {
    const taskDiv = event.target.parentElement;
    const id = Number(taskDiv.getAttribute("data-task-id"));

    // Remove from array
    tasks = tasks.filter(task => task.task_id !== id);

    // Remove from DOM
    taskDiv.remove();
}