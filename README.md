1. Este programa genera la ficha del videojuego "Loop Hero".
2. El grograma se ejecuta usando "index.js" y generara la ficha por defecto, pero al agregar "index.js valentin" generara la ficha cambiando el nombre del alumno por "valentin"
El orden-event-loop muestra la funcion de node al trabajar con un solo hilo, se ejecuta con "node orden-event-loop.js" y tiene de ejemplo una salida bloqueante.

La carpeta "salida" se genera en la carpera de origen, y esta contendra /ficha-videojuego.txt

1. Entiendo que  JavaScript, V8 y el runtime de Node.js son cosas distintas, mientras JS es un lenguaje de programacion. V8 se encarga de leer y ejecutar las ordenes de este lenguaje en node y el runtime es el entorno donde v8 ejecuta el programa.

2. Entiendo por que es una salida bloqueante, node trabaja en un solo hilo y necesita esperar a que termine el trabajo para dar lugar a la callback.

3. una entrada bloqueante necesita dar un resultado para poder continuar. una no bloqueante dara el resultado una vez el resultado este obtenido mientras el codigo principal se sigue ejecutando

4. node:path y node:fs son modulos nativos que se llaman con require. nodepath entiendo que une la ruta por ejemplo salida y lo que abra dentro de la carpeta salida, y nodefs crea las carpetas y lo que ira dentro de estas.



nota: Interprete mal la consigna y pense que al crear la ficha del videojuego este podria llevar el nombre del juego para identificarse porteriormente de otras fichas.