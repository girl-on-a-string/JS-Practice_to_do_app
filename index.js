//variables 

const all = document.querySelector("#all");
const container = all.querySelector("#container");
const add = all.querySelector("#add");

const addTask = container.querySelector("#input");

const list = container.querySelector("#list");

//create task

function createTask () {
    //confirm request

    console.log("received input");

    // create main task div container

    const taskContainer = document.getElementById("tasks");

    let listText = document.getElementById("input").value;
    const listItem = document.createElement("div");
    listItem.classList.add("list-item");
    listItem.style.display = "flex";
    listItem.style.justifyContent = "space-between";
    taskContainer.appendChild(listItem);

    //create secondary div container for checkbox and label

    let secondaryDiv = document.createElement("div");
    listItem.appendChild(secondaryDiv);

    // add checkbox and label

    let checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");

    checkbox.type = "checkbox";
    checkbox.value = "";
    checkbox.name = "completion-status";

    let label = document.createElement("label");
    label.value = "";

    //append checkbox and label to div

    secondaryDiv.append(checkbox);
    secondaryDiv.appendChild(label);

    // add inner text to label

    label.innerText = listText;

    // delete buttn and icon creation and handling

    let deleteIcon = document.createElement("i");
    let deleteBtn = document.createElement("button");
    deleteBtn.appendChild(deleteIcon);

    listItem.appendChild(deleteBtn);

    deleteIcon.classList.add("material-icons");
    deleteIcon.innerHTML = "&#xe872;";

    deleteBtn.addEventListener("click", (e) => {
        e.preventDefault();
    });

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

// deletion and completion

function deleteTask () {
    deleteIcon.addEventListener("click", () => {
        listItem.style.textDecoration = "line-through";
        return true;
    });
}