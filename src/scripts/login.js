// Login: checks credentials against users stored in localStorage.
function iniciarSesion() {
    const lang = localStorage.getItem('idioma') || 'es';

    const mensajes = {
        es: {
            noUsuario: "Usuario no encontrado. Por favor regístrate.",
            bienvenida: "¡Bienvenido de nuevo, {nombre}!",
            passIncorrecta: "Contraseña incorrecta."
        },
        en: {
            noUsuario: "User not found. Please register.",
            bienvenida: "Welcome back, {nombre}!",
            passIncorrecta: "Incorrect password."
        }
    };

    const msgs = mensajes[lang];

    const usuarioInput = document.getElementById("usuario").value;
    const passInput = document.getElementById("password").value;

    const usuarioGuardado = localStorage.getItem("user_" + usuarioInput);

    if (!usuarioGuardado) {
        alert(msgs.noUsuario);
        return;
    }

    const usuarioObj = JSON.parse(usuarioGuardado);

    if (usuarioObj.password === passInput) {
        sessionStorage.setItem("usuarioActivo", usuarioInput);
        if (document.getElementById("recordar").checked) {
            localStorage.setItem("sesionRecordada", usuarioInput);
        } else {
            localStorage.removeItem("sesionRecordada");
        }

        alert(msgs.bienvenida.replace("{nombre}", usuarioObj.nombrePila || usuarioObj.nombre));

        window.location.href = "index.html";
    } else {
        alert(msgs.passIncorrecta);
    }
}