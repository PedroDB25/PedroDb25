window.addEventListener("load", init);

function init() {
    [...document.querySelectorAll(".cartas a")].forEach(el=>el.addEventListener("click", verProyectos))
    solicitarDatosRepo()
}

function verProyectos() {
    //Cartas
    [...document.querySelectorAll(".cartas a")].forEach(el=>el.innerHTML="Mira los proyectos");
    this.innerHTML="---Proyectos---";
    //Proyectos
    [...document.querySelectorAll("#infoProyectos article")].forEach(el=>el.style.display="none");
    document.querySelectorAll("#infoProyectos article")[this.dataset.num-1].style.display="flex"

}
async function solicitarDatosRepo(){
    let data = await fetch("https://api.github.com/users/PedroDB25")
    let usuario = await data.json()
    console.log(usuario)


    let data2 = await fetch("https://api.github.com/users/PedroDB25/repos")
    let usuario2 = await data2.json()
    console.log(usuario2)

    
    document.querySelector("#usuario").innerHTML = usuario.login
    document.querySelector("#descripcion").innerHTML = usuario.bio
}