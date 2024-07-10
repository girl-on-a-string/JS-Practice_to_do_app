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

    //add input text to listitem

    let listItem = document.createElement("div");
    let taskContainer = document.querySelector("#tasks");

    listItem.classList.add("list-item");
    listItem.style.display = "flex";
    listItem.style.justifyContent = "space-between";
    taskContainer.appendChild(listItem);

    //create secondary div container for checkbox and label

    let secondaryDiv = document.createElement("div");
    listItem.appendChild(secondaryDiv);

    //create checkbox

    let checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");

    checkbox.type = "checkbox";
    checkbox.value = "";
    checkbox.name = "completion-status";

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
        console.log(true);
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
        completeTask();
        deleteTask();
    }
});

//complate task 

function completeTask () {
    let checkbox = document.querySelector(".checkbox");
    checkbox.value = "unchecked";

    let strike = document.createElement("div");
    strike.classList.add("strike");

    checkbox.addEventListener("change", () => {
        checkbox.value = "checked";

        let listItem = document.querySelector(".list-item");
        listItem.appendChild(strike);

        strike.style.animationPlayState = "running";

        console.log(true);
    });
}

// delete task

function deleteTask () {
    let deleteIcon = document.querySelector(".material-icons");
    deleteIcon.addEventListener("click", () => {
        return true;
    });
}