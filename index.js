const taskInput = document.querySelector(".taskInput");
const addTaskBtn = document.querySelector(".addTaskBtn");
const tasks = document.querySelector(".tasks");
const allElementsEdit = document.querySelector(".allElementsEdit");

function createElement(tag, attributes) {
  return Object.assign(document.createElement(tag), attributes);
}

function addTask(e) {
  console.log("Task");
  const todo = createElement("li", {
    className: "task",
    innerText: taskInput.value,
  });

  taskInput.value = "";

  const buttons = createElement("div", { className: "buttons" });

  const readyButton = createElement("button", {
    className: "readyBtn",
    innerText: "unready",
    type: "submit",
  });

  const deleteButton = createElement("button", {
    className: "deleteBtn",
    innerText: "delete",
    type: "submit",
  });

  const status = createElement("div", { className: "status" });

  buttons.append(readyButton, deleteButton);
  todo.append(buttons, status);

  tasks.appendChild(todo);
}

function taskBtns(e) {
  const taskDiv = e.target.parentElement.parentElement;
  const status = taskDiv.querySelector(".status");

  switch (e.target.className) {
    case "deleteBtn":
      taskDiv.remove();
      break;

    case "readyBtn":
      e.target.innerText =
        e.target.innerText === "unready" ? "ready" : "unready";
      status.classList.toggle("completed");
      break;

    case "removeAllBtn":
      const allTasks = document.querySelectorAll(".task");
      allTasks.forEach((task) => task.remove());
      break;

    case "readyAllBtn":
      const allStatuses = document.querySelectorAll(".status");

      document
        .querySelectorAll(".readyBtn")
        .forEach((btn) => (btn.innerText = "ready"));

      allStatuses.forEach((status) => status.classList.toggle("completed"));
      break;

    default:
      console.log("err");
  }
}

addTaskBtn.addEventListener("click", addTask);
tasks.addEventListener("click", taskBtns);
allElementsEdit.addEventListener("click", taskBtns);
