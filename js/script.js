function validarCorreo(email) {
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let esValido = expReg.test(email);
    if (esValido == true) {
        alert('El correo electrónico es válido.');
    }
    else {
        alert('El correo electrónico no es válido.');
    }
}

function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
    document.cookie = cname + "=;expires=-1";
}

window.onload = function () {
    let save = document.getElementById("save");
    save.onclick = function () {
        let email = document.formulario.email.value;

        setCookie("email", email, 2);

        alert(document.cookie);
    }

    let btn_email = document.getElementById("btn-email");

    btn_email.onclick = function () {

        alert(getCookie("email"));

    }

    let btn_delete = document.getElementById("btn-delete");
    btn_delete.onclick = function () {
        deleteCookie("email");
    }
}