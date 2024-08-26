// Get the input, button, and task list elements from the DOM
var taskInput = document.getElementById("taskInput");
var addTaskBtn = document.getElementById("addTaskBtn");
var taskList = document.getElementById("taskList");
// List of tasks
var tasks = [];
var taskId = 0;
// Add task function
function addTask() {
    var taskTitle = taskInput.value.trim(); // Get input value and remove whitespace
    if (taskTitle === "") {
        alert("Task cannot be empty.");
        return;
    }
    var newTask = {
        id: taskId++,
        title: taskTitle,
        completed: false
    };
    tasks.push(newTask); // Add task to the array
    renderTasks(); // Render the updated task list
    taskInput.value = ""; // Clear the input field
}
// Mark task as complete
function completeTask(id) {
    var task = tasks.find(function (task) { return task.id === id; });
    if (task) {
        task.completed = !task.completed;
        renderTasks(); // Re-render the list to show updated task
    }
}
// Render task list
function renderTasks() {
    taskList.innerHTML = ""; // Clear the current list
    tasks.forEach(function (task) {
        var li = document.createElement("li");
        li.innerHTML = "\n            <span class=\"".concat(task.completed ? "completed" : "", "\">").concat(task.title, "</span>\n            <button class=\"complete-btn\">Complete</button>\n        ");
        var completeBtn = li.querySelector("button");
        completeBtn.addEventListener("click", function () { return completeTask(task.id); });
        taskList.appendChild(li);
    });
}
// Add task button event listener
addTaskBtn.addEventListener("click", addTask);
