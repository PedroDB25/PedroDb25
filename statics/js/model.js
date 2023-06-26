export default class Proyecto{
    constructor(proyecto){
        this.proyecto=proyecto
    }
    getNodo(){
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

        nombre.innerHTML= this.proyecto.name
        version.innerHTML= this.proyecto.description
        verInfo.innerHTML= "ver info"
        probar.innerHTML= "probar"
        verCodigo.innerHTML= "ver código"

        verCodigo.href= this.proyecto.html_url
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