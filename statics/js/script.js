window.addEventListener("load", init);

function init() {
    [...document.querySelectorAll(".cartas a")].forEach(el=>el.addEventListener("click", verProyectos))
}

function verProyectos() {
    //Cartas
    [...document.querySelectorAll(".cartas a")].forEach(el=>el.innerHTML="Mira los proyectos");
    this.innerHTML="---Proyectos---";
    //Proyectos
    [...document.querySelectorAll("#infoProyectos article")].forEach(el=>el.style.display="none");
    document.querySelectorAll("#infoProyectos article")[this.dataset.num-1].style.display="flex"

}