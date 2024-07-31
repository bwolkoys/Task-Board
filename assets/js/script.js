// Retrieve tasks and nextId from localStorage
//let taskList = JSON.parse(localStorage.getItem("tasks"));
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
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let button = document.createElement("button");
    h3.textContent = task.title
    p1.textContent = task.description 
    p2.textContent = task.deadlineDate
    button.textContent = "Delete"
    button.addEventListener("click", handleDeleteTask);
    div.classList.add('task-card');
    div.id = task.id
    div.appendChild(h3);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(button);
    return div 
    //document.getElementById("todo-cards").appendChild(div);
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('todo-cards');
    //using this to clear existing task list
    taskList.innerHTML = '';
    tasks.forEach(task =>{
        const taskCard = createTaskCard (task);
        //taskCard.textContent = task.title;
        //to make it draggable
        taskCard.draggable = true;
        taskList.appendChild(taskCard);
    })
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    let deadlineDate = document.getElementById("deadlineDate").value;
    let title = document.getElementById("taskName").value;
    console.log(title);
    let description = document.getElementById("description").value;
    let id = generateTaskId ()
    let task = {} 
    task.id = id
    task.title = title
    task.deadlineDate = deadlineDate
    task.description = description 
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    console.log(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTaskList();
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    console.log(event.target.parentElement.id);
    let id = event.target.parentElement.id
    let index = 0
    let target = 0
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task =>{
        if (task.id == id) {
            target = index 
        }
        index ++
    })
    tasks.splice (target, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTaskList();
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("add_task");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
    //document.getElementById("add_task").addEventListener("click", popUpModal);
    document.getElementById("createTask").addEventListener("click", handleAddTask);
    renderTaskList ()
}); 

