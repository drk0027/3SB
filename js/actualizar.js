import { carga, recarga } from "./lib/sys.js"
var entradas

carga()
    .then(resp => {
        entradas = resp
        init()
    })

function init(){
    let titulo_b = document.createTextNode(entradas[0][0].sitio)
    titulo_blog.appendChild(titulo_b)

    //descripcion del blog
    let descripcion_b = document.createTextNode(entradas[0][0].descripcion)
    descripcion_blog.appendChild(descripcion_b)
}

actualizar_local.addEventListener("mousedown",e=>{
    recarga()
    window.location.href="/"
})