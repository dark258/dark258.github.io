// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listadoAmigos = [];

//Agrega amigos al listado
function agregarAmigo(){
    //La variable será una constante, indistinto que el valor del HTML varía
    const nombreAmigo = document.getElementById("amigo");
    if (nombreAmigo.value == ''){ 
        //Si no se ha escrito ningún nombre en el campo de texto
        alert('El nombre no debe estar vacío');

    }else{
        //De lo contrario, se incorpora al listado y actualizamos
        listadoAmigos.push(nombreAmigo.value);
        
        //Incorporamos el nombre en el HTML
        actualizarListaAmigos();

        //Vaciamos el campo de input
        document.getElementById("amigo").value = '';
    }

    //Enfocamos el campo para comodidad
    nombreAmigo.focus();
}

function sortearAmigo(){
    if (listadoAmigos.length < 2){
        //Despliega un error si el listado no tiene al menos dos amigos para hacer un sorteo
        alert ("No hay suficientes amigos para realizar un sorteo! Agrega más amigos!");
        return;
    }else{
        const indiceRandom = Math.floor(Math.random() * listadoAmigos.length);
        const resultadoSeleccion = listadoAmigos[indiceRandom];
        const listaResultado = document.getElementById("resultado");
        listaResultado.innerHTML = resultadoSeleccion;
    }
}

function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById("listaAmigos");
    listaAmigosElement.innerHTML = ""; // Limpia la lista actual

    for (let i = 0; i < listadoAmigos.length; i++) {
        const amigo = listadoAmigos[i];
        const listItem = document.createElement("li");
        listItem.textContent = amigo;
        listaAmigosElement.appendChild(listItem);
    }
}