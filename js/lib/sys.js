/**
 * # Carga Inicial
 * 
 * Esta funcion permite determinar el estado de los datos en memoria, cargandolos desde el servidor en caso de que no exista o comprobando si se encuentran modificados en relacion con el archivo original
 * 
 * Esta funcion devuelve un array que contiene los datos de la entrada
 */
export async function carga() {
    var respuesta
    var texto
    if (localStorage.getItem("entradas") == undefined) {//no hay nada guardado
        //agregar try and catch
        respuesta = await fetch("entradas.json")
        texto = await respuesta.text()
        localStorage.setItem("entradas", texto)
        return JSON.parse(texto)
    } else {
        return JSON.parse(localStorage.getItem("entradas"))
    }
}

/**
 * # Recarga
 * 
 * Esta funcion permite reemplazar la copia local por una copia obtenida del servidor.
 */
export async function recarga(){
    var respuesta
    var texto
    respuesta = await fetch("entradas.json")
        texto = await respuesta.text()
        localStorage.setItem("entradas", texto)
}

/**
 * # Actualizar
 * 
 * Actualiza los datos en en localStorage con una copia del array recibido por parametros
 * 
 * @param {*} entradas El objeto completo de las entradas para combinar con el localstorage
 */
export function actualizar(entradas){
    localStorage.setItem("entradas",JSON.stringify(entradas))
    return "exito"
}

/**
 * # Datetime
 * 
 * Funcion que permite regresar una cadena de texto en formato de fecha y hora de mysql
 */
export function datetime(){
    var datetime = new Date()
    return datetime.getFullYear()+"-"+datetime.getMonth()+"-"+datetime.getDate()+" "+datetime.getHours()+":"+datetime.getMinutes()+":"+datetime.getSeconds()

}