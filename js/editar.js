import { actualizar, carga,datetime } from "./lib/sys.js"
var md = window.markdownit()
var entradas
var indice

carga()
    .then(resp => {
        entradas = resp
        init()
    })

function init() {
    var editando = ""

    let titulo_b = document.createTextNode(entradas[0][0].sitio)
    titulo_blog.appendChild(titulo_b)

    let descripcion_b = document.createTextNode(entradas[0][0].descripcion)
    descripcion_blog.appendChild(descripcion_b)

    entradas[1].map((resp, index) => {
        if (resp.id == window.location.search.substring(1).split("=")[1]) {
            indice = index
            editando = index
            titulo_post.value = resp.titulo
            contenido_post.value = resp.contenido
            etiquetas.value = resp.etiquetas
        }
    })
}

eliminar.addEventListener("mousedown", e => {
    entradas[1].splice(indice,1)
    actualizar(entradas)
    window.location.href="/"
})

titulo_post.addEventListener("input", guardar_cambios)
contenido_post.addEventListener("input", guardar_cambios)
etiquetas.addEventListener("input", guardar_cambios)

function guardar_cambios(e) {
    entradas[1][indice].titulo = titulo_post.value
    entradas[1][indice].contenido = contenido_post.value
    entradas[1][indice].etiquetas = etiquetas.value
    entradas[1][indice].fecha_modificacion = datetime()

    //console.log(entradas[1][indice].contenido)
    actualizar(entradas)
}

//https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events