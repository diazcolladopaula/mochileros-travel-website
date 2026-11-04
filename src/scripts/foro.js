// Forum: seed threads (es/en) plus rendering, replies and deletion of own messages.
const datosInicialesForo = [
    {
        "id": 1,
        "titulo": {
            "es": "¿Es seguro viajar a Egipto por libre en 2025?",
            "en": "Is it safe to travel to Egypt independently in 2025?"
        },
        "autor": "ViajeroCurioso",
        "fecha": "Hace 20 min",
        "respuestas": 2,
        "vistas": 342,
        "categoria": {
            "es": "África",
            "en": "Africa"
        },
        "mensajes": [
            {
                "usuario": "Mochila_Trotamundos",
                "texto": {
                    "es": "Yo acabo de volver y es totalmente seguro, aunque recomiendo Uber para moverte por El Cairo.",
                    "en": "I just got back and it's totally safe, though I recommend using Uber to get around Cairo."
                }
            },
            {
                "usuario": "Ana_Guides",
                "texto": {
                    "es": "Coincido. Solo ten cuidado con los vendedores en las pirámides, son muy insistentes. Di 'La Shukran' (No gracias) y sigue andando.",
                    "en": "Agreed. Just be careful with the vendors at the pyramids, they are very pushy. Say 'La shukran' (no thank you) and keep walking."
                }
            }
        ]
    },
    {
        "id": 2,
        "titulo": {
            "es": "Busco compañeros para ruta por la Patagonia en Diciembre",
            "en": "Looking for travel buddies for a Patagonia route in December"
        },
        "autor": "Marta_Trails",
        "fecha": "Hace 2 horas",
        "respuestas": 1,
        "vistas": 120,
        "categoria": {
            "es": "Compañeros",
            "en": "Travel buddies"
        },
        "mensajes": [
            {
                "usuario": "David_Hiker",
                "texto": {
                    "es": "¡Hola Marta! Yo estaré por allí del 10 al 25. ¿Qué ruta tienes pensada? Me interesa la W en Torres del Paine.",
                    "en": "Hi Marta! I'll be there from the 10th to the 25th. What route do you have in mind? I'm interested in the W Trek in Torres del Paine."
                }
            }
        ]
    },
    {
        "id": 3,
        "titulo": {
            "es": "Consejos para mochila de 40L (sin facturar en Ryanair)",
            "en": "Tips for a 40L backpack (no checked bag on Ryanair)"
        },
        "autor": "LowCostKing",
        "fecha": "Hace 5 horas",
        "respuestas": 3,
        "vistas": 1500,
        "categoria": {
            "es": "Equipaje",
            "en": "Luggage"
        },
        "mensajes": [
            {
                "usuario": "PackLight",
                "texto": {
                    "es": "La clave son los cubos de compresión. Te cabrá el doble de ropa.",
                    "en": "The key is compression cubes. You'll fit twice as many clothes."
                }
            },
            {
                "usuario": "ViajeroCurioso",
                "texto": {
                    "es": "Yo uso la Osprey Farpoint 40 y nunca he tenido problemas en cabina, entra justa pero entra.",
                    "en": "I use the Osprey Farpoint 40 and have never had problems in the cabin, it's a tight fit but it works."
                }
            },
            {
                "usuario": "Sara_Fly",
                "texto": {
                    "es": "Ojo con los líquidos, últimamente están muy estrictos en Barajas. Todo en bolsa transparente de 1L.",
                    "en": "Watch out for liquids, they've been very strict lately at Barajas. Everything in a 1L clear bag."
                }
            }
        ]
    },
    {
        "id": 4,
        "titulo": {
            "es": "Mi experiencia con el visado de Vietnam online (E-Visa)",
            "en": "My experience with the Vietnam e-visa"
        },
        "autor": "AnaTrotamundos",
        "fecha": "Ayer",
        "respuestas": 2,
        "vistas": 89,
        "categoria": {
            "es": "Visados",
            "en": "Visas"
        },
        "mensajes": [
            {
                "usuario": "VietnamFan",
                "texto": {
                    "es": "A mí me tardó 3 días laborables exactos. Cuidado con poner bien el nombre completo o te la deniegan.",
                    "en": "Mine took exactly 3 working days. Make sure you enter your full name correctly or they'll reject it."
                }
            },
            {
                "usuario": "Carlos_Wanderlust",
                "texto": {
                    "es": "Recordad imprimirla en papel, a veces en la frontera no aceptan enseñarla en el móvil.",
                    "en": "Remember to print it on paper, sometimes at the border they won't accept it on your phone."
                }
            }
        ]
    },
    {
        "id": 5,
        "titulo": {
            "es": "Presupuesto real para 15 días en Japón",
            "en": "Real budget for 15 days in Japan"
        },
        "autor": "OtakuViajero",
        "fecha": "Ayer",
        "respuestas": 2,
        "vistas": 890,
        "categoria": {
            "es": "Asia",
            "en": "Asia"
        },
        "mensajes": [
            {
                "usuario": "JapanLover",
                "texto": {
                    "es": "Calcula unos 2000€ con vuelos si vas a hostels y comes en conbinis (7-Eleven, Lawson...).",
                    "en": "Count on around €2,000 including flights if you stay in hostels and eat at konbini (7-Eleven, Lawson...)."
                }
            },
            {
                "usuario": "SushiMaster",
                "texto": {
                    "es": "El JR Pass ha subido mucho de precio este año, usa la calculadora de Hyperdia para ver si te compensa o mejor comprar billetes sueltos.",
                    "en": "The JR Pass has gone up a lot in price this year; use the Hyperdia calculator to see if it's worth it or if single tickets are better."
                }
            }
        ]
    },
    {
        "id": 6,
        "titulo": {
            "es": "Recomendación de seguro médico con deportes de riesgo",
            "en": "Travel insurance recommendation for adventure sports"
        },
        "autor": "Climber88",
        "fecha": "Hace 2 días",
        "respuestas": 1,
        "vistas": 405,
        "categoria": {
            "es": "Seguros",
            "en": "Insurance"
        },
        "mensajes": [
            {
                "usuario": "SafetyFirst",
                "texto": {
                    "es": "IATI Mochilero te cubre trekking hasta 5400 metros y rescate en helicóptero. Es el que yo uso para Nepal.",
                    "en": "IATI Mochilero covers trekking up to 5,400 metres and helicopter rescue. It's the one I use for Nepal."
                }
            }
        ]
    },
    {
        "id": 7,
        "titulo": {
            "es": "Primera vez viajando sola a la India: Consejos de seguridad",
            "en": "First time traveling solo to India: safety tips"
        },
        "autor": "LauraSoloTravel",
        "fecha": "Hace 2 días",
        "respuestas": 2,
        "vistas": 1200,
        "categoria": {
            "es": "Viajar Sola",
            "en": "Solo Travel"
        },
        "mensajes": [
            {
                "usuario": "IndiaExpert",
                "texto": {
                    "es": "Viste de forma conservadora (hombros y rodillas cubiertos) y evita salir sola muy tarde por zonas no turísticas.",
                    "en": "Dress conservatively (shoulders and knees covered) and avoid going out alone late at night in non-touristy areas."
                }
            },
            {
                "usuario": "MariaViajera",
                "texto": {
                    "es": "Compra una tarjeta SIM local nada más llegar al aeropuerto, es vital tener internet para pedir Uber/Ola y ver mapas.",
                    "en": "Buy a local SIM card as soon as you arrive at the airport. Having internet to order Uber/Ola and use maps is vital."
                }
            }
        ]
    },
    {
        "id": 8,
        "titulo": {
            "es": "¿Tarjeta Revolut o Wise para pagar en el extranjero?",
            "en": "Revolut or Wise card for paying abroad?"
        },
        "autor": "EconomistaNómada",
        "fecha": "Hace 3 días",
        "respuestas": 3,
        "vistas": 2300,
        "categoria": {
            "es": "Dinero",
            "en": "Money"
        },
        "mensajes": [
            {
                "usuario": "FinanzasViajeras",
                "texto": {
                    "es": "Yo llevo las dos por si acaso una falla. Revolut para pagar con tarjeta y Wise para transferencias grandes.",
                    "en": "I carry both in case one fails. Revolut for card payments and Wise for large transfers."
                }
            },
            {
                "usuario": "N26Fan",
                "texto": {
                    "es": "No olvidéis N26, a mí en Europa me funciona mejor que Revolut.",
                    "en": "Don't forget N26, it works better for me than Revolut in Europe."
                }
            },
            {
                "usuario": "EconomistaNómada",
                "texto": {
                    "es": "Gracias! Me haré la Revolut estándar para empezar.",
                    "en": "Thanks! I'll get the standard Revolut to start with."
                }
            }
        ]
    },
    {
        "id": 9,
        "titulo": {
            "es": "Ruta por las islas de Tailandia: ¿Krabi o Koh Samui?",
            "en": "Thai islands route: Krabi or Koh Samui?"
        },
        "autor": "BeachLover",
        "fecha": "Hace 4 días",
        "respuestas": 2,
        "vistas": 650,
        "categoria": {
            "es": "Asia",
            "en": "Asia"
        },
        "mensajes": [
            {
                "usuario": "ThaiAddict",
                "texto": {
                    "es": "Depende de la época. En verano europeo llueve menos en el Golfo (Samui/Tao). En invierno mejor Krabi/Phuket.",
                    "en": "Depends on the season. In the European summer it rains less in the Gulf (Samui/Tao). In winter, Krabi/Phuket is better."
                }
            },
            {
                "usuario": "DiverBlue",
                "texto": {
                    "es": "Si te gusta bucear, vete directo a Koh Tao (cerca de Samui).",
                    "en": "If you like diving, go straight to Koh Tao (near Samui)."
                }
            }
        ]
    },
    {
        "id": 10,
        "titulo": {
            "es": "Mejores ciudades para trabajar en remoto en Europa",
            "en": "Best cities to work remotely in Europe"
        },
        "autor": "LaptopLifestyle",
        "fecha": "Hace 1 semana",
        "respuestas": 2,
        "vistas": 980,
        "categoria": {
            "es": "Nómadas Digitales",
            "en": "Digital Nomads"
        },
        "mensajes": [
            {
                "usuario": "DigitalNomad_ES",
                "texto": {
                    "es": "Lisboa está genial pero se ha puesto carísima. Prueba Las Palmas de Gran Canaria, hay muchísima comunidad.",
                    "en": "Lisbon is great but it has become very expensive. Try Las Palmas de Gran Canaria, there's a huge community."
                }
            },
            {
                "usuario": "CoderTravel",
                "texto": {
                    "es": "Bansko en Bulgaria es muy barato y está lleno de coworkings.",
                    "en": "Bansko in Bulgaria is very cheap and full of coworking spaces."
                }
            }
        ]
    },
    {
        "id": 11,
        "titulo": {
            "es": "¡Ayuda! Me han perdido la maleta en Barajas",
            "en": "Help! They lost my suitcase at Barajas"
        },
        "autor": "Desesperado99",
        "fecha": "Hace 1 semana",
        "respuestas": 1,
        "vistas": 210,
        "categoria": {
            "es": "Problemas",
            "en": "Problems"
        },
        "mensajes": [
            {
                "usuario": "AeroHelp",
                "texto": {
                    "es": "Tienes que ir al mostrador de la aerolínea ANTES de salir de la zona de equipajes y pedir el PIR (Parte de Irregularidad). Sin eso no podrás reclamar.",
                    "en": "You have to go to the airline desk BEFORE leaving the baggage area and ask for the PIR (Property Irregularity Report). Without it you won't be able to claim."
                }
            }
        ]
    },
    {
        "id": 12,
        "titulo": {
            "es": "¿Alguien ha hecho el Transiberiano recientemente?",
            "en": "Has anyone done the Trans-Siberian recently?"
        },
        "autor": "TrenesYMas",
        "fecha": "Hace 2 semanas",
        "respuestas": 1,
        "vistas": 150,
        "categoria": {
            "es": "Europa",
            "en": "Europe"
        },
        "mensajes": [
            {
                "usuario": "RusExpert",
                "texto": {
                    "es": "Ahora mismo está muy complicado por la situación política y los visados. Mejor mira el Interrail por los Balcanes si quieres aventura en tren.",
                    "en": "Right now it's very complicated because of the political situation and visas. Look at Interrail through the Balkans if you want a train adventure."
                }
            }
        ]
    },
    {
        "id": 13,
        "titulo": {
            "es": "Guía definitiva para comprar entradas a Machu Picchu",
            "en": "Ultimate guide to buying Machu Picchu tickets"
        },
        "autor": "IncaFan",
        "fecha": "Hace 2 semanas",
        "respuestas": 2,
        "vistas": 3300,
        "categoria": {
            "es": "América",
            "en": "Americas"
        },
        "mensajes": [
            {
                "usuario": "PerúLover",
                "texto": {
                    "es": "Compradlas con al menos 3 meses de antelación en la web oficial del gobierno. Se agotan volando.",
                    "en": "Buy them at least 3 months in advance on the official government website. They sell out fast."
                }
            },
            {
                "usuario": "ClimberPerú",
                "texto": {
                    "es": "Y si queréis subir al Huayna Picchu, 5 meses antes mínimo.",
                    "en": "And if you want to climb Huayna Picchu, at least 5 months ahead."
                }
            }
        ]
    },
    {
        "id": 14,
        "titulo": {
            "es": "Cuidado con la estafa del taxi en Estambul",
            "en": "Beware of the taxi scam in Istanbul"
        },
        "autor": "AlertasViajeras",
        "fecha": "Hace 3 semanas",
        "respuestas": 2,
        "vistas": 5600,
        "categoria": {
            "es": "Seguridad",
            "en": "Safety"
        },
        "mensajes": [
            {
                "usuario": "TurquiaFan",
                "texto": {
                    "es": "Totalmente. A mí me intentaron cambiar los billetes diciendo que les di uno falso. Usad siempre Uber o BiTaksi.",
                    "en": "Totally. They tried to swap my banknotes by claiming I gave them a fake one. Always use Uber or BiTaksi."
                }
            },
            {
                "usuario": "IstanbulLocal",
                "texto": {
                    "es": "O el tranvía, que funciona de maravilla y evita el tráfico horrible.",
                    "en": "Or the tram, which works great and avoids the awful traffic."
                }
            }
        ]
    },
    {
        "id": 15,
        "titulo": {
            "es": "¿Qué cámara lleváis? ¿Reflex, Mirrorless o solo móvil?",
            "en": "What camera do you carry? DSLR, mirrorless or just a phone?"
        },
        "autor": "FotoMochila",
        "fecha": "Hace 1 mes",
        "respuestas": 3,
        "vistas": 4100,
        "categoria": {
            "es": "Fotografía",
            "en": "Photography"
        },
        "mensajes": [
            {
                "usuario": "ProShooter",
                "texto": {
                    "es": "Yo me pasé a Mirrorless (Sony Alpha) por el peso. La espalda lo agradece.",
                    "en": "I switched to mirrorless (Sony Alpha) because of the weight. My back thanks me."
                }
            },
            {
                "usuario": "LightTraveler",
                "texto": {
                    "es": "Sinceramente, con un iPhone 15 Pro o un Pixel 8 vas sobrado para Instagram.",
                    "en": "Honestly, with an iPhone 15 Pro or a Pixel 8 you're more than set for Instagram."
                }
            },
            {
                "usuario": "FilmIsNotDead",
                "texto": {
                    "es": "Yo sigo llevando mi analógica de 35mm. La magia es distinta.",
                    "en": "I still carry my 35mm film camera. The magic is different."
                }
            }
        ]
    },
    {
        "id": 16,
        "titulo": {
            "es": "Interrail Global Pass: ¿Merece la pena el pase de 1 mes?",
            "en": "Interrail Global Pass: is the 1-month pass worth it?"
        },
        "autor": "EuroTrip2025",
        "fecha": "Hace 1 mes",
        "respuestas": 2,
        "vistas": 2100,
        "categoria": {
            "es": "Europa",
            "en": "Europe"
        },
        "mensajes": [
            {
                "usuario": "TrainMaster",
                "texto": {
                    "es": "Depende de los países. En Francia y España pagas mucho suplemento de reserva. En Alemania y Suiza es una gozada.",
                    "en": "Depends on the countries. In France and Spain you pay a lot in reservation fees. In Germany and Switzerland it's a joy."
                }
            },
            {
                "usuario": "Backpacker_Joe",
                "texto": {
                    "es": "Yo lo usé el verano pasado y ahorré mucho, sobre todo en los trenes nocturnos.",
                    "en": "I used it last summer and saved a lot, especially on night trains."
                }
            }
        ]
    },
    {
        "id": 17,
        "titulo": {
            "es": "Vacunas necesarias para el Amazonas brasileño",
            "en": "Vaccines needed for the Brazilian Amazon"
        },
        "autor": "JungleBoy",
        "fecha": "Hace 1 mes",
        "respuestas": 1,
        "vistas": 600,
        "categoria": {
            "es": "Salud",
            "en": "Health"
        },
        "mensajes": [
            {
                "usuario": "DrViajero",
                "texto": {
                    "es": "Fiebre Amarilla es obligatoria (lleva el carnet internacional). También recomendada Tifoidea y Hepatitis A.",
                    "en": "Yellow fever is mandatory (bring the international certificate). Typhoid and Hepatitis A are also recommended."
                }
            }
        ]
    },
    {
        "id": 18,
        "titulo": {
            "es": "Hostels con mejor ambiente en Budapest",
            "en": "Hostels with the best atmosphere in Budapest"
        },
        "autor": "PartyTraveler",
        "fecha": "Hace 2 meses",
        "respuestas": 2,
        "vistas": 3400,
        "categoria": {
            "es": "Alojamiento",
            "en": "Accommodation"
        },
        "mensajes": [
            {
                "usuario": "BudaParty",
                "texto": {
                    "es": "El Retox si quieres fiesta salvaje. El Vitae si quieres fiesta pero poder dormir algo.",
                    "en": "Retox if you want a wild party. Vitae if you want to party but still get some sleep."
                }
            },
            {
                "usuario": "ChillGuy",
                "texto": {
                    "es": "Yo prefiero el Wombats, es más limpio y tipo hotel, aunque menos loco.",
                    "en": "I prefer Wombats, it's cleaner and more hotel-like, though less crazy."
                }
            }
        ]
    }
];
document.addEventListener('DOMContentLoaded', () => {
    inicializarForo();
    renderizarForo();
    configurarBotonNuevoTema();
});

const textosForo = {
    es: {
        sinRespuestas: "No hay respuestas todavía. ¡Sé el primero!",
        dice: "dice:",
        responderComo: "Responder como",
        placeholder: "Escribe tu respuesta...",
        enviar: "Enviar",
        loginParaResponder: "🔒 Inicia sesión para responder",
        eliminar: "Eliminar respuesta",
        por: "Por",
        respuestas: "Respuestas",
        vistas: "Vistas",
        vacio: "El mensaje no puede estar vacío",
        publicada: "Respuesta publicada.",
        confirmEliminar: "¿Seguro que quieres eliminar tu respuesta? Esta acción no se puede deshacer.",
        tituloTema: "Título del tema:",
        categoria: "Categoría:",
        categoriaDefecto: "General",
        ahora: "Ahora mismo",
        necesitasLogin: "Necesitas iniciar sesión para participar. ¿Ir al login?"
    },
    en: {
        sinRespuestas: "No replies yet. Be the first!",
        dice: "says:",
        responderComo: "Reply as",
        placeholder: "Write your reply...",
        enviar: "Send",
        loginParaResponder: "🔒 Log in to reply",
        eliminar: "Delete reply",
        por: "By",
        respuestas: "Replies",
        vistas: "Views",
        vacio: "The message cannot be empty",
        publicada: "Reply posted.",
        confirmEliminar: "Are you sure you want to delete your reply? This cannot be undone.",
        tituloTema: "Topic title:",
        categoria: "Category:",
        categoriaDefecto: "General",
        ahora: "Just now",
        necesitasLogin: "You need to log in to take part. Go to the login page?"
    }
};

function idiomaForo() {
    return localStorage.getItem('idioma') === 'en' ? 'en' : 'es';
}

function textoForo(valor) {
    if (valor && typeof valor === 'object') return valor[idiomaForo()] || valor.es;
    return valor;
}

function fechaForo(fecha) {
    if (idiomaForo() === 'es') return fecha;
    const unidades = { min: 'min', hora: 'hour', horas: 'hours', 'día': 'day', 'días': 'days', semana: 'week', semanas: 'weeks', mes: 'month', meses: 'months' };
    if (fecha === 'Ayer') return 'Yesterday';
    if (fecha === 'Ahora mismo') return textosForo.en.ahora;
    const m = fecha.match(/^Hace (\d+) (\S+)$/);
    if (m && unidades[m[2]]) {
        const n = m[1], u = unidades[m[2]];
        return n + ' ' + (u === 'min' ? 'min' : u.replace(/s$/, '') + (n === '1' ? '' : 's')) + ' ago';
    }
    return fecha;
}

function inicializarForo() {
    const datosGuardados = localStorage.getItem('foroData');

    if (!datosGuardados || JSON.parse(datosGuardados).length < datosInicialesForo.length || localStorage.getItem('foroVersion') !== '2') {
        localStorage.setItem('foroVersion', '2');
        localStorage.setItem('foroData', JSON.stringify(datosInicialesForo));
    }
}

function renderizarForo() {
    const contenedor = document.getElementById('lista-temas-dinamica');
    if (!contenedor) return;
    const temas = JSON.parse(localStorage.getItem('foroData'));
    const usuarioActivo = sessionStorage.getItem("usuarioActivo");
    let datosUsuario = null;
    if (usuarioActivo) {
        datosUsuario = JSON.parse(localStorage.getItem("user_" + usuarioActivo));
    }

    let htmlContent = '';

    const tx = textosForo[idiomaForo()];
    temas.slice().reverse().forEach((tema) => {
        const indexReal = temas.indexOf(tema);

        let htmlMensajes = '';
        if (tema.mensajes && tema.mensajes.length > 0) {
            tema.mensajes.forEach((msg, indexMsg) => {

                const esPropio = (datosUsuario && msg.usuario === datosUsuario.usuario);
                const estiloPropio = esPropio
                    ? 'border-left: 4px solid #0077B6; background-color: #F0F8FF;'
                    : '';

                let botonEliminar = '';
                if (esPropio) {
                    botonEliminar = `
                        <button onclick="eliminarRespuesta(${indexReal}, ${indexMsg})"
                                style="float: right; background: none; border: none; color: #d00000; cursor: pointer; font-size: 0.9rem; margin-top: -5px;"
                                title="${tx.eliminar}">
                            🗑️
                        </button>
                    `;
                }

                htmlMensajes += `
                    <div class="mensaje-foro" style="${estiloPropio}">
                        ${botonEliminar}
                        <span class="mensaje-usuario">${msg.usuario} ${tx.dice}</span>
                        <p class="mensaje-texto">${textoForo(msg.texto)}</p>
                        <div style="clear:both"></div> </div>
                `;
            });
        } else {
            htmlMensajes = `<div class="sin-respuestas">${tx.sinRespuestas}</div>`;
        }

        let areaRespuesta = '';
        if (usuarioActivo && datosUsuario) {
            areaRespuesta = `
                <div class="zona-respuesta-activa" style="margin-top:15px; border-top:1px dashed #ccc; padding-top:10px;">
                    <p style="font-size:0.9rem; margin-bottom:5px;">${tx.responderComo} <strong>${datosUsuario.usuario}</strong>:</p>
                    <textarea id="texto-resp-${indexReal}" rows="2" style="width:100%; padding:10px; border-radius:8px; border:1px solid #ccc; margin-bottom:10px;" placeholder="${tx.placeholder}"></textarea>
                    <button onclick="enviarRespuesta(${indexReal})" style="background-color:#FFB703; color:#003049; padding:8px 20px; border:none; border-radius:20px; cursor:pointer; font-weight:bold;">${tx.enviar}</button>
                </div>
            `;
        } else {
            areaRespuesta = `
                <div class="zona-respuesta" style="text-align:center; padding:15px;">
                    <button onclick="irALogin()" style="background:none; border:2px solid #0077B6; color:#0077B6; padding:8px 20px; border-radius:20px; cursor:pointer; font-weight:bold;">${tx.loginParaResponder}</button>
                </div>
            `;
        }

        htmlContent += `
            <div class="tema-item" id="tema-card-${indexReal}">
                <div class="tema-cabecera" onclick="toggleAcordeon(${indexReal})">
                    <div class="tema-info-principal">
                        <span class="tema-categoria">${textoForo(tema.categoria)}</span>
                        <h3 class="tema-titulo">${textoForo(tema.titulo)}</h3>
                        <div class="tema-meta">${tx.por} <span class="tema-autor">${tema.autor}</span> • ${fechaForo(tema.fecha)}</div>
                    </div>
                    <div class="tema-stats">
                        <div class="stat-box"><span class="stat-numero">${tema.mensajes ? tema.mensajes.length : 0}</span><span class="stat-label">${tx.respuestas}</span></div>
                        <div class="stat-box"><span class="stat-numero">${tema.vistas}</span><span class="stat-label">${tx.vistas}</span></div>
                    </div>
                </div>

                <div class="contenedor-respuestas" id="detalle-tema-${indexReal}" style="display:none; padding:20px; background:#f9f9f9; border-top:1px solid #eee;">
                    ${htmlMensajes}
                    ${areaRespuesta}
                </div>
            </div>
        `;
    });

    contenedor.innerHTML = htmlContent;
}

function toggleAcordeon(index) {
    const detalle = document.getElementById(`detalle-tema-${index}`);
    const card = document.getElementById(`tema-card-${index}`);
    if (detalle.style.display === 'none' || detalle.style.display === '') {
        detalle.style.display = 'block';
        card.style.borderColor = '#0077B6';
    } else {
        detalle.style.display = 'none';
        card.style.borderColor = '#E0E0E0';
    }
}
function enviarRespuesta(indexTema) {
    const texto = document.getElementById(`texto-resp-${indexTema}`).value;
    if (texto.trim() === "") { alert(textosForo[idiomaForo()].vacio); return; }
    const usuarioActivo = sessionStorage.getItem("usuarioActivo");
    const datosUsuario = JSON.parse(localStorage.getItem("user_" + usuarioActivo));
    const temas = JSON.parse(localStorage.getItem('foroData'));
    if (!temas[indexTema].mensajes) temas[indexTema].mensajes = [];
    temas[indexTema].mensajes.push({
        usuario: datosUsuario.usuario,
        texto: texto
    });

    localStorage.setItem('foroData', JSON.stringify(temas));

    alert(textosForo[idiomaForo()].publicada);
    renderizarForo();

    setTimeout(() => toggleAcordeon(indexTema), 50);
}

function eliminarRespuesta(indexTema, indexMsg) {
    if (!confirm(textosForo[idiomaForo()].confirmEliminar)) return;

    const temas = JSON.parse(localStorage.getItem('foroData'));

    temas[indexTema].mensajes.splice(indexMsg, 1);

    localStorage.setItem('foroData', JSON.stringify(temas));

    renderizarForo();

    setTimeout(() => toggleAcordeon(indexTema), 50);
}
function configurarBotonNuevoTema() {
    const btn = document.getElementById('btn-crear-tema');
    btn.onclick = () => {
        if (sessionStorage.getItem("usuarioActivo")) {
            const titulo = prompt(textosForo[idiomaForo()].tituloTema);
            if (!titulo) return;
            const cat = prompt(textosForo[idiomaForo()].categoria, textosForo[idiomaForo()].categoriaDefecto);
            const temas = JSON.parse(localStorage.getItem('foroData'));
            const usuario = JSON.parse(localStorage.getItem("user_" + sessionStorage.getItem("usuarioActivo")));
            temas.push({
                id: Date.now(), titulo: titulo, autor: usuario.usuario, fecha: "Ahora mismo", categoria: cat, vistas: 0, mensajes: []
            });
            localStorage.setItem('foroData', JSON.stringify(temas));
            renderizarForo();
        } else {
            irALogin();
        }
    };
}

function irALogin() {
    if (confirm(textosForo[idiomaForo()].necesitasLogin)) window.location.href = "login.html";
}