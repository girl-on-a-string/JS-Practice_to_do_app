//variables 

const all = document.querySelector("#all");
const container = all.querySelector("#container");
const add = all.querySelector("#add");

const addTask = container.querySelector("#input");

const list = container.querySelector("#list");

//create task

function createTask () {
    console.log("received input");

    // let listText = document.getElementById("input").value;
    // const listItem = document.createElement("li");
    // listItem.innerHTML = listText;
    // list.appendChild(listItem);

    // create div container

    const taskContainer = document.getElementById("tasks");

    let listText = document.getElementById("input").value;
    const listItem = document.createElement("div");
    listItem.classList.add("list-item");
    taskContainer.appendChild(listItem);

    // add checkbox and label

    let checkbox = document.createElement("input");
    checkbox = checkbox.type = "checkbox";
    let label = document.createElement("label");
    label.value = "";

    //append checkbox and label to div

    listItem.appendChild(label);

    // add inner text to label

    label.innerText = listText;

    // validate request

    console.log(true);
}

//display task or throw error

add.addEventListener("submit", (e) => {
    if (addTask.value == "" || addTask.value == null) {
        e.preventDefault();
        alert("You can't have an empty task!");
    } else {
        e.preventDefault();
        createTask();
        addTask.value = null;
    }
});
