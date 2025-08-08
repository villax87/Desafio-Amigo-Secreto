
// variables:
let nombreAmigo = [];  // arreglo para los nombres de amigos
let listaAmigos = document.querySelector('#listaAmigos');  //  selecciona la etiqueta para mostrar la lista de nombres
let valorCaja = document.querySelector('#cajaNombre');  // selecciona el objeto (input) en una variable
//-----------------------------------------------------

// agregar amigos a la lista
function agregarAmigo() {

        // evaluamos el contenido del input, si es diferente de vacio
    if (valorCaja.value != '') {
        
            // agrega el valor al arreglo (nombreamigo)
        nombreAmigo.push(valorCaja.value);

            // invoca a la funcion (actualizar lista)
        actualizarLista();

            // limpia el objeto (input) despues de agregar
        valorCaja.value = '';

        console.log(nombreAmigo);  // Muestra el array completo
        console.table(nombreAmigo);  // Muestra los nombres como tabla
        return valorCaja.value;

    } else {

            // si es vacio, muestra un msj alert.
        alert('¡Ingresa un nombre!');
    }
}

// actualizar lista y agregar nombres a esa lista
function actualizarLista() {

        // Limpia la lista
    listaAmigos.innerHTML = '';

        // Recorre el arreglo para agregar el nuevo nombre 
    nombreAmigo.forEach(nombre => {

            // Crea un nuevo elemento HTML <li> para crear la lista
        let li = document.createElement('li');

            // Asigna el nombre aagregado al elemento <li> creado
        li.textContent = nombre;

            // construye la lista agregando el nuevo nombre
        listaAmigos.appendChild(li);
    });
}

// realizar el sorteo
function sortearAmigo() {

            // Validar que haya nombres en la lista de amigos
    if (nombreAmigo.length === 0) {

            // si la lista esta vacia, muestra un msj alert
        alert('No hay amigos para sortear.');
        return;
    }

    // Generar un índice aleatorio de la lista de amigos
    let indiceAleatorio = Math.floor(Math.random() * nombreAmigo.length);

    // Obtener el nombre del indice aleatorio generado de la lista (nombreamigo)
    // y guardarlo en una variable
    let amigoSorteado = nombreAmigo[indiceAleatorio];

    // selecciona el objeto (ul id="resultado") donde se mostrara el resultado
    let resultado = document.getElementById('resultado');

    // asigna el valor de la variable al objeto (ul id="resultado") // el resultado.
    resultado.innerHTML = `<li>El Amigo Secreto Es: "${amigoSorteado}"</li>`;

}



