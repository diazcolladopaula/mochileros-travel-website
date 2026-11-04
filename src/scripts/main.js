// Shared code: translations, session handling, language switch and home carousel.
(function restaurarSesionRecordada() {
    const recordado = localStorage.getItem("sesionRecordada");
    if (recordado && !sessionStorage.getItem("usuarioActivo") && localStorage.getItem("user_" + recordado)) {
        sessionStorage.setItem("usuarioActivo", recordado);
    }
})();

const traducciones = {
    es: {
        hero_title: "Mochileros por el mundo",
        hero_subtitle: "Tu próxima aventura empieza aquí.",
        hero_btn: "Packs disponibles",
        sec_packs: "Packs más populares",
        sec_articles: "Artículos de utilidad",

        ad_recommend: "Te recomendamos",
        ad_top: "Top Ventas",
        prod_boots1: "Botas Senderismo Impermeables",
        prod_boots2: "Botas de Montaña Piel - Pro",
        prod_backpack: "Mochila Táctica 40L",
        btn_amazon: "Ver en Amazon",

        footer_title: "Mochileros por el mundo",
        follow_us: "SÍGUENOS",
        legal: "Legal",
        terms: "Términos y condiciones",
        info: "Información",
        page: "Política de privacidad",
        help: "Ayuda",
        faq_short: "Preguntas frecuentes",
        problems: "Problemas",
        incidents: "Incidencias web",
        contact: "Contacto",
        doubts: "Dudas",
        phone: "Número telefónico",
        secure_pay: "PAGO SEGURO",

        nav_packs: "Packs",
        nav_forum: "Foro",
        nav_articles: "Artículos",
        nav_faq: "Preguntas frecuentes",
        nav_corners: "Otros rincones",
        nav_about: "Nosotros",
        nav_login: "Iniciar Sesión",
        nav_logout: "(Salir)",

        packs_title: "Paquetes de viaje",
        packs_subtitle: "Descubre nuestros mejores destinos al mejor precio",
        filters: "Filtros",
        filter_country: "País",
        filter_stars: "Estrellas Hotel",
        filter_destination: "Tipo de destino",
        apply_filters: "Aplicar filtros",
        clear_filters: "Limpiar filtros",

        country_hungary: "Hungría",
        country_italy: "Italia",
        country_japan: "Japón",
        country_peru: "Perú",
        country_kenia: "Kenia",
        country_usa: "Estados Unidos",
        country_morocco: "Marruecos",
        country_newzealand: "Nueva Zelanda",
        country_czechrepublic: "República Checa",

        dest_city: "Ciudad",
        dest_beach: "Playa",
        dest_mountain: "Montaña",
        dest_adventure: "Aventura",

        login_title: "Portal de Acceso",
        register_title: "Portal de Registro",
        faq_title: "Preguntas Frecuentes",
        faq_subtitle: "Resolvemos todas tus dudas antes de viajar.",
        corners_title: "Otros Rincones del Mundo",
        corners_subtitle1: "¡Tu opinión importa!",
        corners_subtitle2: "Vota qué pack te gustaría que volviese a estar disponible",
        about_title: "Mochileros por el mundo",
        blog_title: "Blog de Viajes",
        blog_subtitle: "Guías detalladas, rutas secretas y consejos para viajeros intrépidos.",

        compra_title: "Portal de Compra",
        compra_subtitle: "Estás a un paso de tu próxima gran aventura",
        compra_includes: "Lo que incluye tu experiencia:",
        compra_note_label: "Nota:",
        label_name: "Nombre y Apellido/s",
        label_payment_method: "Forma de pago",
        label_card_num: "Número de tarjeta",
        label_expiry: "Caducidad",
        label_cvv: "CVV",
        label_email: "Correo electrónico",
        label_terms: "Acepto Términos y Condiciones",
        btn_confirm: "Confirmar Compra",

        label_user: "Usuario",
        label_password: "Contraseña",
        label_remember: "Recordar sesión",
        label_surname: "Apellidos",
        label_user_login: "Nombre de Usuario (Login)",
        label_pass_repeat: "Repetir contraseña",
        label_photo: "Añadir foto (Opcional):",
        btn_enter: "Iniciar sesión",
        btn_register: "Registrar",
        ph_pass: "Mínimo 8 carácteres, mayúscula, número...",
        ph_pass_repeat: "Repite la contraseña",
        ph_fullname_ex: "Ej: Ana López",
        ph_user_ex: "Ej: viajero23",
        ph_firstname_ex: "Ej: Ana",
        ph_lastname_ex: "Ej: López García",
        ph_email_ex: "nombre@ejemplo.com",
        pay_visa: "Tarjeta VISA",
        pay_mastercard: "Mastercard",
        pay_paypal: "PayPal",
        prod_tent: "Tienda de Campaña Ultraligera",
        title_articulos: "Artículos - Mochileros por el mundo",
        title_faq: "Preguntas Frecuentes - Mochileros por el mundo",
        title_foro: "Foro - Mochileros por el mundo",
        title_login: "Iniciar Sesión - Mochileros por el mundo",
        title_nosotros: "Nosotros - Mochileros por el mundo",
        title_otros_rincones: "Otros Rincones - Mochileros por el mundo",
        title_packs: "Paquetes - Mochileros por el mundo",
        title_registro: "Registro - Mochileros por el mundo",
        text_no_file: "Ningún archivo seleccionado",
        btn_choose_file: "Seleccionar archivo",

        about_title: "Mochileros por el mundo",
        about_p1: "Somos más que una agencia de viajes; somos un equipo de exploradores apasionados con una misión clara: hacer que tus sueños de viajar por el mundo se hagan realidad, sin estrés y sin complicaciones.",
        about_p2: "Entendemos que cada viaje es una historia personal. Por eso, nos dedicamos a diseñar \"packs\" de viaje que van más allá de lo convencional. No solo reservamos tu vuelo y tu hotel; creamos experiencias completas. Seleccionamos cuidadosamente los mejores alojamientos, organizamos traslados y añadimos esas actividades y \"más\" que convierten unas simples vacaciones en un recuerdo para toda la vida.",
        about_p3: "Desde las calles vibrantes de una metrópoli hasta la tranquilidad de una playa remota, nuestro trabajo es ocuparnos de cada detalle para que tú solo tengas una tarea: disfrutar.",
        about_quote: "Deja que nos encarguemos de la logística. El mundo te está esperando.",

        forum_title: "Foro de Viajeros",
        forum_subtitle: "Comparte experiencias, busca compañeros y resuelve dudas.",
        forum_latest_topics: "Últimos Temas",
        forum_new_topic: "+ Nuevo Tema"

    },
    en: {
        hero_title: "Backpackers of the World",
        hero_subtitle: "Your next adventure starts here.",
        hero_btn: "Available Packs",
        sec_packs: "Most Popular Packs",
        sec_articles: "Useful Articles",

        ad_recommend: "Recommended",
        ad_top: "Top Sales",
        prod_boots1: "Waterproof Hiking Boots",
        prod_boots2: "Leather Mountain Boots - Pro",
        prod_backpack: "Tactical Backpack 40L",
        btn_amazon: "View on Amazon",

        footer_title: "Backpackers of the World",
        follow_us: "FOLLOW US",
        legal: "Legal",
        terms: "Terms and conditions",
        info: "Information",
        page: "Privacy Policy",
        help: "Help",
        faq_short: "FAQ",
        problems: "Problems",
        incidents: "Web Incidents",
        contact: "Contact",
        doubts: "Questions",
        phone: "Phone Number",
        secure_pay: "SECURE PAYMENT",

        nav_packs: "Packs",
        nav_forum: "Forum",
        nav_articles: "Articles",
        nav_faq: "FAQ",
        nav_corners: "Hidden\u00A0Spots",
        nav_about: "About\u00A0Us",
        nav_login: "Login",
        nav_logout: "(Logout)",

        packs_title: "Travel Packages",
        packs_subtitle: "Discover our best destinations at the best price",
        filters: "Filters",
        filter_country: "Country",
        filter_stars: "Hotel Stars",
        filter_destination: "Destination Type",
        apply_filters: "Apply Filters",
        clear_filters: "Clear Filters",

        country_hungary: "Hungary",
        country_italy: "Italy",
        country_japan: "Japan",
        country_peru: "Peru",
        country_kenia: "Kenya",
        country_usa: "United States",
        country_morocco: "Morocco",
        country_newzealand: "New Zealand",
        country_czechrepublic: "Czech Republic",

        dest_city: "City",
        dest_beach: "Beach",
        dest_mountain: "Mountain",
        dest_adventure: "Adventure",

        login_title: "Access Portal",
        register_title: "Registration Portal",
        faq_title: "Frequently Asked Questions",
        faq_subtitle: "We answer all your questions before you travel.",
        corners_title: "Other Corners of the World",
        corners_subtitle1: "Your opinion matters!",
        corners_subtitle2: "Vote for which pack you would like to be available again",
        about_title: "Backpackers of the World",

        compra_title: "Purchase Portal",
        compra_subtitle: "You are one step away from your next great adventure",
        compra_includes: "What your experience includes:",
        compra_note_label: "Note:",
        label_name: "Full Name",
        label_payment_method: "Payment Method",
        label_card_num: "Card Number",
        label_expiry: "Expiration Date",
        label_cvv: "CVV",
        label_email: "Email Address",
        label_terms: "I accept Terms and Conditions",
        btn_confirm: "Confirm Purchase",

        label_user: "Username",
        label_password: "Password",
        label_remember: "Remember me",
        label_surname: "Last Name",
        label_user_login: "Username (Login)",
        label_pass_repeat: "Repeat Password",
        label_photo: "Add Photo (Optional):",
        btn_enter: "Log In",
        btn_register: "Register",
        ph_pass: "Min 8 chars, 1 uppercase, 1 number...",
        ph_pass_repeat: "Repeat password",
        ph_fullname_ex: "E.g. Jane Smith",
        ph_user_ex: "E.g. traveler23",
        ph_firstname_ex: "E.g. Jane",
        ph_lastname_ex: "E.g. Smith Brown",
        ph_email_ex: "name@example.com",
        pay_visa: "VISA card",
        pay_mastercard: "Mastercard",
        pay_paypal: "PayPal",
        prod_tent: "Ultralight Camping Tent",
        title_articulos: "Articles - Mochileros por el mundo",
        title_faq: "FAQ - Mochileros por el mundo",
        title_foro: "Forum - Mochileros por el mundo",
        title_login: "Log in - Mochileros por el mundo",
        title_nosotros: "About us - Mochileros por el mundo",
        title_otros_rincones: "Hidden Gems - Mochileros por el mundo",
        title_packs: "Travel Packs - Mochileros por el mundo",
        title_registro: "Sign up - Mochileros por el mundo",
        text_no_file: "No file selected",
        btn_choose_file: "Choose file",
        blog_title: "Travel Blog",
        blog_subtitle: "Detailed guides, secret routes, and tips for intrepid travelers.",

        about_title: "Backpackers of the World",
        about_p1: "We are more than just a travel agency; we are a team of passionate explorers with a clear mission: to make your dreams of traveling the world come true, stress-free and hassle-free.",
        about_p2: "We understand that every trip is a personal story. That's why we dedicate ourselves to designing travel \"packs\" that go beyond the conventional. We don't just book your flight and hotel; we create complete experiences. We carefully select the best accommodations, organize transfers, and add those activities and \"extras\" that turn a simple vacation into a lifelong memory.",
        about_p3: "From the vibrant streets of a metropolis to the tranquility of a remote beach, our job is to take care of every detail so that you only have one task: to enjoy.",
        about_quote: "Let us handle the logistics. The world is waiting for you.",

        forum_title: "Travelers Forum",
        forum_subtitle: "Share experiences, find companions, and solve doubts.",
        forum_latest_topics: "Latest Topics",
        forum_new_topic: "+ New Topic"
    }
};

document.addEventListener("DOMContentLoaded", function () {
    actualizarHeaderSesion();

    inicializarIdioma();

    if (document.getElementById("contenedor-packs-home")) {
        cargarPacksHome();
        actualizarHero();
        carrusel();
    }

    resaltarMenuActivo();
});

function inicializarIdioma() {
    const idiomaGuardado = localStorage.getItem('idioma') || 'es';

    aplicarTraducciones(idiomaGuardado);

    const selector = document.getElementById('selector-idioma');
    if (selector) {
        selector.value = idiomaGuardado;

        selector.addEventListener('change', (e) => {
            cambiarIdioma(e.target.value);
        });
    }
}

function cambiarIdioma(lang) {
    localStorage.setItem('idioma', lang);

    aplicarTraducciones(lang);

    if (typeof cargarPacks === "function") cargarPacks();
    if (typeof cargarArticulos === "function") cargarArticulos();
    if (typeof cargarPacksHome === "function") cargarPacksHome();
    if (typeof cargarFAQ === "function") cargarFAQ();
    if (typeof cargarRincones === "function") cargarRincones();
    if (typeof cargarDatosCompra === "function") cargarDatosCompra();
    if (typeof renderizarForo === "function") renderizarForo();

    if (document.querySelector(".hero-content")) actualizarHero();
}

function aplicarTraducciones(lang) {
    const elementos = document.querySelectorAll('[data-lang]');
    elementos.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (traducciones[lang] && traducciones[lang][key]) {
            if (el.tagName === 'INPUT' && (el.type === 'submit' || el.type === 'button')) {
                el.value = traducciones[lang][key];
            } else {
                el.textContent = traducciones[lang][key];
            }
        }

    });

    const elementosPlaceholder = document.querySelectorAll('[data-lang-placeholder]');

    elementosPlaceholder.forEach(el => {
        const key = el.getAttribute('data-lang-placeholder');
        if (traducciones[lang] && traducciones[lang][key]) {
            el.placeholder = traducciones[lang][key];
        }
    });

    const menuItems = document.querySelectorAll('.menu-header-footer a');
    const textosMenu = traducciones[lang];
    if (menuItems.length >= 7) {
         if(menuItems[1] && !menuItems[1].hasAttribute('data-lang')) menuItems[1].textContent = textosMenu.nav_packs;
         if(menuItems[2] && !menuItems[2].hasAttribute('data-lang')) menuItems[2].textContent = textosMenu.nav_forum;
         if(menuItems[3] && !menuItems[3].hasAttribute('data-lang')) menuItems[3].textContent = textosMenu.nav_articles;
         if(menuItems[4] && !menuItems[4].hasAttribute('data-lang')) menuItems[4].textContent = textosMenu.nav_faq;
         if(menuItems[5] && !menuItems[5].hasAttribute('data-lang')) menuItems[5].textContent = textosMenu.nav_corners;
         if(menuItems[6] && !menuItems[6].hasAttribute('data-lang')) menuItems[6].textContent = textosMenu.nav_about;
    }
}

function actualizarHeaderSesion() {
    const panelUsuario = document.getElementById("panel-usuario-nav");
    const usuarioActivo = sessionStorage.getItem("usuarioActivo");
    const idiomaActual = localStorage.getItem('idioma') || 'es';
    const textos = traducciones[idiomaActual];

    const selectorHTML = `
        <select id="selector-idioma" class="selector-idioma" style="margin-right: 15px;">
            <option value="es" ${idiomaActual === 'es' ? 'selected' : ''}>Español</option>
            <option value="en" ${idiomaActual === 'en' ? 'selected' : ''}>English</option>
        </select>
    `;
    if (panelUsuario && usuarioActivo) {
        const datosUsuario = JSON.parse(localStorage.getItem("user_" + usuarioActivo));
        if (datosUsuario) {
            const imagenPerfil = datosUsuario.avatar || "images/foto_perfil.png";
            panelUsuario.innerHTML = `
                ${selectorHTML}
                <div class="info-usuario-nav" style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-weight: 600; color: #003049;">${datosUsuario.usuario}</span>
                    <img src="${imagenPerfil}" alt="Perfil" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 2px solid #FFB703;">
                    <button onclick="cerrarSesion()" style="background:none; border:none; color: #d00000; cursor: pointer; font-size: 0.8rem; font-weight: bold;">${textos.nav_logout}</button>
                </div>
            `;
        }
    } else if (panelUsuario) {
        panelUsuario.innerHTML = `
            ${selectorHTML}
            <a href="login.html" data-lang="nav_login">${textos.nav_login}</a>
        `;
    }

    const nuevoSelector = document.getElementById('selector-idioma');
    if(nuevoSelector) {
        nuevoSelector.addEventListener('change', (e) => cambiarIdioma(e.target.value));
    }
}

function cerrarSesion() {
    const lang = localStorage.getItem('idioma') || 'es';
    const msg = lang === 'es' ? "¿Seguro que quieres cerrar sesión?" : "Are you sure you want to logout?";
    if (confirm(msg)) {
        sessionStorage.removeItem("usuarioActivo");
        localStorage.removeItem("sesionRecordada");
        window.location.href = "index.html";
    }
}

const dbPacksHome = [
    {
        id: "hungria",
        titulo: { es: "Europa Imperial", en: "Imperial Europe" },
        precio: "950€",
        imagen: "images/budapest.jpg",
        detalles: { es: ["8 días / 7 noches", "Tren alta velocidad", "Hoteles 4* céntricos"], en: ["8 days / 7 nights", "High-speed train", "Central 4* Hotels"] }
    },
    {
        id: "italia",
        titulo: { es: "Renacimiento Italiano", en: "Italian Renaissance" },
        precio: "1.120€",
        imagen: "images/roma.jpg",
        detalles: { es: ["9 días / 8 noches", "Bed & Breakfast", "Museos Vaticanos"], en: ["9 days / 8 nights", "Bed & Breakfast", "Vatican Museums"] }
    },
    {
        id: "japon",
        titulo: { es: "Magia Asiática", en: "Asian Magic" },
        precio: "2.400€",
        imagen: "images/kioto.jpg",
        detalles: { es: ["15 días / 14 noches", "Vuelos multidestino", "Ryokan en Kioto"], en: ["15 days / 14 nights", "Multidestination flights", "Ryokan in Kyoto"] }
    },
    {
        id: "peru",
        titulo: { es: "Aventura Andina", en: "Andean Adventure" },
        precio: "1.850€",
        imagen: "images/cuzco.jpg",
        detalles: { es: ["11 días / 10 noches", "Vuelos incluidos", "Machu Picchu"], en: ["11 days / 10 nights", "Flights included", "Machu Picchu"] }
    },
    {
        id: "kenia",
        titulo: { es: "Safari en Kenia", en: "Safari in Kenya" },
        precio: "2.150€",
        imagen: "images/safari.webp",
        detalles: { es: ["10 días / 9 noches", "Rutas en 4x4 privado", "Camping de lujo"], en: ["10 days / 9 nights", "Private 4x4 routes", "Luxury Camping"] }
    }
];

function cargarPacksHome() {
    const contenedor = document.getElementById("contenedor-packs-home");
    if (!contenedor) return;

    const lang = localStorage.getItem('idioma') || 'es';
    const textoBtn = lang === 'es' ? 'Comprar' : 'Buy Now';
    const textoDesde = lang === 'es' ? 'Desde' : 'From';
    let htmlContent = "";
    dbPacksHome.forEach(pack => {
        const titulo = pack.titulo[lang] || pack.titulo.es;
        const detalles = pack.detalles[lang] || pack.detalles.es;
        let listaDetalles = "";
        detalles.forEach(detalle => {
            listaDetalles += `<li>${detalle}</li>`;
        });
        htmlContent += `
            <div class="tarjeta-pack">
                <div class="imagen-pack">
                    <img src="${pack.imagen}" alt="${titulo}">
                    <span class="etiqueta-precio">${textoDesde} ${pack.precio}</span>
                </div>
                <div class="contenido-pack">
                    <h3>${titulo}</h3>
                    <ul>${listaDetalles}</ul>
                    <a href="compra.html?id=${pack.id}" class="btn-comprar">${textoBtn}</a>
                </div>
            </div>
        `;
    });
    contenedor.innerHTML = htmlContent;
}

function actualizarHero() {
    const usuarioActivo = sessionStorage.getItem("usuarioActivo");
    const lang = localStorage.getItem('idioma') || 'es';
    const heroTitle = document.querySelector(".hero-content h1");
    const heroDesc = document.querySelector(".hero-content p");

    if (usuarioActivo && heroTitle) {
        const datosUsuario = JSON.parse(localStorage.getItem("user_" + usuarioActivo));
        if (datosUsuario) {
            if(lang === 'es') {
                heroTitle.textContent = "¡Hola de nuevo, " + datosUsuario.nombrePila + "!";
                heroDesc.textContent = "El mundo sigue esperándote. ¿Cuál es tu próximo destino?";
            } else {
                heroTitle.textContent = "Welcome back, " + datosUsuario.nombrePila + "!";
                heroDesc.textContent = "The world is waiting. What is your next destination?";
            }
        }
    }
}

function carrusel() {
    const track = document.getElementById("track-articulos");
    const botonIzq = document.getElementById("boton_izq_articulos");
    const botonDer = document.getElementById("boton_der_articulos");

    if (!track || !botonIzq || !botonDer) return;
    if (!window.datosArticulos) return;

    try {
        const lang = localStorage.getItem('idioma') || 'es';
        const articulosCarrusel = window.datosArticulos;
        let htmlContent = "";

        articulosCarrusel.forEach(art => {
            let titulo = art.titulo;
            let desc = art.descripcion;

            if (typeof art.titulo === 'object') {
                titulo = art.titulo[lang] || art.titulo.es;
                desc = art.descripcion[lang] || art.descripcion.es;
            }

            htmlContent += `
                <a href="articulos.html?id=${art.id}&from=home" style="text-decoration:none; display:block; height:100%;">
                    <div class="tarjeta-articulo">
                        <div class="articulo-img"><img src="${art.imagen}" alt="${titulo}"></div>
                        <div class="articulo-info"><h4>${titulo}</h4><p>${desc}</p></div>
                    </div>
                </a>`;
        });
        track.innerHTML = htmlContent;

        function obtenerAncho() {
            const enlace = track.querySelector('a');
            return enlace ? enlace.offsetWidth + 30 : 300;
        }
        botonDer.addEventListener("click", () => { track.scrollBy({ left: obtenerAncho(), behavior: 'smooth' }); });
        botonIzq.addEventListener("click", () => { track.scrollBy({ left: -obtenerAncho(), behavior: 'smooth' }); });

    } catch (error) {
        console.error("Error carrusel:", error);
    }
}

function resaltarMenuActivo() {
    const path = window.location.pathname;
    const paginaActual = path.split("/").pop() || "index.html";
    const enlaces = document.querySelectorAll('.menu-header-footer a, .idioma-login a');

    enlaces.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && (href === paginaActual || href.endsWith("/" + paginaActual))) {
            if (!link.classList.contains('logo-nav')) {
                link.classList.add('active');
            }
        }
    });
}