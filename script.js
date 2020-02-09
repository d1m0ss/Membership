document.getElementById("burger").onclick = function(){
    addmenu();
}

function addmenu(){
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("btn").classList.toggle("show");
}