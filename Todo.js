const Todoform = document.querySelector(".js-TodoForm"),
        TodoInput = Todoform.querySelector("input"),
        TodoList = document.querySelector(".js-TodoList");

const  TODO_LS = "Todos";
const TodoArr = [];

function PaintTodo(text)
{
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText ="❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    TodoList.appendChild(li);
    const TodoObj = {
        text : text,
        id : TodoArr.length +1
        };
        TodoArr.push(TodoObj);
}
function HandleSubmit(event){
    event.preventDefault();
    const currentVlaue = TodoInput.value;
    PaintTodo(currentVlaue);
    TodoInput.value ="";
    
    
}
function loadTOdos(){
    const LoadedTodos = localStorage.getItem(TODO_LS);
    if(LoadedTodos !== null)
    {
    }
}

function init()
{
    loadTOdos();
    Todoform.addEventListener("submit", HandleSubmit);
}
init();