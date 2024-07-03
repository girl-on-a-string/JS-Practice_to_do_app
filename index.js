//variables 

const all = document.querySelector("#all");
const container = all.querySelector("#container");
const addTask = container.querySelector("#input");
const taskInput = document.querySelector("#input").value;

const list = container.querySelector("#list");

//create task

function createTask () {
    let listText = document.createTextNode(taskInput);
    listText = listText.innerText = `${listText}`;

    const listItem = document.createElement("li");
    list.appendChild(listItem);
    listItem.innerText = listText;
        
    console.log("received input");

}

//populate interface with task

function finishTask () {
    console.log("received request");
}