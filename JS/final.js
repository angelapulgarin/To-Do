
window.onload = function () {

    let entradaTexto = document.getElementById("input1")
    let contenidoLista = document.getElementById("mostrar-tarea");

    let btnAgregar = document.getElementById("agregar");



    //Agregar Tareas y crear los botones

    btnAgregar.onclick = function () {

        let contenidoTarea = entradaTexto.value;

        let nuevaTarea = document.createElement("li");
        contenidoLista.appendChild(nuevaTarea);

        nuevaTarea.textContent = contenidoTarea;
        entradaTexto.value = "";


        let btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        nuevaTarea.appendChild(btnEditar);

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        nuevaTarea.appendChild(btnEliminar);


        //Modificar tareas

        btnEditar.onclick = function () {

            let inputEditar = document.createElement("input");
            inputEditar.value = nuevaTarea.textContent;
            contenidoLista.replaceChild(inputEditar, nuevaTarea);

            let btnGuardar = document.createElement("button");
            btnGuardar.textContent = "Guardar";
            contenidoLista.insertBefore(btnGuardar, inputEditar);

            btnGuardar.onclick = function () {
                nuevaTarea.textContent = inputEditar.value;
                contenidoLista.replaceChild(nuevaTarea, inputEditar);
                contenidoLista.removeChild(btnGuardar);
                nuevaTarea.appendChild(btnEditar);
                nuevaTarea.appendChild(btnEliminar);

            }

        }


        //Eliminar Tareas

        btnEliminar.onclick = function () {

            contenidoLista.removeChild(nuevaTarea);
        }


    }


}
















