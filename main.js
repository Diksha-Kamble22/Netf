// todo list

// backend

// post man testing (api testing)

// isolation meaning

// independent of backend => frontend ki testing

// frontend

// api use nahi karuga => todo application

// create, edit, delete => perform any operations => temporary

// api => perform any operations => permanent

// software developer

// problem statement => solve

// customer ke respect

// modal bootstrap

// javascript DOM

// api call

// deliver efficiently

// problem ko => divide and conquer

// todo list

// features

// feature a

// 1000 lines => x reason

// problem statement samjh => how to solve it => crack

// feasibility

// update todo

// delete todo

// edit todo

// iscompleted

// x

// y

// z

// ..

// problem => brainstorm (y + a)

// -- divide and conquer --

// postman testing (update, delete)

// UI (update, delete => functionalities ) (dummy data) (array + DOM + for) - crack

// GET api - dynamically database se jo api response thru data (update, delete)

// POST api -

// modal => functionality UI
// dummy data create functionality => temporary
// POST api response => permanent

// PUT api -

// UI

// approach 1

// inline editing

// DELETE api -

// easy thing

// iscompleted -

// GET api response
// hard code

const get_todo_response = {
  message: "Get all todos successfully.",
  todos: [
    {
      _id: "63f79dd04999f234c1f19876",
      title: "HTTP methods",
      description: "there are 4 methods mainly GET ,PUT ,POST,DELETE",
      completed: false,
      createdAt: "2023-02-23T17:09:36.629Z",
      __v: 0,
    },
    {
      _id: "63f71a5acfa47f3fef2c4122",
      title: "Wednesday",
      description: "A phenominal girl whose name is Wednesday Addams",
      completed: false,
      createdAt: "2023-02-23T07:48:42.515Z",
      __v: 0,
    },
    {
      _id: "63f719c8cfa47f3fef2c411e",
      title: "ikigai-Book",
      description:
        "thw story is about old village where villagers age having beyond 100 years this rare village found in JAPAN",
      completed: false,
      createdAt: "2023-02-23T07:46:16.493Z",
      __v: 0,
    },
    {
      _id: "63f718a9cfa47f3fef2c411c",
      title: "control-statements",
      description: "switch-case statements and loop statement",
      completed: false,
      createdAt: "2023-02-23T07:41:29.551Z",
      __v: 0,
    },
    {
      _id: "63f716edcfa47f3fef2c4118",
      title: "Database",
      description:
        "contains number of information in form of tables nothing but schema",
      completed: false,
      createdAt: "2023-02-23T07:34:05.202Z",
      __v: 0,
    },
    {
      _id: "63f6629628f779bfea8eece6",
      title: "watch movie",
      description: "sometime shinchan",
      completed: false,
      createdAt: "2023-02-22T18:44:38.417Z",
      __v: 0,
    },
    {
      _id: "63f5ec4377510cb6a0d454e9",
      title: "Walk",
      description: "go for a evening walk for 30mins.",
      completed: false,
      createdAt: "2023-02-22T10:19:47.887Z",
      __v: 0,
    },
    {
      _id: "63f5ec4377510cb6a0d454e8",
      title: "movies project",
      description: "make changes in the UI.",
      completed: false,
      createdAt: "2023-02-22T10:19:47.887Z",
      __v: 0,
    },
    {
      _id: "63f5e81677510cb6a0d454dc",
      title: "flute session",
      description: "practice flute for 1 hour.",
      completed: false,
      createdAt: "2023-02-22T10:01:58.643Z",
      __v: 0,
    },
    {
      _id: "63f5e77977510cb6a0d454d8",
      title: "guitar session",
      description: "practice guitar for 30mins.",
      completed: false,
      createdAt: "2023-02-22T09:59:21.341Z",
      __v: 0,
    },
    {
      _id: "63f5e76477510cb6a0d454d6",
      title: "watch recordings",
      description: "3 recordings.",
      completed: false,
      createdAt: "2023-02-22T09:59:00.064Z",
      __v: 0,
    },
    {
      _id: "63f5e45f77510cb6a0d454c6",
      title: "biology",
      description: "read chapter 2 and write notes.",
      completed: false,
      createdAt: "2023-02-22T09:46:07.786Z",
      __v: 0,
    },
    {
      _id: "63f5e1a077510cb6a0d454bf",
      title: "workout",
      description: "20 pushups and 20 squats and skipping.",
      completed: true,
      createdAt: "2023-02-22T09:34:24.812Z",
      __v: 0,
    },
    {
      _id: "63f1d043912b276af760bc36",
      title: "Read a book 3",
      description: "some description 3 ..",
      completed: false,
      createdAt: "2023-02-19T07:31:15.708Z",
      __v: 0,
    },
  ],
};

// multiple todo cards display karne hai using data

// create, update, delete

// create ?

// data ke respect, DOM

// update DOM (cards)

// create new cards

// {
//     "_id": "63f5e45f77510cb6a0d454c6",
//     "title": "biology",
//     "description": "read chapter 2 and write notes.",
//     "completed": false,
//     "createdAt": "2023-02-22T09:46:07.786Z",
//     "__v": 0
// },

const parentNode = document.getElementById("todos-all");

function getTodos() {

  console.log("get todos response : ", get_todo_response);

  const get_todos = get_todo_response["todos"];
  const get_todos_2 = get_todo_response.todos;

  console.log("get todos : ", get_todos);
  console.log("get todos 2 : ", get_todos_2);

  console.log("cards ka parent node : ", parentNode);

  for (var i = 0; i < get_todos.length; i++) {
    const todo = get_todos[i];

    const todoId = todo["_id"];
    console.log("todo ki id : ", todoId);

    // parentNode kaise milega

    // DOM mai koi bhi element access kaise karte hai

    // how to create a element

    // card ka div
    const cardNode = document.createElement("div");
    cardNode.classList.add("card", "todo-card");
    cardNode.style.width = "18rem";
    cardNode.id = `${todoId}-card`;

    // card body ka div
    const cardBodyNode = document.createElement("div");
    cardBodyNode.classList.add("card-body", "flex-container");

    // todo info start //

    const todoInfoNode = document.createElement("div");
    todoInfoNode.classList.add("flex-child", "todo-info");

    const titleNode = document.createElement("h2");

    const descriptionNode = document.createElement("p");

    // todo info end //

    // todo edit start //

    const todoEditNode = document.createElement("div");

    const editBtnNode = document.createElement("button");
    editBtnNode.innerHTML = "Edit";
    editBtnNode.id = todoId;
    editBtnNode.classList.add("btn", "btn-primary");
    editBtnNode.addEventListener("click", updateTodo);

    // todo edit end //

    // todo completed start //

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

    // <div class="card todo-card" style="width: 18rem">
    //     <div class="card-body flex-container">
    //       <div class="flex-child todo-info">
    //         <h2>Todo Title</h2>
    //         <p>Todo description</p>
    //       </div>

    //       <div class="flex-child todo-edit">
    //         <button class="btn btn-primary">Edit</button>
    //       </div>

    //       <div class="flex-child todo-completed">
    //         <button class="btn btn-primary">Done</button>
    //       </div>

    //       <div class="flex-child todo-delete">
    //         <button class="btn btn-primary">Delete</button>
    //       </div>
    //     </div>
    //   </div>

    console.log("index : ", i);
    console.log("todo : ", todo);
    console.log("type of todo : ", typeof todo);
    console.log("todo title : ", todo.title);
    console.log("todo description : ", todo.description);
    console.log("todo completed : ", todo.completed);
    console.log("todo createdAt : ", todo.createdAt);
  }
}

getTodos();

function createTodo(title, description) {
  console.log("create todo ..");
  return;
}

function updateTodo(event) {
  const todoId = event.target.id;
  console.log("event target : ", event.target);
  console.log("update todo id : ", todoId);
}

function markTodoAsCompleted(todoId) {
  console.log("mark todo as completed id : ", todoId);
}

function deleteTodo(deleteTodoId) {
  console.log("delete todo id : ", deleteTodoId);

  // api bhad mai jane do

  // not a right way of doing thing
  // const todoCardId = todoId + "-card";
  // const todoCard = document.getElementById(todoCardId);
  // todoCard.remove();

  const get_todos = get_todo_response["todos"];

  const newTodos = [];

  for (var i = 0; i < get_todos.length; i++) {
    var todo = get_todos[i];
    var todoId = todo["_id"];

    if (todoId != deleteTodoId) {
      newTodos.push(todo);
    }
  }

  console.log("new todos : ", newTodos);

  get_todo_response["todos"] = newTodos;

  parentNode.innerHTML = "";

  getTodos();
}
