"use strict";
import Todo from "./Todo";

const important_color: string[] = [
  "has-background-danger has-text-white is-size-3",
  "has-background-warning has-text-black is-size-3",
  "has-background-link has-text-white is-size-3",
];

const field: HTMLInputElement = <HTMLInputElement>(
  document.querySelector(".input")
);
const select: HTMLSelectElement = <HTMLSelectElement>(
  document.querySelector("#prioritet")
);
const date_picker: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("date_picker")
);
const button_plus: HTMLButtonElement = <HTMLButtonElement>(
  document.querySelector(".button_plus")
);
const deals: HTMLDivElement = <HTMLDivElement>document.querySelector("#deals");

//Функция добавления дела на сервер
function addTask() {
    let content: string = field.value;
    if (content === "" || date_picker.value === "") {
      return;
    }
    let todo:Todo = new Todo(parseInt(select.value), content, date_picker.value);
    const todo_to_JSON = JSON.stringify(todo);
    fetch("http://isakura3131.zonopo.ru/deals", {
      method: "POST",
      body: todo_to_JSON,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => GenerateDom(json));
    
      field.value = "";
  }
  
//Обработчик кнопки добавления дела
button_plus.onclick = addTask;
document.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
      addTask();
    }
});

// Функция забора данных с сервера и вывода на экран
function draw_on_load() {
    fetch("http://isakura3131.zonopo.ru/deals")
      .then((response) => response.json())
      .then((json) => GenerateDom(json));
}
draw_on_load();

//Универсальная функция отрисовки, которая у нас вставляет todo в DOM
function GenerateDom(obj: any) {
  let todos = obj;
  for (let i = 0; i < todos.length; i++) {
    let { priority, text, dt, dl, id} = todos[i];
    deals.insertAdjacentHTML(
      "afterbegin",
      `
            <div class="wrap_task ${important_color[priority - 1]}" id="${id}"> 
                <p class="todo_text"> ${text} </p>
                <p> ${dt} / ${dl} </p>
                <i class="material-icons md-delete"></i>
            </div>
        `
    );
    deleteItem();
  }
  console.log(todos);
}

//Обработчик удаления дела
deleteItem();
function deleteItem() {
  let delete_icons = document.getElementsByClassName("md-delete");
  let delete_map = Array.from(delete_icons);
  delete_map.map((el: any) => {
    el.onclick = () => {
      let wrap_task: HTMLDivElement = el.parentNode;
      wrap_task.style.display = "none";
      fetch(`http://isakura3131.zonopo.ru/deal/${wrap_task.id}`, {
        method: "DELETE",
      });
    };
  });
}


