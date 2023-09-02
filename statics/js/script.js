import Proyecto, { crearCartaGrupoProyectos, crearBurbujasProyectos, crearBurbujasTecnologias } from "/PedroDb25/statics/js/model.js";
import mensajes from "/PedroDb25/statics/json/mensajes.json" assert { type: "json" };

window.addEventListener("load", init);

/**Se lanza al estar cargado el documento de JS
 * 
 */
async function init() {
    solicitarProyectos();
    solicitarDatosRepo();
    solicitarMensajes("es");
    crearBurbujasProyectos();
    crearBurbujasTecnologias();
    [...document.querySelectorAll(".cartas a")].forEach(el => el.addEventListener("click", verProyectos));
}

function verProyectos() {
    //Cartas
    [...document.querySelectorAll(".cartas a")].forEach(el => el.innerHTML = "Mira los proyectos");
    this.innerHTML = "---Proyectos---";
    //Proyectos
    [...document.querySelectorAll("#infoProyectos article")].forEach(el => el.style.display = "none");
    document.querySelectorAll("#infoProyectos article")[this.dataset.num - 1].style.display = "flex"

}
/**Solicita la informacion del respositorio
 * 
 */
async function solicitarDatosRepo() {

    let data = await fetch("https://api.github.com/users/PedroDB25")
    let usuario = await data.json()

    document.querySelector("#usuario").innerHTML = usuario.login
    document.querySelector("#descripcion").innerHTML = usuario.bio
    document.querySelector("#fechaInicio").innerHTML = `Creación: ${usuario.created_at.split("T")[0].split("-").reverse().join("-")}`;
    document.querySelector("#fechaActualizacion").innerHTML = `Actualización: ${usuario.updated_at.split("T")[0].split("-").reverse().join("-")}`;

    let data2 = await fetch("https://api.github.com/users/PedroDB25/repos")
    let proyectos = await data2.json()
    for (const i of proyectos) {
        let proy = new Proyecto(i);

        switch (i.topics[0]) {
            case "reactjs":
                document.querySelector("#infoProyectosReact").appendChild(proy.getNodo())
                break;
            case "fastapi":
                document.querySelector("#infoProyectosFastApi").appendChild(proy.getNodo())
                break;
            case "spring":
                document.querySelector("#infoProyectosSpring").appendChild(proy.getNodo())
                break;
            default:
                document.querySelector("#infoProyectosVarios").appendChild(proy.getNodo())
                break;
        }
    }
}

async function solicitarMensajes(lang) {
    for (const clase in mensajes[lang]) {
        document.querySelectorAll(`.${clase}`).forEach(el => el.innerHTML = mensajes[lang][clase])
    }
}
async function solicitarProyectos() {
    crearCartaGrupoProyectos()
}
