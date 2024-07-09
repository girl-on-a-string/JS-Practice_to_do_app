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

    listItem.classList.add("list-item");
    listItem.style.display = "flex";
    listItem.style.justifyContent = "space-between";
    taskContainer.appendChild(listItem);

    //create secondary div container for checkbox and label

    let secondaryDiv = document.createElement("div");
    listItem.appendChild(secondaryDiv);

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
    checkbox.addEventListener("click", () => {
        listItem.style.textDecoration = "line-through";
        return true;
    })
}

// delete task

function deleteTask () {
    deleteIcon.addEventListener("click", () => {
        return true;
    });
}