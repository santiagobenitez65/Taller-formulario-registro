function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function contrasenasDiferentes() {
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

    return password1 !== password2;
}
