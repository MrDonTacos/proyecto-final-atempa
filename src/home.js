$(document).ready(function () {
    $.getJSON('../Menu.json', function(data) {
        console.log(data)
        for(var i in data.menu)
        { 
            $(".main-menu").append(`<button id="${data.menu[i].id}" class="nav-buttons"><li class="nav-items"><p>${data.menu[i].nombre}</p></li></button>`)
        }
        clickevents();
    })
})

function clickevents() {
    $("#home").unbind();
    $("#home").click(e =>{
        $("#menu-content").load("../pages/home.html")
    })

    $("#music").unbind();
    $("#music").click(e =>{
        console.log("cargando")
        $("#menu-content").load("../pages/music.html")
    })

    $("#sheets").unbind();
    $("#sheets").click(e =>{
        $("#menu-content").load("../pages/partituras.html")
    })

    $("#calender").unbind();
    $("#calender").click(e =>{
        $("#menu-content").load("../pages/calendario.html")
    })

    $("#contact").unbind();
    $("#contact").click(e =>{
        $("#menu-content").load("../pages/contacto.html")
    })
}