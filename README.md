**Autor:** [Drk0027](https://interlan.ec/portafolio-de-drk0027/)

**Version:** 1.0

**ChangeLog:** [Changelog](changelog.md)

**Documentación:** [Documentación](https://3sb.interlan.ec/Documentacion/index.html)

## Tabla de contenidos

- [Tabla de contenidos](#tabla-de-contenidos)
- [Motivación](#motivación)
- [Características](#características)
- [Sistema de Blogging tradicional](#sistema-de-blogging-tradicional)
- [Limites del sistema](#limites-del-sistema)
- [Sobre las imágenes y archivos](#sobre-las-imágenes-y-archivos)
- [Instalación](#instalación)
- [Webgrafía](#webgrafía)


## Motivación

La motivación de este proyecto, simplemente es crear una herramienta practica, con la cual pueda entrenar mas mis conocimientos de JavaScript y PWA, además de tener un sistema de blogging muy simple que dependa muy poco del servidor. 

## Características

Este blog permite toda la gama de CRUD (Crear, Actualizar, Borrar) para cada elemento de la base de datos (entradas.json), pero los cambios se almacenan de forma local en el LocalStorage, por lo que si se quieren hacer públicos los cambios, es necesario exportar el nuevo archivo entradas.json y reemplazar al anterior.

Las características iniciales de este proyecto son las siguientes

- **CRUD completo** Es decir, crear, actualizar y eliminar registros.
- **Personalización** Se pueden usar plantillas Bootstrap, pero también, al ser tan simple, siempre y cuando se mantengan las etiquetas originales con sus id, puede ser modificado completamente a gusto
- **PWA** Al disponer de _Service Workers_ y ser servido mediante https, los datos pueden permanecer en el cliente fuera de lineal, pudiendo ser consultados libremente.
- **Responsive** Las características del cliente definen la calidad de la lectura al ajustarse a los parámetros necesarios.
- **Notificaciones push** Para poder notificar al cliente si hay una versión mas reciente del archivo entradas.json o indicar que el archivo local ha sido modificado y debe guardarse para mostrar los cambios de forma global.(tal vez próxima versión)
- **Edición con guardado automático** Al editar una entrada, los cambios se almacenan automáticamente en el _LocalStorage_

## Sistema de Blogging tradicional

El objetivo de este proyecto no es reescribir la rueda, sino ofrecer una alternativa a los modelos tradicionales de forma didáctica, para que quienes deseen, puedan aprender directamente del código.

Para esto, se mantienen aspectos tradicionales de los blogs como:

- **Presentación de entradas en forma descendente** Muestra las entradas mas recientes primero en la pantalla inicial
- **Búsqueda simple por contenido de las entradas** La búsqueda es muy simple, se selecciona un array de palabras ingresadas en el campo de búsqueda y se confirma si estas existen en las entradas. Se creara una lista de entradas que contengan los criterios de búsqueda (por implementar)
- **Búsqueda por etiquetas** Se mostraran solo las entradas que tengan las etiquetas seleccionadas
- **¿Comentarios?** Dado que solo se cargan paginas estáticas, no es posible almacenar comentarios. En todo caso, tal vez sea posible vincular las url con sistemas como _Discus_ y otros.
- **Gestión SEO** No es precisamente imposible, pero la mayor parte del procesamiento se realiza desde el lado del cliente, por lo que, si bien, los motores de búsqueda pueden encontrar por ejemplo, el archivo index.html, no podrían leer los contenidos de las entradas, ya que esto requiere JavaScript y no solo texto plano. He leído que hay algunos buscadores que ya crean una representación virtual del tiempo de ejecución, por lo que pueden localizar información que solo se carga durante la ejecución en el cliente, pero no he investigado mas.

## Limites del sistema

Realmente no se que limites podría tener, pero estimo que esta bastante limitado, debido a que carga un archivo json que crecerá bastante con el tiempo.

Al parecer cada navegador tiene sus propias restricciones de memoria, pero básicamente la mayoría tienen espacio ilimitado para el _LocalStorage_, el problema esta mas relacionado con la memoria RAM.

Si bien el almacenamiento no es mayor problema, el archivo _Json_ es cargado directamente en la memoria RAM, así que su consumo es directamente proporcional al tamaño neto del archivo.

Los procesos del sistema no consumen demasiada memoria, pero al renderizar tienen que cargar el archivo por completo para procesarlo, es posible que comiencen a sentirse los efectos pasado los 10MB, puesto que el consumo de memoria suele incrementarse de forma exponencial al tamaño del archivo. Es bastante impresionante lo que puede cargar una base de datos normal. Mis respetos.

Solo por pura diversión, intentare hacer pruebas en un dispositivo _kaiOS_, Después de todo, este proyecto comenzó pensando en un Alcatel 3078A

## Sobre las imágenes y archivos

Se pueden utilizar las mismas etiquetas para incrustar imágenes en el documento, siempre y cuando se hayan subido primero las imágenes al directorio destinado **imágenes** o en su defecto, donde se desee almacenar los recursos requeridos

## Instalación

Basta con copiar los archivos en la carpeta publica del servidor. Tal vez cuando lo suba a _GitHub_ también se pueda usar el comando _git clone_ para descargar el código y ejecutarlo

## Webgrafía

[How to Build a Lightweight Blog](https://www.contentful.com/blog/2021/02/05/how-to-build-a-lightweight-blog/)

[Is It Possible to Build a Blog With HTML Only?](https://stackoverflow.com/questions/9156367/is-it-possible-to-build-a-blog-with-html-only+&cd=4&hl=en&ct=clnk&gl=ec)

https://www.quora.com/How-can-I-make-a-web-blog-using-HTML-CSS-and-JavaScript

https://dev.to/n3rd/deploy-a-javascript-only-blog-with-cms-js-4g7j

https://cms.js 