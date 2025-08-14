function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const nombre = document.getElementById("nombre").value.trim();
const apellido = document.getElementById("apellido").value.trim();
const email = document.getElementById("email").value.trim();
const password1 = document.getElementById("password1").value;
const password2 = document.getElementById("password2").value;
const terminos = document.getElementById("terminos").value;

function camposVacios() {
    return(!nombre || !apellido || !email || !password1 || !password2);
}

function terminosNoValidados () {
    return !terminos.checked;
}

function contrasenasDiferentes() {
    return password1 !== password2;
}