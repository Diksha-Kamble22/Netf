const parentNode = document.getElementById("todos-all");

let editTodoId = "";

async function apiCall(url = "", method = "GET", bodyData = {}) {
  const request = {
    method: method, 
    headers: {
      "Content-Type": "application/json",
    }
  }
  if(method !== "GET"){
    request["body"] = JSON.stringify(bodyData);
  }
  const response = await fetch(url, request);
  return response.json();
}

// promise 

async function getTodos() {

  // const get_todos = [];

  // apiCall("https://coding4all-todo.onrender.com/api/todos-all", "GET").then((getTodoResponse) => {
  //   console.log("get todos response : ", getTodoResponse);
  //   get_todos = getTodoResponse["todos"];
  // });

  const getTodoResponse = await apiCall("https://coding4all-todo.onrender.com/api/todos-all", "GET");

  console.log("get todo response : ", getTodoResponse);

  const get_todos = getTodoResponse["todos"];

  console.log("something");

  for (var i = 0; i < get_todos.length; i++) {
    const todo = get_todos[i];

    const todoId = todo["_id"];

    const cardNode = document.createElement("div");
    cardNode.classList.add("card", "todo-card");
    cardNode.style.width = "18rem";
    cardNode.id = `${todoId}-card`;

    const cardBodyNode = document.createElement("div");
    cardBodyNode.classList.add("card-body", "flex-container");

    const todoInfoNode = document.createElement("div");
    todoInfoNode.classList.add("flex-child", "todo-info");

    const titleNode = document.createElement("h2");

    const descriptionNode = document.createElement("p");

    const todoEditNode = document.createElement("div");

    const editBtnNode = document.createElement("button");
    editBtnNode.innerHTML = "Edit";
    editBtnNode.id = todoId;
    editBtnNode.classList.add("btn", "btn-primary");
    editBtnNode.setAttribute("data-bs-toggle", "modal");
    editBtnNode.setAttribute("data-bs-target", "#editModal");
    editBtnNode.addEventListener("click", (e) => setEditTodo(e.target.id, todo.title, todo.description));

    const todoCompletedNode = document.createElement("div");

    const completedBtnNode = document.createElement("button");
    completedBtnNode.innerHTML = "Done";
    completedBtnNode.id = todoId;
    completedBtnNode.classList.add("btn", "btn-success");
    completedBtnNode.addEventListener("click", (e) =>
      markTodoAsCompleted(e.target.id)
    );

    // todo completed end //

    // todo delete start //

    const todoDeleteNode = document.createElement("div");

    const deleteBtnNode = document.createElement("button");
    deleteBtnNode.innerHTML = "Delete";
    deleteBtnNode.id = todoId;
    deleteBtnNode.classList.add("btn", "btn-danger");
    // deleteBtnNode.addEventListener("click", deleteTodo);
    deleteBtnNode.addEventListener("click", (e) => deleteTodo(e.target.id));

    // todo delete end //

    // data define

    titleNode.innerHTML = todo.title;
    descriptionNode.innerHTML = todo.description;

    if(todo.completed){
        titleNode.style.textDecoration = "line-through";
        descriptionNode.style.textDecoration = "line-through";
    }

    // structure DOM

    cardNode.appendChild(cardBodyNode);

    cardBodyNode.appendChild(todoInfoNode);
    cardBodyNode.appendChild(todoEditNode);
    cardBodyNode.appendChild(todoCompletedNode);
    cardBodyNode.appendChild(todoDeleteNode);

    todoInfoNode.appendChild(titleNode);
    todoInfoNode.appendChild(descriptionNode);

    if(!todo.completed){
        todoEditNode.appendChild(editBtnNode);
    }

    if(!todo.completed){
        todoCompletedNode.appendChild(completedBtnNode);
    }

    todoDeleteNode.appendChild(deleteBtnNode);

    parentNode.appendChild(cardNode);
  }
}

getTodos();

async function createTodo() {

  const title = document.getElementById("todo-title-input").value;
  const description = document.getElementById("todo-description-input").value;

  const bodyData = {
    "title": title,
    "description": description
  }

  const postTodoResponse = await apiCall("https://coding4all-todo.onrender.com/api/todo/new", "POST", bodyData);

  $('#createModal').modal('hide');

  parentNode.innerHTML = "";

  getTodos();
  document.getElementById("todo-title-input").value = "";
  document.getElementById("todo-description-input").value = "";
}

function setEditTodo(todoId, title, description) {
    editTodoId = todoId;
    document.getElementById("todo-title-edit-input").value = title;
    document.getElementById("todo-description-edit-input").value = description;
}

function updateTodo() {

  const title = document.getElementById("todo-title-edit-input").value;
  const description = document.getElementById("todo-description-edit-input").value;

  const get_todos = get_todo_response["todos"];
  const newTodos = [];

  for(var i = 0; i < get_todos.length; i++){
    const todo = get_todos[i];
    const todoId = todo["_id"];

    if(todoId === editTodoId){
        todo.title = title;
        todo.description = description;
    }

    newTodos.push(todo);
  }

  get_todo_response["todos"] = newTodos;

  parentNode.innerHTML = "";

  getTodos();

  editTodoId = "";

  $('#editModal').modal('hide');
  document.getElementById("todo-title-edit-input").value = "";
  document.getElementById("todo-description-edit-input").value = "";
}

function markTodoAsCompleted(doneTodoId) {

  const get_todos = get_todo_response["todos"];
  const newTodos = [];

  for (var i = 0; i < get_todos.length; i++){

    var todo = get_todos[i];
    var tId = todo["_id"];

    if(tId === doneTodoId) {
        todo.completed = true;
    }

    newTodos.push(todo);
  }

  get_todo_response["todos"] = newTodos;

  parentNode.innerHTML = "";

  getTodos();
}


function deleteTodo(deleteTodoId) {

  const get_todos = get_todo_response["todos"];

  const newTodos = [];

  for (var i = 0; i < get_todos.length; i++) {
    var todo = get_todos[i];
    var todoId = todo["_id"];

    if (todoId != deleteTodoId) {
      newTodos.push(todo);
    }
  }

  get_todo_response["todos"] = newTodos;

  parentNode.innerHTML = "";

  getTodos();
}

function createModalClose() {
    document.getElementById("todo-title-input").value = "";
    document.getElementById("todo-description-input").value = "";
}

function createEditModalClose() {
    document.getElementById("todo-title-edit-input").value = "";
    document.getElementById("todo-description-edit-input").value = "";
}