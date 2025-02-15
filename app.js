// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let nombreInput = document.getElementById("amigo");

function agregarAmigo() {
    let nombre = nombreInput.value.trim(); // Elimina espacios innecesarios

    // Validar que el nombre no esté vacío y no contenga caracteres especiales
    if (nombre === "" || /[!@#$¬%^&°~()_*+\-={}[\];':"0-9]/.test(nombre)) {
        alert("Por favor, inserte un nombre válido.");
    } else {
        amigos.push(nombre);
        actualizaAmigos(); // Llamamos la función para actualizar la lista
        nombreInput.value = ""; // Limpiar el input
    }
}

function actualizaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        let nuevoElemento = document.createElement("li"); // Crear un elemento <li>
        nuevoElemento.textContent = amigos[i]; // Asignar el nombre del amigo
        lista.appendChild(nuevoElemento); // Agregar <li> a la lista
        console.log(amigos);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Ingrese los nombres de sus amigos para sortear... Si los tiene xD")
    } else if (amigos.length < 2) {
        alert("No se puede hacer un sorteo con una persona... osea Daaahhh!!! ¬¬")
    } else {
        // Lógica para sortear amigos
        let amigosSorteados = [...amigos];
        amigosSorteados.sort(() => Math.random() - 0.5); // Mezclar los amigos

        let resultado = {};
        for (let i = 0; i < amigos.length; i++) {
            let amigo = amigos[i];
            let amigoSorteado = amigosSorteados[i];
            resultado[amigo] = amigoSorteado;
        }

        // Mostrar el resultado en el elemento con id "resultado"
        let resultadoElemento = document.getElementById("resultado");
        resultadoElemento.innerHTML = ""; // Limpiar el contenido anterior

        for (let amigo in resultado) {
            let nuevoElemento = document.createElement("p");
            nuevoElemento.textContent = `Has sacado como Amigo Secreto a ${resultado[amigo]}`;
            resultadoElemento.appendChild(nuevoElemento);
            break;
        }
        
    
    } 
}
