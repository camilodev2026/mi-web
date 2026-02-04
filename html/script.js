const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("contact-Form");
const message = document.getElementById("formMessage");

function mostrarMensaje (texto, color)  {
    message.textContent = texto;
    message.style.color = color;
    limpiarMensaje();
}

function limpiarMensaje() {
    setTimeout(( ) => {
        message.textContent = "";
     }, 3000);
}

function validarFormulario()  {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" ||  mensaje === "") {
        mostrarMensaje("Por favor completa todos los campos", "red");
        document.getElementById("nombre").focus();
        return;
    }

    if (!email.includes("@"))  {
        mostrarMensaje("El email no es valido", "red");
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando...";

    setTimeout(() => { 
        mostrarMensaje("Mensaje enviado correctamente", "green");
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = "Enviar";
        document.getElementById("nombre").focus();
    }, 1500);


     localStorage.setItem("nombreUsuario", nombre);
    form.reset();
    document.getElementById("nombre").focus();
 }   
    

form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    validarFormulario();
});
const nombreGuardado =
localStorage.getItem("nombreUsuario");

if(nombreGuardado) {
    document.getElementById("nombre").value =
nombreGuardado; 
}


// =====================
// PRACTICA DIA 1
// =====================
// let nombre = "Camilo";
// let edad = 24;
// let ciudad ="Lima";
// console.log(nombre);
// console.log(edad);
// console.log(Barranquilla);


// =======================
// PRACTICA DIA 2
// =======================
// let survey = 5;
// if (survey >= 3) {
//    console.log("Ganaste");
// }   else {
//    console.log("No ganaste");
// }

// ======================
// PRACTICA DIA 3
// ======================
// function saludar(nombre) {
//    console.log("Hola " + nombre);
// }
// saludar("Camilo");
// saludar("Juan");

