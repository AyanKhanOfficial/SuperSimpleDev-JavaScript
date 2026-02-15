const toDoList = [];

function addToDo() {
  const inputElement = document.querySelector(".js-input-field");
  const name = inputElement.value;
  toDoList.push(name);
  inputElement.value = "";
  renderTodoList();
}
function renderTodoList() {
  const todoContainer = document.querySelector(".js-todo-list");
  todoContainer.innerHTML = ""; // clear old list

  for (let i = 0; i < toDoList.length; i++) {
    const p = document.createElement("p");
    p.innerText = toDoList[i];
    todoContainer.appendChild(p);
  }
}
