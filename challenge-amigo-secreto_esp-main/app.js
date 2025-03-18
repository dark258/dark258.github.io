// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listadoAmigos = [];

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