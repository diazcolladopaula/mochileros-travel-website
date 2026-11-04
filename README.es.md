# Mochileros por el Mundo

[🇬🇧 English](README.md) · 🇪🇸 Español

Sitio web estático para una agencia de viajes ficticia con blog y comunidad integrados. Está hecho con HTML5, CSS3 y JavaScript puro (sin frameworks ni backend) y se desarrolló como proyecto en grupo (cuatro estudiantes) para la asignatura de Interfaces de Usuario de la universidad.

![Página de inicio](docs/screenshots/home.png)

## Funcionalidades

- **Catálogo de viajes con filtrado en tiempo real** por país, categoría de estrellas y tipo de viaje. Los filtros están en un panel lateral fijo en escritorio y en un menú desplegable en móvil.
- **Flujo de compra guiado**: se elige un pack y se rellena un formulario de pago que valida email, número de tarjeta, caducidad y CVV antes de simular la compra.
- **Foro comunitario** con hilos en acordeón, respuestas, nuevos temas y borrado de los mensajes propios.
- **Blog** con listado de artículos y vista de detalle cargada dinámicamente.
- **Galería "Otros rincones"** con contador de "me gusta" por destino, con fotos de [Unsplash](https://unsplash.com), unas guardadas en local y el resto cargadas desde su CDN.
- **Registro e inicio de sesión** con validación del formato de email, requisitos de contraseña (longitud, mayúscula, número, carácter especial), detección de usuarios duplicados y sesión recordada opcional.
- **Interfaz bilingüe (ES/EN)** a partir de un diccionario central de traducciones en `main.js` y atributos `data-lang`.
- **Persistencia en el navegador**: usuarios, sesión, hilos del foro, votos y compras se guardan en `localStorage` / `sessionStorage`.
- **Diseño adaptable** desde escritorio hasta móviles pequeños.

| Packs y filtros | Compra |
| --- | --- |
| ![Packs](docs/screenshots/packs.png) | ![Compra](docs/screenshots/checkout.png) |

## Estructura

```
src/
├── *.html      10 páginas: home, packs, compra, foro, artículos,
│               otros rincones, FAQ, nosotros, login, registro
├── scripts/    Un JS por página, más main.js con el código compartido
│               (idioma, sesión, carrusel, menú activo)
├── styles/     Una hoja de estilos por página, más los estilos globales
└── images/
docs/
└── screenshots/
```

## Ejecución en local

No hace falta compilar nada. Basta con servir la carpeta `src/` con cualquier servidor HTTP estático:

```bash
cd src
python3 -m http.server 8000
# abrir http://localhost:8000/
```

## Notas técnicas

- El contenido (packs, artículos, FAQ, hilos del foro, destinos) está en objetos JavaScript con campos `es` / `en`, y las páginas se generan a partir de ellos. Al cambiar de idioma se vuelve a pintar el contenido dinámico sin recargar.
- Todos los formularios validan en cliente y muestran errores específicos por campo en el idioma activo.

## Limitaciones

Es un prototipo de front-end. La autenticación ocurre por completo en el navegador: usuarios y contraseñas se guardan sin cifrar en `localStorage` y los pagos son simulados. No está pensado para producción, que requeriría un backend real y una gestión adecuada de credenciales.

## Créditos

Las fotos de destinos de la galería "Otros rincones" proceden de [Unsplash](https://unsplash.com) y se usan bajo la [licencia de Unsplash](https://unsplash.com/license).
