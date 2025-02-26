// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array para almacenar nombres
let amigos = []

//Función para agregar amigos
function agregarAmigo(){
    //Obtención de valor de entrada por Id
    let nombreAmigo = document.getElementById("amigo").value;
    //Validación de entrada
    if(validarEntrada(nombreAmigo) == true) {
        //Se agrega el nombre del amigo a la lista
        amigos.push(nombreAmigo);
        //Actualizar la lista de amigos en el HTML
        actualizarListaAmigos();
    }
   
}
function validarEntrada(nombre){
    // Validar si el nombre está vacío o solo contiene espacios en blanco
    if (!nombre.trim()) {
        alert('Por favor, ingrese un nombre.');
        limpiarLista();
        return false;
    }
    if (amigos.includes(nombre)) {
        alert('Este nombre ya ha sido ingesado. Intenta con otro');
        limpiarLista();
        return false; // Retorna false inmediatamente si el nombre ya existe
    }

    //Condición para aceptar sólo letras
    const regex = /^[\p{L}]+([\s-][\p{L}]+)*$/u; //Símbolos o caracteres que no considera
    if (regex.test(nombre.trim()) == false) {
        alert('Inserte un nombre con los caracteres correctos');
        limpiarLista();
        // Retorna false inmediatamente si el formato es incorrecto
        return false; 
    }
    // Si pasa ambas validaciones, retorna true
    return true; 
}
//Función para actualizar lista de amigos
function actualizarListaAmigos(){
    // Se busca el elemento
    let listaHTML = document.querySelector('#listaAmigos');
    // limpiar lista
    listaHTML.innerHTML = '';

    //Se agrega el nombre a la lista
    for (let i = 0; i < amigos.length; i++){
        let listaNombres = document.createElement('li');
        listaNombres.textContent = amigos[i];
        listaHTML.appendChild(listaNombres);
    }
    return;
}
//Función para limpiar la lista
function limpiarLista(){
    document.querySelector("amigo").value = "";
}
//Función para sortear el nombre del amigo
function sortearAmigo() {
     
    size_lista = amigos.length;

    // si la lista esta vacia, mostrar mensaje
    if(size_lista == 0) {
        alert('Agrega al menos un amigo');
      
      // si la lista contiene elementos, seleccionar amigo aleatoriamente
    } else {
        let amigoAleatorio = Math.floor(Math.random()*size_lista);
        let amigoHTML = document.querySelector('#resultado');
        amigoHTML.innerHTML = amigos[amigoAleatorio];
    }
  }