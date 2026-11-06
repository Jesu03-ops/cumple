// =================================
// PRIMERA PANTALLA: BIENVENIDA
// =================================

const botonSorpresa = document.getElementById("abrirSorpresa");
const bienvenida = document.querySelector(".bienvenida");
const album = document.getElementById("album");

botonSorpresa.addEventListener("click", function() {

    bienvenida.style.display = "none";
    album.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =================================
// SEGUNDA PANTALLA: ALBUM A CARTA
// =================================

const botonIrCarta = document.getElementById("irCarta");
const carta = document.getElementById("carta");

botonIrCarta.addEventListener("click", function() {

    album.style.display = "none";
    carta.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =================================
// TERCERA PANTALLA: ABRIR CARTA
// =================================

const botonCarta = document.getElementById("abrirCarta");
const contenidoCarta = document.getElementById("contenidoCarta");
const botonIrPastel = document.getElementById("irPastel");

botonCarta.addEventListener("click", function() {

    contenidoCarta.style.display = "block";

    // Reiniciar la animación
    contenidoCarta.style.animation = "none";
    contenidoCarta.offsetHeight;
    contenidoCarta.style.animation = "revelarCarta 1.5s ease forwards";

    botonCarta.style.display = "none";

    // Mostrar el botón del pastel después de abrir la carta
    botonIrPastel.style.display = "inline-block";

});


// =================================
// CREAR AUTOMATICAMENTE 20 VELITAS
// =================================

// CREAR 20 VELITAS DISTRIBUIDAS EN LOS TRES PISOS

const velasSuperior = document.getElementById("velas-superior");
const velasMedio = document.getElementById("velas-medio");
const velasInferior = document.getElementById("velas-inferior");

function crearVelitas(contenedor, cantidad) {

    for (let i = 1; i <= cantidad; i++) {

        const vela = document.createElement("div");
        vela.classList.add("vela");

        const llama = document.createElement("div");
        llama.classList.add("llama");

        vela.appendChild(llama);
        contenedor.appendChild(vela);

    }

}

crearVelitas(velasSuperior, 4);
crearVelitas(velasMedio, 6);
crearVelitas(velasInferior, 10);


// =================================
// CUARTA PANTALLA: CARTA AL PASTEL
// =================================

const cartaCumpleanos = document.getElementById("carta");
const pantallaPastel = document.getElementById("pastel");

botonIrPastel.addEventListener("click", function() {

    cartaCumpleanos.style.transition = "opacity 0.6s ease";
    cartaCumpleanos.style.opacity = "0";

    setTimeout(function() {

        cartaCumpleanos.style.display = "none";

        pantallaPastel.style.opacity = "0";
        pantallaPastel.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        setTimeout(function() {
            pantallaPastel.style.transition = "opacity 0.8s ease";
            pantallaPastel.style.opacity = "1";
        }, 50);

    }, 600);

});
const botonApagar = document.getElementById("apagarVelas");

const musicaCumpleanos = document.getElementById("musicaCumpleanos");

const botonMusica = document.getElementById("botonMusica");

const botonCelebrar = document.getElementById("celebrar");

const mensajeCelebracion = document.getElementById("mensajeCelebracion");

const contenedorConfeti = document.getElementById("contenedorConfeti");

const coloresConfeti = [
    "#f3a6c1",
    "#eacb9b",
    "#ffffff",
    "#d978a0",
    "#f8d5a5",
    "#d9b8e8"
];

botonApagar.addEventListener("click", function() {

    // Apagar las 20 velitas
  const llamitas = document.querySelectorAll(".llama");

llamitas.forEach(function(llama, indice) {

    // Detener la animación de la llama
    llama.style.animation = "none";

    setTimeout(function() {
        llama.style.transition = "opacity 0.5s ease";
        llama.style.opacity = "0";
    }, indice * 40);

});
    
   musicaCumpleanos.currentTime = 0;

musicaCumpleanos.play().catch(function(error) {
    console.log("No se pudo reproducir la música:", error);
});

    // Ocultar el botón de apagar
    botonApagar.style.display = "none";

    // Mostrar el mensaje de cumpleaños
    mensajeCelebracion.style.display = "block";
    
    botonMusica.style.display = "inline-block";
    
    botonCelebrar.style.display = "inline-block";

    // Crear el confeti
    for (let i = 0; i < 100; i++) {

        const papel = document.createElement("div");
        papel.classList.add("confeti");

        const color = coloresConfeti[
            Math.floor(Math.random() * coloresConfeti.length)
        ];

        papel.style.backgroundColor = color;
        papel.style.left = Math.random() * 100 + "%";
        papel.style.animationDuration = (3 + Math.random() * 3) + "s";
        papel.style.animationDelay = Math.random() * 2 + "s";

        contenedorConfeti.appendChild(papel);
    }

});
// =================================
// BOTON PARA PAUSAR Y REANUDAR MUSICA
// =================================

botonMusica.addEventListener("click", function() {

    if (musicaCumpleanos.paused) {

        musicaCumpleanos.play();

        botonMusica.textContent = "Pausar música ⏸️";

    } else {

        musicaCumpleanos.pause();

        botonMusica.textContent = "Reanudar música ▶️";

    }

});
// =================================
// QUINTA PANTALLA: JUEGO ATRAPA CORAZONES
// =================================

const zonaJuego = document.getElementById("zonaJuego");
const puntosJuego = document.getElementById("puntos");
const tiempoJuego = document.getElementById("tiempo");
const botonIniciarJuego = document.getElementById("iniciarJuego");

let puntos = 0;
let tiempo = 20;
let intervaloTiempo;
let intervaloCorazones;
let juegoActivo = false;

// COMENZAR EL JUEGO

botonIniciarJuego.addEventListener("click", function() {

    if (juegoActivo) return;

    puntos = 0;
    tiempo = 20;
    juegoActivo = true;

    puntosJuego.textContent = puntos;
    tiempoJuego.textContent = tiempo;

    zonaJuego.innerHTML = "";

    botonIniciarJuego.style.display = "none";

    // Crear corazones constantemente

    intervaloCorazones = setInterval(function() {

        crearCorazon();

    }, 700);

    // Contador regresivo

    intervaloTiempo = setInterval(function() {

        tiempo--;

        tiempoJuego.textContent = tiempo;

        if (tiempo <= 0) {
            finalizarJuego(false);
        }

    }, 1000);

});

// CREAR CORAZONES

function crearCorazon() {

    if (!juegoActivo) return;

    const corazon = document.createElement("button");

    corazon.textContent = "❤️";
    corazon.classList.add("corazon-juego");

    corazon.style.position = "absolute";
    corazon.style.left = Math.random() * 85 + "%";
    corazon.style.top = Math.random() * 75 + "%";
    corazon.style.fontSize = "30px";
    corazon.style.background = "transparent";
    corazon.style.border = "none";
    corazon.style.cursor = "pointer";
    corazon.style.padding = "5px";

    // Atrapar el corazón

    corazon.addEventListener("click", function() {

        if (!juegoActivo) return;

        puntos++;

        puntosJuego.textContent = puntos;

        corazon.remove();

        // Ganar al conseguir 20 puntos

        if (puntos >= 20) {
            finalizarJuego(true);
        }

    });

    zonaJuego.appendChild(corazon);

    // Desaparecer después de un tiempo

    setTimeout(function() {
        corazon.remove();
    }, 2000);

}

// FINALIZAR EL JUEGO

function finalizarJuego(gano) {

    juegoActivo = false;

    clearInterval(intervaloTiempo);
    clearInterval(intervaloCorazones);

    zonaJuego.innerHTML = "";

    if (gano) {

    mostrarVictoria();

} else {

    zonaJuego.innerHTML =
        '<h2 style="color:#d978a0; margin-top:120px;">¡Se acabó el tiempo! 💗</h2>';

    botonIniciarJuego.textContent = "Intentar nuevamente 🔄";

}

    botonIniciarJuego.style.display = "inline-block";

}
// =================================
// MOSTRAR PANTALLA DE VICTORIA
// =================================

function mostrarVictoria() {
    document.getElementById("juego").style.display = "none";

    const pantallaVictoria = document.getElementById("victoria");

    pantallaVictoria.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
// =================================
// PASAR DEL PASTEL AL JUEGO
// =================================

botonCelebrar.addEventListener("click", function() {

    pantallaPastel.style.display = "none";

    const pantallaJuego = document.getElementById("juego");

    pantallaJuego.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// =================================
// CONECTAR PANTALLA DE VICTORIA Y FINAL
// =================================

const botonUltimaSorpresa = document.getElementById("irPantallaFinal");
const botonVolverInicio = document.getElementById("volverInicio");

botonUltimaSorpresa.addEventListener("click", function() {
    document.getElementById("victoria").style.display = "none";

    document.getElementById("pantallaFinal").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
botonVolverInicio.addEventListener("click", function() {

    document.getElementById("pantallaFinal").style.display = "none";

    document.querySelector(".bienvenida").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// =================================
// ABRIR EL REGALO
// =================================

const botonAbrirRegalo = document.getElementById("abrirRegalo");
const regalo = document.getElementById("regalo");
const mensajeRegalo = document.getElementById("mensajeRegalo");

botonAbrirRegalo.addEventListener("click", function() {

    regalo.classList.add("abierto");
    
    // Crear corazones y destellos
const simbolos = ["❤️", "💗", "✨", "💕", "✦", "🌸"];

for (let i = 0; i < 18; i++) {

    const destello = document.createElement("span");

    destello.classList.add("destello-regalo");

    destello.textContent =
        simbolos[Math.floor(Math.random() * simbolos.length)];

    destello.style.setProperty(
        "--movimiento-x",
        (Math.random() * 300 - 150) + "px"
    );

    destello.style.left = (Math.random() * 80 + 10) + "%";

    regalo.appendChild(destello);

    setTimeout(function() {
        destello.remove();
    }, 1800);
}

    botonAbrirRegalo.style.display = "none";

    setTimeout(function() {
        mensajeRegalo.style.display = "block";
    }, 1000);

});