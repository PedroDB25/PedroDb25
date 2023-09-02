import proyectos from "/PedroDb25/statics/json/proyectos.json" assert { type: "json" };
import proyectosNoSubidos from "/PedroDb25/statics/json/proyectosNoSubidos.json" assert { type: "json" };
import tecnologias from "/PedroDb25/statics/json/tecnologias.json" assert { type: "json" };

export default class Proyecto {
    constructor(proyecto) {
        this.proyecto = proyecto
    }
    getNodo() {
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

        nombre.innerHTML = this.proyecto.name
        version.innerHTML = this.proyecto.description
        verInfo.innerHTML = "ver info"
        probar.innerHTML = "probar"
        verCodigo.innerHTML = "ver código"

        verCodigo.href = this.proyecto.html_url
        verCodigo.target = "_blank"

        datos.appendChild(version)
        datos.appendChild(verInfo)
        datos.appendChild(probar)
        datos.appendChild(verCodigo)
        caja.appendChild(nombre)
        caja.appendChild(datos)

        return caja
    }
}
export function crearCartaGrupoProyectos() {
    let marcocartas = document.querySelector(".cartas");
    let contador = 1
    for (const key in proyectos) {
        let proyecto = proyectos[key];
        //carta
        let card = document.createElement("div")
        card.classList.add("card");
        card.style.width = "18rem";

        //img
        let img = document.createElement("img")
        img.src = proyecto["url"];
        img.alt = proyecto["alt"];
        img.title = proyecto["title"]
        img.className = "card-img-top img-fluid"

        //cuerpo carta
        let cardBody = document.createElement("div")
        cardBody.classList.add("card-body")

        let tituloCarta = document.createElement("h5")
        tituloCarta.innerHTML = proyecto["titulo"]

        let parrafoCarta = document.createElement("p")
        parrafoCarta.className = "card-text"
        parrafoCarta.classList.add(proyecto["classParrafo"])


        let linkCarta = document.createElement("a")
        linkCarta.dataset.num = contador++;
        linkCarta.className = "btn btn-primary btncartaProyectos"
        linkCarta.classList.add(proyecto["classLink"])

        cardBody.appendChild(tituloCarta)
        cardBody.appendChild(parrafoCarta)
        cardBody.appendChild(linkCarta)

        card.appendChild(img)
        card.appendChild(cardBody)

        marcocartas.appendChild(card)
    }

}

export function crearBurbujasProyectos() {
    for (const key in proyectosNoSubidos) {
        let bloqueAInsertar = document.querySelector(`#${key}`)
        let listaProyectos = proyectosNoSubidos[key]
        for (const proyecto of proyectosNoSubidos[key]) {
            let caja = document.createElement("div")
            let titulo = document.createElement("p")
            let datos = document.createElement("div")
            let version = document.createElement("div")
            let verInfo = document.createElement("div")

            titulo.innerHTML = proyecto
            version.innerHTML = "v0.0.1"
            verInfo.innerHTML = "Ver info"
            version.className = "version"
            verInfo.className = "verInfo"

            datos.appendChild(version)
            datos.appendChild(verInfo)
            caja.appendChild(titulo)
            caja.appendChild(datos)

            bloqueAInsertar.appendChild(caja)
        }
    }
}

export function crearBurbujasTecnologias() {
    for (const key in tecnologias) {
        let tecnologia = tecnologias[key]
        let bloqueAInsertarTexto = document.querySelector(`article.${key}`)
        let bloqueAInsertarBurbuja = document.querySelector(`article.${key} div.circulos`)

        let titulo = document.createElement("h2")
        titulo.innerHTML = tecnologia["titulo"]
        bloqueAInsertarTexto.prepend(titulo)

        for (const burbuja of tecnologia["burbujas"]) {
            let bloque = document.createElement("div")
            bloque.className = "circulo";
            let img = document.createElement("img")
            img.src = burbuja["src"];
            img.alt = burbuja["alt"]

            let texto = document.createElement("p")
            texto.innerHTML = burbuja["titulo"]
            
            bloque.appendChild(img)
            bloque.appendChild(texto)
            bloqueAInsertarBurbuja.appendChild(bloque)
        }







        /*let listaProyectos = proyectosNoSubidos[key]
        for (const proyecto of proyectosNoSubidos[key]) {
            let caja = document.createElement("div")
            let titulo = document.createElement("p")
            let datos = document.createElement("div")
            let version = document.createElement("div")
            let verInfo = document.createElement("div")

            titulo.innerHTML = proyecto
            version.innerHTML = "v0.0.1"
            verInfo.innerHTML = "Ver info"
            version.className = "version"
            verInfo.className = "verInfo"

            datos.appendChild(version)
            datos.appendChild(verInfo)
            caja.appendChild(titulo)
            caja.appendChild(datos)

            bloqueAInsertar.appendChild(caja)
        }*/
    }
}

