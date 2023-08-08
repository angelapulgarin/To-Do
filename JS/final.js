
window.onload = function () {

    let entradaTexto = document.getElementById("input1")
    let contenidoLista = document.getElementById("mostrar-tarea");

    let btnAgregar = document.getElementById("agregar");



    //Agregar Tareas y crear los botones

    btnAgregar.onclick = function () {

        let contenidoTarea = entradaTexto.value;
        entradaTexto.value = "";

        let nuevaTarea = document.createElement("li");
        contenidoLista.appendChild(nuevaTarea);
        nuevaTarea.classList.add("liTareas");


        let textoTareas = document.createElement("p");
        textoTareas.textContent = contenidoTarea;
        nuevaTarea.appendChild(textoTareas);
        textoTareas.classList.add("textoli");


        let btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        nuevaTarea.appendChild(btnEditar);
        btnEditar.classList.add("boton");

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        nuevaTarea.appendChild(btnEliminar);
        btnEliminar.classList.add("boton");


        //Modificar tareas

        btnEditar.onclick = function () {

            let inputEditar = document.createElement("input");
            inputEditar.value = textoTareas.textContent;
            contenidoLista.replaceChild(inputEditar, nuevaTarea);
            inputEditar.classList.add("textoli");

            let btnGuardar = document.createElement("button");
            btnGuardar.textContent = "Guardar";
            contenidoLista.insertBefore(btnGuardar, inputEditar.nextSibling);
            btnGuardar.classList.add("boton");

            btnGuardar.onclick = function () {
                textoTareas.textContent = inputEditar.value;
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
















