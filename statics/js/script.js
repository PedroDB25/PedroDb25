window.addEventListener("load", init);

function init() {
    [...document.querySelectorAll(".cartas a")].forEach(el => el.addEventListener("click", verProyectos))
    solicitarDatosRepo()
}

function verProyectos() {
    //Cartas
    [...document.querySelectorAll(".cartas a")].forEach(el => el.innerHTML = "Mira los proyectos");
    this.innerHTML = "---Proyectos---";
    //Proyectos
    [...document.querySelectorAll("#infoProyectos article")].forEach(el => el.style.display = "none");
    document.querySelectorAll("#infoProyectos article")[this.dataset.num - 1].style.display = "flex"

}
async function solicitarDatosRepo() {

    let data = await fetch("https://api.github.com/users/PedroDB25")
    let usuario = await data.json()

    document.querySelector("#usuario").innerHTML = usuario.login
    document.querySelector("#descripcion").innerHTML = usuario.bio
    document.querySelector("#fechaInicio").innerHTML = `Creación: ${usuario.created_at.split("T")[0].split("-").reverse().join("-")}`;
    document.querySelector("#fechaActualizacion").innerHTML = `Última actualización: ${usuario.updated_at.split("T")[0].split("-").reverse().join("-")}`;


    let data2 = await fetch("https://api.github.com/users/PedroDB25/repos")
    let proyectos = await data2.json()
    for (const i of proyectos) {

        let caja = document.createElement("div")
        let nombre = document.createElement("p")
        let datos = document.createElement("div")
        let version = document.createElement("div")
        let verInfo = document.createElement("div")
        let probar = document.createElement("a")
        let verCodigo = document.createElement("a")

        version.className = "version"
        verInfo.className = "verInfo"
        probar.className = "probar"
        verCodigo.className = "verCodigo"

        nombre.innerHTML= i.name
        version.innerHTML= i.description
        verInfo.innerHTML= "ver info"
        probar.innerHTML= "probar"
        verCodigo.innerHTML= "ver código"

        verCodigo.href= i.html_url
        verCodigo.target = "_blank"

        datos.appendChild(version)
        datos.appendChild(verInfo)
        datos.appendChild(probar)
        datos.appendChild(verCodigo)
        caja.appendChild(nombre)
        caja.appendChild(datos)

        console.log(i)
        switch (i.topics[0]) {
            case "reactjs":
                document.querySelector("#infoProyectosReact").appendChild(caja)
                break;
            case "fastapi":
                document.querySelector("#infoProyectosFastApi").appendChild(caja)
                break;
            case "spring":
                document.querySelector("#infoProyectosSpring").appendChild(caja)
                break;

            default:
                document.querySelector("#infoProyectosVarios").appendChild(caja)
                break;
        }
    }





}