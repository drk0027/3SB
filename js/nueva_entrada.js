import { carga,actualizar,datetime } from "./lib/sys.js"
var md = window.markdownit()
var entradas
var indice

carga()
    .then(resp => {
        entradas = resp
        init()
    })

function init() {
    let titulo_b = document.createTextNode(entradas[0][0].sitio)
    titulo_blog.appendChild(titulo_b)

    let descripcion_b = document.createTextNode(entradas[0][0].descripcion)
    descripcion_blog.appendChild(descripcion_b)
}

guardar.addEventListener("mousedown",e=>{
    //crear nuevo objeto y hacer push al array de entradas[1], luego redirigir a la vista de edicion
    //insertar validaciones
    var data={
        "id":entradas[1][entradas[1].length-1].id+1,
        "titulo":titulo_post.value,
        "contenido":contenido_post.value,
        "etiquetas":etiquetas.value,
        "fecha_creacion": datetime(),
        "fecha_modificacion": datetime()
    }
    entradas[1].push(data)
    //console.log(entradas[1])
    actualizar(entradas)
    alert("Entrada creada con exito")
    //redirigir a la pagina de edicion con el id recientemente creado
    //window.location.href="editar?id="+entradas[1][entradas[1].length-1].id
})