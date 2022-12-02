const task = document.querySelector("#tarefa");
const btnAddTask = document.querySelector("#add_tarefa");
const elementfather = document.querySelector(".sub-lista");
const toDo = document.querySelector("#a-fazer");

btnAddTask.onclick = function (e) {
  e.preventDefault();

  const firstChild = elementfather.firstChild;

  const newItem = document.createElement("li");
  newItem.innerHTML = `${task.value}`;

  elementfather.insertBefore(newItem, firstChild);
  task.value = "";

  toDo.appendChild(newItem);
};

const doneList = document.querySelector("#feito");

const done = function (e) {
  const task = e.target.innerText;
  const newItem = document.createElement("li");
  newItem.innerText = task;

  doneList.appendChild(newItem);

  toDo.removeChild(e.target);
};

toDo.addEventListener("click", done);
