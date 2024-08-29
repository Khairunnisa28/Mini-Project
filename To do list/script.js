const taskInput = document.getElementById("task");
const addButton = document.getElementById("add");
const taskList = document.getElementById("taskList");

let editTask = null;

// Tambahkan tugas baru
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    if (!confirm("Apakah Anda yakin ingin menambahkan tugas ini?")) {
        return;
    }

    if (editTask) {
        editTask.querySelector(".task-text").textContent = taskText;
        editTask = null;
        taskInput.value = "";
        addButton.textContent = "Tambah";
        return;
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <span class="edit">Edit</span>
        <span class="delete">Hapus</span>
    `;

    taskList.appendChild(listItem);
    taskInput.value = "";

    listItem.querySelector(".delete").addEventListener("click", function () {
        if (confirm("Apakah Anda yakin menghapus?")) {
            taskList.removeChild(listItem);
        }
    });

    listItem.querySelector(".edit").addEventListener("click", function () {
        taskInput.value = listItem.querySelector(".task-text").textContent;
        addButton.textContent = "Update";
        editTask = listItem;
    });
}

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
