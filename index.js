//variables 

const all = document.querySelector("#all");
const container = all.querySelector("#container");
const add = all.querySelector("#add");
const addTask = container.querySelector("#input");

const list = container.querySelector("#list");

//create task

function createTask () {
    console.log("received input");
    let listText = document.getElementById("input").value;
    const listItem = document.createElement("li");
    listItem.innerHTML = listText;
    list.appendChild(listItem);
    console.log(true);
}

//display task or throw error

add.addEventListener("submit", (e) => {
    if (addTask.value == "" || addTask.value == null) {
        alert("You can't have an empty task!");
    } else {
        e.preventDefault();
        createTask();
        addTask.value = null;
    }
});
