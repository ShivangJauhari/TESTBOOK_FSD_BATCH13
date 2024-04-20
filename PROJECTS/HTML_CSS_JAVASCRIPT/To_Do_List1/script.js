/**
 * Represents the user input element.
 * @type {HTMLInputElement}
 */
let userInput = document.getElementById("user-input");

/**
 * Represents the add button element.
 * @type {HTMLButtonElement}
 */
let addButton = document.getElementById("add-button");

/**
 * Adds a click event listener to the add button.
 * When clicked, it adds a new task to the task list.
 */
addButton.addEventListener("click", function() {
    let task = userInput.value;
    if (task==="") {
        alert("Please enter a task");
    } else {
        let taskList = document.querySelector(".list-items");
        let newTask = document.createElement("div");
        newTask.classList.add("task-item");
        newTask.innerHTML = `<p>${task}</p> <span class="delete">&#10008;</span> <span class="done">&#10004;</span> <span class="edit">&#9998;</span>`;
        taskList.appendChild(newTask);
        userInput.value = "";
    }
    console.log(document.querySelectorAll(".list-items div"));
});

/**
 * Adds a click event listener to the task list.
 * Handles the delete, done, and edit actions for each task.
 * @param {Event} event - The click event object.
 */
document.querySelector(".list-items").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    } else if (event.target.classList.contains("done")) {
        event.target.parentElement.classList.toggle("completed");
    } else if (event.target.classList.contains("edit")) {
        let editTask = prompt("Edit task", event.target.parentElement.querySelector("p").innerText);
        if (editTask==="") {
            alert("Please enter a task");
        } else {
            event.target.parentElement.querySelector("p").innerText = editTask;
        }
    }
});

