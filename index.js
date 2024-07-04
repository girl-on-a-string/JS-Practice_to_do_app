//variables 

const all = document.querySelector("#all");
const container = all.querySelector("#container");
const add = all.querySelector("#add");
const addTask = container.querySelector("#input");

const list = container.querySelector("#list");

//create task

function createTask () {
    // let listText = document.createTextNode(taskInput);
    // listText = listText.innerText = `${listText}`;


    // if (listText !== "") {
    //     const listItem = document.createElement("li");
    //     list.appendChild(listItem);
    //     listItem.innerText = listText;
    //     console.log(true);
    // } else if (listText === "") {
    //     alert("Please input a task before submitting!");
    //     console.log(false);
    // }
    const taskInput = document.getElementById("input").value;

    let listText = taskInput;
    const listItem = document.createElement("li");
    listItem.innerHTML = listText;
    list.appendChild(listItem);
    console.log(true);
        
    console.log("received input");

}

//populate interface with task

function finishTask () {
    console.log("received request");
}