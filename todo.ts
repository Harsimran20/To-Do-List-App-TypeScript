// Get the input, button, and task list elements from the DOM
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addTaskBtn = document.getElementById("addTaskBtn") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

// Task type definition
type Task = {
    id: number;
    title: string;
    completed: boolean;
};

// List of tasks
let tasks: Task[] = [];
let taskId = 0;

// Add task function
function addTask() {
    const taskTitle = taskInput.value.trim(); // Get input value and remove whitespace
    if (taskTitle === "") {
        alert("Task cannot be empty.");
        return;
    }

    const newTask: Task = {
        id: taskId++,
        title: taskTitle,
        completed: false
    };

    tasks.push(newTask); // Add task to the array
    renderTasks();       // Render the updated task list
    taskInput.value = ""; // Clear the input field
}

// Mark task as complete
function completeTask(id: number) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks(); // Re-render the list to show updated task
    }
}

// Render task list
function renderTasks() {
    taskList.innerHTML = ""; // Clear the current list

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="${task.completed ? "completed" : ""}">${task.title}</span>
            <button class="complete-btn">Complete</button>
        `;

        const completeBtn = li.querySelector("button") as HTMLButtonElement;
        completeBtn.addEventListener("click", () => completeTask(task.id));

        taskList.appendChild(li);
    });
}

// Add task button event listener
addTaskBtn.addEventListener("click", addTask);
