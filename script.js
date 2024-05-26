
//carrousels

var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    }
});

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        520: {
            slidesPerView: 2
        },
        950: {
            slidesPerView: 3
        }
    }
});

//carrito

const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const elementos2 = document.getElementById('lista-2');
const elementos3 = document.getElementById('lista-3');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();
function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    elementos2.addEventListener('click', comprarElemento);
    elementos3.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);

    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}


function comprarElemento(e) {

    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);

    }
}

function leerDatosElemento(elemento) {

    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoElemento);
}


function insertarCarrito(elemento) {

    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
    <img src = "${elemento.imagen}" width =70>
    </td>

    <td>

    ${elemento.titulo}
    </td>

    <td>
    ${elemento.precio}

    </td>
    <td>
    <a href ="#" class="borrar" data-id="${elemento.id}">X</a>
    `;

    lista.appendChild(row);

}


function eliminarElemento(e) {

    e.preventDefault();
    let elemento,
        elementoId;

    if (e.target.classList.contains('borrar')) {

        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}



//Fin de carrrito

//alerta de agregado al carrito

function mostrarAlerta() {
    var overlay = document.getElementById('overlay');
    var alertBox = document.getElementById('alertBox');
    overlay.style.display = 'block';
    alertBox.style.display = 'block';
    document.getElementById('alertContent').innerHTML = 'Producto agregado al carrito correctamente';
}


//FIN alerta de agregado al carrito

//alerta de agregado al carrito CERRAR

function cerrarAlerta() {
    var overlay = document.getElementById('overlay');
    var alertBox = document.getElementById('alertBox');
    overlay.style.display = 'none';
    alertBox.style.display = 'none';

}

//FIN alerta de agregado al carrito CERRAR

//typewritter



const app = document.getElementById('typewriter');


const typewriter = new Typewriter(app, {
    loop: true,
    delay: 50
});

typewriter
    .typeString("¡¡BIENVENIDO!!")
    .pauseFor(100)
    .start();

//fIN TYPEWRITER



//Cambia el titulo de la pagina cuando sale

let docTile = document.tittle;

window.addEventListener("blur", () => {
    document.title = "Vuelve ☹ "
})
window.addEventListener("focus", () => {
    document.title = "Pagina principal";
})
