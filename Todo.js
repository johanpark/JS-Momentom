const Todoform = document.querySelector(".js-TodoForm"),
        TodoInput = Todoform.querySelector("input"),
        TodoList = document.querySelector(".js-TodoList");

const  TODO_LS = "Todos";

function PaintTodo(text)
{
    console.log(text);
}
function HandleSubmit(event){
    event.preventDefault();
    const currentVlaue = TodoInput.value;
    PaintTodo(currentVlaue);
    TodoInput.value ="";
    
}
function loadTOdos(){
    const Todos = localStorage.getItem(TODO_LS);
    if(Todos !== null)
    {

    }
}

function init()
{
    loadTOdos();
}
init();