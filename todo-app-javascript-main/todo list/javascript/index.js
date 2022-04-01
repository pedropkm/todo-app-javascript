
const text =document.getElementById("task-input")
const addTaskButton = document.getElementById("new-task-add")
const SaveTaskButton = document.getElementById("edit-btn")
const List = document.getElementById("tasks")
const saveIn = document.getElementById("saveIndex")
const date = document.getElementById("date")
const sort = document.getElementById("sort_task")

let Taskarray = []
addTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    let tasks = localStorage.getItem("tasks")
    if (tasks === null){
    Taskarray = [] 
}else {
    Taskarray = JSON.parse(tasks)
}
Taskarray.push(text.value+ " " +date.value);
text.value = ""
localStorage.setItem("tasks", JSON.stringify(Taskarray))
displayTasks()
})

function displayTasks(){
    let tasks = localStorage.getItem("tasks")
    if (tasks ===null){
        Taskarray = []
    }else {
        Taskarray = JSON.parse(tasks)
    }
    let html = ""
    Taskarray.forEach((list, ind) =>{
        html += `<div class = "flex">
        <p class=w>${list}</p>
        <button class ="edit" onclick='edit(${ind})'>Edit</button>
        <button class = "delete" onclick='deleteTodo(${ind})'>Delete</button>
        </div>`
    })
    List.innerHTML = html
}

function deleteTodo(ind){
    let tasks = localStorage.getItem("tasks")
    Taskarray = JSON.parse(tasks)
    Taskarray.splice(ind, 1)
    localStorage.setItem("tasks", JSON.stringify(Taskarray))
    displayTasks()
}
function edit(ind){
    saveIn.value = ind
    let tasks = localStorage.getItem("tasks")
    Taskarray = JSON.parse(tasks)
    text.value = Taskarray[ind]
    addTaskButton.style.display = "none"
    SaveTaskButton.style.display = "block"
}
SaveTaskButton.addEventListener("click", (e) =>{
    e.preventDefault();
    let tasks = localStorage.getItem("tasks")
    Taskarray = JSON.parse(tasks)
    let id = saveIn.value
    Taskarray[id] = text.value
    addTaskButton.style.display = "block"
    SaveTaskButton.style.display = "none"
    text.value = ""
    localStorage.setItem("tasks", JSON.stringify(Taskarray))
    displayTasks()
})
sort.addEventListener("click", (e) =>{
    e.preventDefault();
    let tasks = localStorage.getItem("tasks")
    Taskarray = JSON.parse(tasks)
    Taskarray.sort()
    localStorage.setItem("tasks", JSON.stringify(Taskarray))
    displayTasks()
})