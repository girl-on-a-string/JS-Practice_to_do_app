//variables 

const all = document.querySelector("#all");
const container = all.querySelector("#container");
const add = all.querySelector("#add");

const addTask = container.querySelector("#input");

const list = container.querySelector("#list");

let taskContainer = document.querySelector("#tasks");

//create task

function createTask () {
    //confirm request

    console.log("received input");

    //add input text to listitem

    let listItem = document.createElement("div");

    listItem.classList.add("list-item");
    listItem.classList.add("incomplete");
    listItem.style.display = "flex";
    listItem.style.justifyContent = "space-between";
    taskContainer.appendChild(listItem);

    //create secondary div container for checkbox and label

    let secondaryDiv = document.createElement("div");
    listItem.appendChild(secondaryDiv);

    //create checkbox + checkbox handling

    let checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");

    checkbox.type = "checkbox";
    checkbox.value = "unchecked";
    checkbox.name = "completion-status";

    let strike = document.createElement("div");
    strike.classList.add("strike");

    checkbox.addEventListener("click", () => {
        taskStatus();

        checkbox.value = "checked";
        listItem.classList.remove("incomplete");
        listItem.classList.add("complete");

        listItem.appendChild(strike);

        strike.style.animationPlayState = "running";

        let completedListItem = listItem.getElementsByClassName("strike");
       // let allListItems = taskContainer.getElementsByClassName("list-item");
        // let lastItem = allListItems[allListItems.length-1];
        let lastItem = taskContainer.lastChild;
        lastItem.classList.add("last-child");
        //lastItem.appendChild(completedListItem);

        console.log(true);
    });

    // add label

    let label = document.createElement("label");
    label.value = "";

    //append checkbox and label to div

    secondaryDiv.append(checkbox);
    secondaryDiv.appendChild(label);

    // add inner text to label

    let listText = document.getElementById("input").value;
    label.innerText = listText;

    // delete buttn and icon creation and handling

    let deleteIcon = document.createElement("i");
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.appendChild(deleteIcon);

    listItem.appendChild(deleteBtn);

    deleteIcon.classList.add("material-icons");
    deleteIcon.innerHTML = "&#xe872;";

    deleteBtn.addEventListener("click", (e) => {
        e.preventDefault();
        listItem.remove();
        console.log(true);
    });

    //update task status

    // taskStatus();

    // validate request

    console.log(true);
}

function taskStatus () {
    let completeAmt = document.querySelector("#completed-amt")
    let numComplete = taskContainer.querySelectorAll(".complete").length;
    numComplete += 1;
    
    completeAmt.innerHTML = numComplete;

    let incompleteAmt = document.querySelector("#incompleted-amt");
    let numIncomplete = taskContainer.querySelectorAll(".incomplete").length;

    incompleteAmt.innerHTML = numIncomplete;
}

//display task or throw error

add.addEventListener("submit", (e) => {
    if (addTask.value == "" || addTask.value == null) {
        e.preventDefault();
        alert("You can't have an empty task!");
    } else {
        e.preventDefault();
        createTask();
        //completeTask();
        addTask.value = null;
    }
});
