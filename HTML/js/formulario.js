function validarEmail(email) {
    var primerAparicion = email.indexOf("@");
    var segundaAparicion = email.lastIndexOf("@");
    if (primerAparicion != segundaAparicion || primerAparicion == -1) {
        return "invalido";
    }
    var ultimoPunto = email.lastIndexOf(".");
    if (ultimoPunto <= primerAparicion) {
        return "invalido";
    }
    return "";
}
function validarForm(form){
    var error = document.getElementById("error");
    var nombre = form.elements["nombre"].value;
    var apellido = form.elements["apellido"].value;
    var email = form.elements["email"].value;
    var mensajesError = [];
    if (nombre == null || nombre == '') {   
        mensajesError.push('Ingresa tu nombre');
    }
    if (apellido == '' || apellido == null) {
        mensajesError.push('Ingresa tu apellido');
    }
    if (validarEmail(email) == "invalido") {
        mensajesError.push("email inválido");
    }
    error.innerHTML = mensajesError.join(",");
}