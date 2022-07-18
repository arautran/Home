var menu =[
    {'name':'#i', 'page':'./inicio.html'},
    {'name':'#s', 'page':'./cursos.html'},
    {'name':'#c', 'page':'./contato.html'}
];

function changeTab(value){
    $('.nav-link').removeClass("active");
    $(value).addClass("active");
    var item = menu.find((e) => e.name == value);
    $( "#main" ).load( item.page );
}

function shake(){
    var whats = document.getElementById("whats");
    whats.style.animationIterationCount = "infinite";
    setTimeout(function(){
        whats.style.animationIterationCount = "0";
    }, 1000);
} 

$(document).ready(function(){ 
    setInterval(shake, 10000);
    changeTab('#s');
});