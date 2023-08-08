
window.onload = function () {

let entradaTexto = document.getElementById ("input1")
let tarea = document.getElementById ("mostrar-tarea");

let btnAgregar = document.getElementById ("agregar");
let btnModificar = document.getElementById ("modificar");
let btnEliminar = document.getElementById ("eliminar");


let contenidoTarea = " ";

//ocultar botones

function ocultarBoton () {

    btnModificar.style.display= "none"
    btnEliminar.style.display="none";

}

ocultarBoton ();


//Monstrar botones

function mostrarBoton () {

    btnModificar.style.display= "inline-block";
    btnEliminar.style.display= "inline-block";

}



//Que muestre al hacer click en el botòn agregar

function crearTareas() {
    if (contenidoTarea === " ") {
        contenidoTarea = entradaTexto.value;
        tarea.innerHTML = contenidoTarea;
        entradaTexto.value = "";
        return;

    }

}



btnAgregar.onclick = function () {
    crearTareas ();
    mostrarBoton ();
    
}

btnModificar.onclick = function () {

    let input = 


}





}

