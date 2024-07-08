//variables 

const all = document.querySelector("#all");
const container = all.querySelector("#container");
const add = all.querySelector("#add");
const addTask = container.querySelector("#input");

const list = container.querySelector("#list");

//create task

function createTask () {
    let listText = document.getElementById("input").value;
    const listItem = document.createElement("li");
    listItem.innerHTML = listText;
    list.appendChild(listItem);
    console.log(true);
        
    console.log("received input");

}

add.addEventListener("submit", (e) => {
    e.preventDefault();
    createTask();
    addTask.value = null;
});

//populate interface with task

function finishTask () {
    console.log("received request");
}