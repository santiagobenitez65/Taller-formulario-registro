function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const boton = document.getElementById("regBtn")

function camposLlenos(nombre, apellido, email, password1, password2) {
    if(nombre && apellido && email && password1 && password2) {
        return true
    } else {
        return false
    }
}

function terminosValidados (terminos) {
    return terminos.checked;
}

function contrasenasIguales(password1, password2) {
    return password1 === password2;
}

function validarPassword(password1){
   return password1.length >= 6;
}

boton.addEventListener("click", function() {
    
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const terminos = document.getElementById("terminos");
    
    console.log("Campos llenos: " + camposLlenos(nombre, apellido, email, password1, password2));
    console.log("Contraseñas iguales: " + contrasenasIguales(password1, password2));
    console.log("Terminos validados: " + terminosValidados(terminos));

    if(camposLlenos(nombre, apellido, email, password1, password2) && validarPassword(password1) && contrasenasIguales(password1, password2) && terminosValidados(terminos)) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
})
