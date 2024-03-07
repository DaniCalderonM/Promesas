// Se requiere desarrollar un programa con JavaScript, que al ser ejecutado en la consola del
// navegador web, muestre los primeros 20 títulos de álbumes ofrecidos por una URL en la nube,
// esto se puede lograr mediante el “id” que tiene cada objeto, que entrega la URL.
// Igualmente, después de pasar 3 segundos, se debe mostrar un mensaje en la consola del
// navegador web indicando que la información fue enviada.
// El procedimiento de manera general para lograr lo solicitado será:
// ● Crear una función asíncrona que contenga la URL en una variable. LISTOOOO
// ● Luego mediante el bloque de try/catch conectarse a la URL indicada anteriormente
// con el método fetch, utilizando a la vez await para que retorne directamente el valor
// de la promesa. LISTOOO
// ● Utilizando métodos para iterar arreglos, como por ejemplo el forEach, solamente
// mostrar los primeros 20 títulos de álbumes de acuerdo al número de id indicados por
// la URL.
// ● Se debe crear otra función que retorne una promesa, la cual debe tardar tres (3)
// segundos en resolver la promesa para retornar el mensaje: “Información Enviada”.
// Esta promesa debe ser recibida por una función asíncrona, que mediante el uso del
// await reciba directamente el valor y lo muestra por la consola del navegador web.
// Requerimientos
// 1. Implementar ES6 para toda la estructura del código.
// (1 Puntos)
// 2. Crear una función asíncrona para obtener los datos de la URL. LISTOOO
// (2 Puntos)
// 3. Dentro de un bloque Try/Catch, utilizar el método fetch mediante la instrucción await
// para recibir el valor directamente de la promesa. LISTOOO
// (1 Puntos)
// 4. Utilizar un método de iteración de arreglos (por ejemplo: forEach) para mostrar
// solamente los primeros 20 títulos de los datos recibidos.
// (2 Puntos)
// 5. Crear una función que retorne una promesa después de tres (3) segundos utilizando
// setTimeout. El mensaje a retornar debe ser un string que indique: “Información
// Enviada”.
// (2 Puntos)
// 6. Crear una función asíncrona que permita recibir el mensaje de la promesa creada en
// el requerimiento cinco (5), de forma directa con await, para ser mostrado en la consola
// del navegador, agregando el llamado a las dos funciones principales.
// (2 Puntos)

//Creamos la funcion asincrona que nos servira para conectarnos
//con la Api mediante su url.
const getDatos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try {
        const response = await fetch(url);
        //console.log("Response: ", response);
        const datos = await response.json();
        // Filtrar los primeros 20 títulos de álbumes basados en el "id"
        const filtroDatos = datos.filter(dato => dato.id < 21);
        //let contador = 0;
        // Mostrar los títulos de los primeros 20 álbumes
        filtroDatos.forEach(dato => {
            //contador++;
            // Mostrar el número y el título
            console.log(`Titulo ${dato.id}: ${dato.title}`);
        });
        //console.log("Informacion a procesar: ", filtroDatos);

        // Retornar la información para utilizarla en el siguiente paso
        return filtroDatos;
    } catch (err) {
        console.log(err);
    }
}

// // Función que retorna una promesa después de 3 segundos
const mensajeSegundos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Información Enviada");
        }, 3000);
    });
}

// // Función asíncrona principal que llama a las funciones anteriores
const llamadoFunciones = async () => {
    // Obtener los datos de la URL
    await getDatos();

    // Llamar a la función para enviar el mensaje después de 3 segundos
    const mensaje = await mensajeSegundos();

    // Mostrar el mensaje en la consola del navegador
    console.log(mensaje);
}

// // Llamar a la función principal para ejecutar el programa
llamadoFunciones();




