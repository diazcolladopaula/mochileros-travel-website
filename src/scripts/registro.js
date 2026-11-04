// Sign up: field validation and user creation in localStorage.
function validarRegistro() {
    const lang = localStorage.getItem('idioma') || 'es';

    const mensajes = {
        es: {
            vacios: "Por favor, rellena todos los campos obligatorios.",
            email: "El correo electrónico no es válido. Debe ser formato 'usuario@dominio.com'.",
            passRequisitos: "La contraseña debe tener:\n- Mínimo 8 caracteres\n- Al menos una mayúscula\n- Al menos un número\n- Al menos un carácter especial (ej: @, #, $, .)",
            passNoCoincide: "Las contraseñas no coinciden.",
            usuarioExiste: "El nombre de usuario '{usuario}' ya existe. Por favor elige otro.",
            exito: "¡Registro exitoso! Ahora puedes iniciar sesión."
        },
        en: {
            vacios: "Please fill in all required fields.",
            email: "Invalid email address. Format must be 'user@domain.com'.",
            passRequisitos: "Password must have:\n- Minimum 8 characters\n- At least one uppercase letter\n- At least one number\n- At least one special character (e.g., @, #, $, .)",
            passNoCoincide: "Passwords do not match.",
            usuarioExiste: "The username '{usuario}' already exists. Please choose another one.",
            exito: "Registration successful! You can now log in."
        }
    };

    const msgs = mensajes[lang];

    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const usuario = document.getElementById("usuario").value.trim();
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;
    const email = document.getElementById("email").value.trim();

    if (!nombre || !apellidos || !usuario || !pass1 || !pass2 || !email) {
        alert(msgs.vacios);
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert(msgs.email);
        return;
    }

    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passRegex.test(pass1)) {
        alert(msgs.passRequisitos);
        return;
    }

    if (pass1 !== pass2) {
        alert(msgs.passNoCoincide);
        return;
    }

    if (localStorage.getItem("user_" + usuario)) {
        alert(msgs.usuarioExiste.replace("{usuario}", usuario));
        return;
    }

    const nuevoUsuario = {
        nombre: nombre + " " + apellidos,
        nombrePila: nombre,
        apellidos: apellidos,
        usuario: usuario,
        password: pass1,
        email: email,
        compras: []
    };

    // Demo only: the password is stored as plain text. A real app would hash it server-side.
    localStorage.setItem("user_" + usuario, JSON.stringify(nuevoUsuario));

    alert(msgs.exito);
    window.location.href = "login.html";
}

function actualizarNombreArchivo() {
    const input = document.getElementById('foto');
    const textoSpan = document.getElementById('texto-nombre-archivo');

    if (input.files && input.files.length > 0) {
        textoSpan.textContent = input.files[0].name;
        textoSpan.removeAttribute('data-lang');
        textoSpan.style.fontStyle = "normal";
    } else {
        const lang = localStorage.getItem('idioma') || 'es';
        if (typeof traducciones !== 'undefined') {
            textoSpan.textContent = traducciones[lang]['text_no_file'];
        }
        textoSpan.setAttribute('data-lang', 'text_no_file');
        textoSpan.style.fontStyle = "italic";
    }
}