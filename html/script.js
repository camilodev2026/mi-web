const form = document.getElementById("contact-Form");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" ||  mensaje === "") {
        message.textContent = "Por favor completa todos los campos";
        message.style.color = "red";
    } else {
        message.textContent = "Mensaje enviado correctamente";
        message.style.color = "green";    
        form.reset();
    }
});