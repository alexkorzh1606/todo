"use strict";
import Todo from "./Todo";

const important_color:string[] = [
  "has-background-danger has-text-white is-size-3",
  "has-background-warning has-text-black is-size-3",
  "has-background-link has-text-white is-size-3",
];

const field:HTMLInputElement = <HTMLInputElement>(document.querySelector(".input"));
const select:HTMLSelectElement = <HTMLSelectElement>(document.querySelector("#prioritet"));
const date_picker:HTMLInputElement = <HTMLInputElement>(document.getElementById("date_picker"));
const button_plus:HTMLButtonElement = <HTMLButtonElement>(document.querySelector(".button_plus"));
const deals:HTMLDivElement = <HTMLDivElement>(document.querySelector("#deals"));

/*
Функция добавления дела, котора вызвает функцию отрисовки
и добавляет дело в LocalStorage
И не забывает обнулять значения
 */
function addTask() {
  let content:string = field.value;
  if (content === "" || date_picker.value === "") {
    return;
  }
  let todo:Todo = new Todo(parseInt(select.value), content, date_picker.value);
  const todo_to_JSON = JSON.stringify(todo);
  localStorage.setItem(String(+todo.dt), todo_to_JSON);
  GenerateDom(todo);

  field.value = "";
  // дальше у нас будет сохрание в LocalStorage
}

//назначение листенеров на нашу кнопку
button_plus.onclick = addTask;
document.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    addTask();
  }
});

// функция отрисовки нашего приложения, когда оно включается
//данные берутся из localStorage
function draw_on_load() {
  //эта функция сразу сработает
  //потом ее переменные вывезет GC
  for (let i = 0; i < localStorage.length; i++) {
    let lk_key = localStorage.key(i);
    let content = localStorage.getItem(lk_key);
    let todo = JSON.parse(content);
    GenerateDom(todo);
  }
}
draw_on_load();

/*
Универсальная функция отрисовки, которая у нас вставляет todo в DOM
 */
function GenerateDom(obj:Todo) {
  let {priority, text,  dt, dl} = obj;
  deals.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="wrap_task ${important_color[priority - 1]}" id="${dt}">
        <p class="todo_text"> ${text} </p>
        <p> ${new Date(dt).getDate()}/${new Date(dt).getMonth()} / ${dl} </p>
        <i class="material-icons md-delete"></i>
    </div>
`
  );
  deleteItem();
}
deleteItem();
// обработчики удаления дела
function deleteItem() {
  let delete_icons = document.getElementsByClassName("md-delete");
  let delete_map = Array.from(delete_icons);
  delete_map.map((el:any) => {
    el.onclick = () => {
      let wrap_task:HTMLDivElement = el.parentNode;
      wrap_task.style.display = "none";
      localStorage.removeItem(wrap_task.id);
    };
  });
}

// обработчики редактирования дела
