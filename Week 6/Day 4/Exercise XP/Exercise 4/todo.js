// =====================================
// TODO LIST CLASS (ES6 MODULE)
// =====================================

class TodoList {
    constructor() {
        this.tasks = [];
    }

    // =====================================
    // ADD TASK
    // =====================================
    addTask(taskName) {
        this.tasks.push({
            name: taskName,
            completed: false
        });
        console.log(`Task added: ${taskName}`);
    }

    // =====================================
    // MARK TASK AS COMPLETE
    // =====================================
    completeTask(taskName) {
        const task = this.tasks.find(
            t => t.name.toLowerCase() === taskName.toLowerCase()
        );

        if (task) {
            task.completed = true;
            console.log(`Task completed: ${taskName}`);
        } else {
            console.log("Task not found.");
        }
    }

    // =====================================
    // LIST ALL TASKS
    // =====================================
    listTasks() {
        console.log("\nTodo List:");
        this.tasks.forEach((task, index) => {
            console.log(
                `${index + 1}. ${task.name} - ${task.completed ? "✅ Done" : "❌ Not Done"}`
            );
        });
    }
}

// Export class
export default TodoList;