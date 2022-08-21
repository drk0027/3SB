import { carga } from "./lib/sys.js"
var md = window.markdownit()
var entradas

carga()
    .then(resp => {
        entradas = resp
        init()
    })

function init() {
    //Titulo del blog
    let titulo_b = document.createTextNode(entradas[0][0].sitio)
    titulo_blog.appendChild(titulo_b)

    //descripcion del blog
    let descripcion_b = document.createTextNode(entradas[0][0].descripcion)
    descripcion_blog.appendChild(descripcion_b)

    //cargar todas las entradas en orden invertido, tradicional para los blogs
    entradas[1].slice(0).reverse().map((resp, index) => {
        //construir los contenedores necesarios para las entradas        
        let contenedor = document.createElement("div")
        let contenedor_post = document.createElement("div")
        let separador = document.createElement("hr")

        //renderizar el contenido markdown en html
        contenedor_post.innerHTML = md.render(resp.contenido)

        let meta = document.createElement("div")
        meta.innerHTML = `
        <div>
            <h3>`+ resp.titulo + `</h3>
            <a href="/editar?id=`+ resp.id + `"><small>Editar</small></a><br>
            <small><b>fecha de creación: </b>`+ resp.fecha_creacion + `</small><br>
            <small><b>fecha de modificacion: </b>`+ resp.fecha_modificacion + `</small><br>
        </div>
        <br>
        `
        contenedor.appendChild(meta)
        contenedor.appendChild(contenedor_post)
        contenedor.appendChild(separador)

        post.appendChild(contenedor)
    })
}




//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
//https://developers.google.com/web/updates/2015/03/introduction-to-fetch si no fuera por esta pagina, nunca habria descubierto que habia que hacer un then al json() para obtener los datos
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch ironicamente, aqui tambien esta la respuesta, pero no se nota tanto porque transforma la peticion a funcion asincrona para hacerle un await, por lo que el result.json() es parseado y regresado por el return
//https://love2dev.com/blog/javascript-remove-from-array/ eliminar elementos de un array

//jsdoc -c jsdoc.conf js/index.js js/lib/sys.js README.md -d Documentacion
//jsdoc -c jsdoc.conf -r ./js README.md -d Documentacion