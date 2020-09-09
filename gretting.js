const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    gretting =document.querySelector(".js-grettings"), 
    USER_LS ="currentUser",
    SHOWING_CN ="showing";

function paintGretting(text){
    form.classList.remove(SHOWING_CN);
    gretting.className.add(SHOWING_CN);
    gretting.innerText = `Hello ${text}`
}

function loadName()
{
    const currentUser  = localStorage.getItem("USRT_LS");
    if(currentUser === NULL){
       
    }
    else{
        paintGretting(currentUser);
    }
}

function init()
{
 loadName();
}
init();