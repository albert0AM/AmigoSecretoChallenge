// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    // Validar que solo contenga letras y espacios
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
    if (!regex.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombre);
    
    // Limpiar el campo de entrada
    input.value = "";
    
    // Actualizar la lista en la interfaz
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista
    
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = `Amigo seleccionado: ${amigoSorteado}`;
}
