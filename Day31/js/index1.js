let tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

//JSON.stringify ---> Chuyển javascript --> json
//JSON.pare   --> Chuyển json  --> javascirpt

const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("#todo-input");
const submit = todoForm.querySelector("#submit");
const taskList = document.querySelector("#task-list");
const deleteAll = document.querySelector(".delete-all");

deleteAll.addEventListener("click", function (e) {
    const confirmDeleteAll = confirm("Confirm Delete All");

    if (confirmDeleteAll) {
        tasks = [];
        renderTasks();
        saveTasks();
        return;
    }
});

function escapeHTML(html) {
    const div = document.createElement("div");
    div.innerText = html;
    return div.innerHTML;
}

function isDuplicateTask(newTitle, excludeIndex = -1) {
    const isDuplicate = tasks.some((task, index) => {
        return (
            task.title.toLowerCase() === newTitle.toLowerCase() &&
            excludeIndex !== index
        );
    });
    return isDuplicate;
}

function cleanUpSpaces(input) {
    const words = input.split(" ").filter((word) => {
        return word !== "";
    });

    return words.join(" ");
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function handleTaskActions(e) {
    const taskItem = e.target.closest(".task-item");

    if (!taskItem) {
        return;
    }

    const taskIndex = +taskItem.dataset.index;
    console.log(taskIndex);

    const task = tasks[taskIndex];

    if (e.target.closest(".edit")) {
        let newTitle = prompt("Enter the new task title: ", task.title);

        if (newTitle === null) {
            return;
        }
        newTitle = newTitle.trim();

        newTitle = cleanUpSpaces(newTitle);
        if (!newTitle) {
            alert("Task title cannot be empty!!!");
            return;
        }

        if (isDuplicateTask(newTitle, taskIndex)) {
            alert(
                "Task with this title already exists or task title cannot be empty! Please re-enter!"
            );
            return;
        }

        task.title = newTitle;
        renderTasks();
        saveTasks();
    } else if (e.target.closest(".done")) {
        task.completed = !task.completed;
        renderTasks();
        saveTasks();
    } else if (e.target.closest(".delete")) {
        let result = confirm(`Surely you want to delete "${task.title}" ?`);
        if (result) {
            console.log(taskIndex);
            tasks.splice(taskIndex, 1);
            renderTasks();
            saveTasks();
        }
    }
}

submit.onmousedown = function (e) {
    e.preventDefault();
};

function addTask(e) {
    e.preventDefault();
    // const completed = false;
    let valueTask = todoInput.value.trim();
    if (valueTask === "") {
        alert("Please write something!");
        return;
    }
    valueTask = cleanUpSpaces(valueTask);

    if (isDuplicateTask(valueTask)) {
        alert(
            "Task with this title already exists! Please use a different title."
        );
        return;
    }

    const newTask = {
        title: valueTask,
        completed: false,
    };
    tasks.push(newTask);
    todoInput.value = "";

    renderTasks();
    saveTasks();
}

function renderTasks(e) {
    deleteAll.style = "display: none";
    if (tasks.length) {
        deleteAll.style = "display: block";
    }
    if (!tasks.length) {
        taskList.innerHTML = `<li class="empty-message">No tasks available.</li>`;
        return;
    }
    const html = tasks
        .map(
            (task, index) => `
        <li class="task-item ${
            task.completed ? "completed" : ""
        }" data-index="${index}">
    <span class="task-title">${escapeHTML(task.title)}</span>
    <div class="task-action">
        <button class="task-btn edit">Edit</button>

        <button class="task-btn done">${
            task.completed ? "Mark as undone" : "Mark as done"
        }</button>

        <button class="task-btn delete">Delete</button>
    </div>
    </li>
    `
        )
        .join("");

    taskList.innerHTML = html;
}

renderTasks();

todoForm.addEventListener("submit", addTask);

taskList.addEventListener("click", handleTaskActions);

//localStorage: lưu trữ kiểu dữ liệu chuỗi vào trình duyệt (Khác chuỗi sẽ tự ép sang chuỗi)

//<img src="" onerror="console.log(localStorage.getItem('tasks'))">
