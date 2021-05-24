$(document).ready(function () {
    $.getJSON('../Menu.json', function(data) {
        for(var i in data.menu)
        { 
            $(".main-menu").append(`<button id="${data.menu[i].id}" class="nav-buttons clickeable"><li class="nav-items clickeable"><p id="${data.menu[i].id}" class="clickeable">${data.menu[i].nombre}</p></li></button>`)
        }
        loadClickEvent()
    })
})

function loadContentPages(pageName) {
    return fetch(pageName).then(data => data.text()).then(data => data)
}

function loadClickEvent(){
    let button = document.querySelectorAll('.clickeable');
    for (let field of Array.from(button))
        field.addEventListener("click", event => {
            event.stopImmediatePropagation()
            loadPages(event.target.id);
        })
}

function loadPages(id){
    console.log(id)
    switch(id){
        case 'home': return loadContentPages("../pages/home.html").then(content => {
            document.getElementById('menu-content').innerHTML = content}) ;
        case 'music': return loadContentPages("../pages/music.html").then(content => {
            document.getElementById('menu-content').innerHTML = content}) ;
        case 'sheets': return loadContentPages("../pages/partituras.html").then(content => {
            document.getElementById('menu-content').innerHTML = content}) ;
        case 'calender': return loadContentPages("../pages/calendario.html").then(content => {
            document.getElementById('menu-content').innerHTML = content}) ;
        case 'contact': return loadContentPages("../pages/contacto.html").then(content => {
            document.getElementById('menu-content').innerHTML = content}) ;
    }
}