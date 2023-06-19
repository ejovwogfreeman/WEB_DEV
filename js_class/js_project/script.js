let msg = document.querySelector(".msg");
let form = document.querySelector("form");
let textInput = document.getElementById("textInput");
let todos = document.querySelector(".todos");
let todoArr = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (textInput.value === "") {
    msg.textContent = "Plese fill all fields";
    msg.style.display = "block";
    msg.style.background = "coral";
    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
  } else {
    msg.textContent = "Todo added successfully";
    msg.style.display = "block";
    msg.style.background = "green";
    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
    let singleTodo = {
      id: Math.random(),
      text: textInput.value,
      date: new Date().toDateString() + " | " + new Date().toLocaleTimeString(),
    };
    addTodo(singleTodo);
    textInput.value = "";
    showTodo(todoArr);
  }
});

const addTodo = (singleTodo) => {
  todoArr.unshift(singleTodo);
};

const showTodo = (arr) => {
  let html = "";
  arr.forEach((todo) => {
    html += `
        <div class="todo">
            <section>
                <h2>${todo.text}</h2>
                <small>${todo.date}</small>
            </section>
            <button onclick=deleteTodo(${todo.id})>Delete</button>
        </div>
    `;
  });
  todos.innerHTML = html;
};

const deleteTodo = (id) => {
  todoArr.filter((todo) => {
    if (todo.id === id) {
      todoArr.splice(todoArr.indexOf(todo), 1);
    }
  });
  showTodo(todoArr);
};
