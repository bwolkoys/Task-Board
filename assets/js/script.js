// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
// From Xpert learning: When converting a number to base36, each digit in the base36 string represents a value according to its position in the string. For example, in the base36 number '1a', the '1' represents 1 * 36^1 and the 'a' represents 10 * 36^0, so the total value is 36 + 10 = 46.
function generateTaskId() {
    const timeStamp = Date.now().toString(36);
    const randomNumber = Math.random().toString(36).substr(2, 5);
    return timeStamp + randomNumber;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    let deadlineDate = "Deadline Date"
    let title = "Title"
    let description = "Description"
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let button = document.createElement("button");
    h3.textContent = title
    p1.textContent = description 
    p2.textContent = deadlineDate
    button.textContent = "Delete"
    div.appendChild(h3);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(button);
    document.getElementById("todo-cards").appendChild(div);
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    createTaskCard()
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    document.getElementById("add_task").addEventListener("click", handleAddTask);

});
