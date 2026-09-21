// ============================================================
// VIAJE ESPACIAL ROMÁNTICO
// ============================================================

const canvas = document.getElementById("space-canvas");
const ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let stars = [];
let shootingStars = [];
let particles = [];

const numStars = 300;

// ============================================================
// ESTRELLAS
// ============================================================

class Star {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 1.4 + 0.2;
        this.alpha = Math.random() * 0.8 + 0.2;
        this.speed = Math.random() * 0.15 + 0.03;
        this.twinkle = Math.random() * 0.03;
    }
    update() {
        this.y += this.speed;
        this.alpha += this.twinkle;
        if (this.alpha >= 1 || this.alpha <= 0.2) {
            this.twinkle *= -1;
        }
        if (this.y > height) {
            this.y = -5;
            this.x = Math.random() * width;
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
        ctx.fill();
    }
}

// Crear estrellas
for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
}

// ============================================================
// ESTRELLAS FUGACES
// ============================================================

class ShootingStar {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height * 0.5;
        this.length = Math.random() * 80 + 40;
        this.speed = Math.random() * 6 + 5;
        this.opacity = 0;
        this.active = false;
    }
    start() {
        this.reset();
        this.active = true;
        this.opacity = 1;
    }
    update() {
        if (!this.active) return;
        this.x -= this.speed;
        this.y += this.speed * 0.45;
        this.opacity -= 0.015;
        if (this.opacity <= 0 || this.x < -100 || this.y > height) {
            this.active = false;
        }
    }
    draw() {
        if (!this.active) return;
        const gradient = ctx.createLinearGradient(
            this.x,
            this.y,
            this.x + this.length,
            this.y - this.length * 0.45
        );
        gradient.addColorStop(0, `rgba(255,235,120,${this.opacity})`);
        gradient.addColorStop(1, "rgba(255,235,120,0)");
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
            this.x + this.length,
            this.y - this.length * 0.45
        );
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

for (let i = 0; i < 4; i++) {
    shootingStars.push(new ShootingStar());
}

// ============================================================
// PARTÍCULAS DORADAS
// ============================================================

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 0.3 + 0.1;
        this.opacity = Math.random() * 0.5;
    }
    update() {
        this.y -= this.speed;
        if (this.y < -10) {
            this.y = height + 10;
            this.x = Math.random() * width;
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,220,80,${this.opacity})`;
        ctx.fill();
    }
}

for (let i = 0; i < 30; i++) {
    particles.push(new Particle());
}

// ============================================================
// CORAZONES FLOTANTES
// ============================================================

let hearts = [];
const numHearts = 16;

function dibujarCorazon(x, y, tamano, color, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(tamano, tamano);
    ctx.beginPath();
    ctx.moveTo(0, 0.3);
    ctx.bezierCurveTo(0, 0, -0.5, 0, -0.5, 0.32);
    ctx.bezierCurveTo(-0.5, 0.62, 0, 0.68, 0, 1);
    ctx.bezierCurveTo(0, 0.68, 0.5, 0.62, 0.5, 0.32);
    ctx.bezierCurveTo(0.5, 0, 0, 0, 0, 0.3);
    ctx.closePath();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
}

class Heart {
    constructor() {
        this.reset(true);
        this.colores = [
            "rgba(255, 210, 90, TX)",
            "rgba(255, 160, 190, TX)",
            "rgba(255, 235, 190, TX)"
        ];
        this.color = this.colores[Math.floor(Math.random() * this.colores.length)];
    }
    reset(inicial = false) {
        this.x = Math.random() * width;
        this.y = inicial ? Math.random() * height : height + 20;
        this.size = Math.random() * 10 + 6;
        this.speed = Math.random() * 0.25 + 0.08;
        this.deriva = (Math.random() - 0.5) * 0.3;
        this.opacityBase = Math.random() * 0.35 + 0.15;
        this.fase = Math.random() * Math.PI * 2;
    }
    update() {
        this.y -= this.speed;
        this.x += this.deriva;
        this.fase += 0.02;
        if (this.y < -20) {
            this.reset();
        }
    }
    draw() {
        const alpha = this.opacityBase + Math.sin(this.fase) * 0.12;
        const color = this.color.replace("TX", Math.max(alpha, 0.05).toFixed(2));
        dibujarCorazon(this.x, this.y, this.size / 22, color, 1);
    }
}

for (let i = 0; i < numHearts; i++) {
    hearts.push(new Heart());
}

// ============================================================
// ANIMACIÓN DEL ESPACIO
// ============================================================

function animateSpace() {
    ctx.fillStyle = "rgba(3, 3, 14, 0.35)";
    ctx.fillRect(0, 0, width, height);
    stars.forEach(star => {
        star.update();
        star.draw();
    });
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    hearts.forEach(heart => {
        heart.update();
        heart.draw();
    });
    shootingStars.forEach(star => {
        star.update();
        star.draw();
    });
    requestAnimationFrame(animateSpace);
}

animateSpace();

// ============================================================
// ESTRELLA FUGAZ ALEATORIA
// ============================================================

setInterval(() => {
    const disponible = shootingStars.find(star => !star.active);
    if (disponible) {
        disponible.start();
    }
}, 4500);

// ============================================================
// REDIMENSIONAR
// ============================================================

window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

// ============================================================
// SECUENCIA ROMÁNTICA (VERSIÓN CON TIEMPOS MÁS LENTOS)
// ============================================================

if (typeof iniciarSecuencia !== "undefined" && iniciarSecuencia === true) {
    const escenaTexto = document.getElementById("escena-texto");
    const escenaDistancia = document.getElementById("escena-distancia");
    const escenaRamo = document.getElementById("escena-ramo");
    const escenaCarta = document.getElementById("escena-carta");
    const escenaFinal = document.getElementById("escena-final");
    const luna = document.getElementById("luna");
    const sobre = document.getElementById("sobre");

    const mostrar = elemento => {
        if (!elemento) return;
        elemento.classList.remove("oculto");
        setTimeout(() => {
            elemento.classList.add("visible");
        }, 80);
    };

    const ocultar = elemento => {
        if (!elemento) return;
        elemento.classList.remove("visible");
        elemento.classList.add("oculto");
    };

    // ============================================================
    // CONTADOR PARA EL REENCUENTRO
    // ============================================================
    const FECHA_REENCUENTRO = "2026-12-24";

    function actualizarContador() {
        const elemento = document.getElementById("contador-dias");
        if (!elemento) return;

        const hoy = new Date();
        const meta = new Date(FECHA_REENCUENTRO + "T00:00:00");
        const msPorDia = 1000 * 60 * 60 * 24;
        const diferencia = Math.ceil((meta - hoy) / msPorDia);

        if (isNaN(diferencia)) {
            elemento.textContent = "muy pocos días";
        } else if (diferencia > 1) {
            elemento.textContent = diferencia + " días";
        } else if (diferencia === 1) {
            elemento.textContent = "1 día";
        } else {
            elemento.textContent = "muy poco";
        }
    }

    // ESCENA 1 — mensaje de bienvenida (Dura ~10 segundos)
    setTimeout(() => { mostrar(escenaTexto); }, 1000);
    setTimeout(() => { ocultar(escenaTexto); }, 11000);

    // ESCENA 2 — la distancia que nos une (Dura ~12 segundos)
    setTimeout(() => { mostrar(escenaDistancia); }, 12500);
    setTimeout(() => { ocultar(escenaDistancia); }, 24500);

    // ESCENA 3 — el ramo (Dura ~12 segundos)
    setTimeout(() => { mostrar(escenaRamo); }, 26000);
    setTimeout(() => { ocultar(escenaRamo); }, 38000);

    // ESCENA 4 — la carta y el contador (Dura ~15 segundos)
    setTimeout(() => {
        mostrar(escenaCarta);
        actualizarContador();
        setTimeout(() => {
            if (sobre) sobre.classList.add("abierto");
        }, 1500);
    }, 39500);
    setTimeout(() => { ocultar(escenaCarta); }, 54500);

    // LUNA CRUZANDO EL CIELO
    setTimeout(() => {
        luna.classList.remove("oculto");
        setTimeout(() => {
            luna.classList.add("luna-moviendose");
        }, 100);
    }, 53000);

    // ESCENA FINAL — aparece de forma pausada al final
    setTimeout(() => { mostrar(escenaFinal); }, 65000);
}
// ============================================================
// CONTROL DE MÚSICA Y SECUENCIA TRAS INGRESAR LA CONTRASEÑA
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    const musica = document.getElementById("musica-fondo");

    // Verifica si la contraseña fue correcta
    if (typeof iniciarSecuencia !== "undefined" && iniciarSecuencia) {
        
        // 1. Iniciar la música de fondo
        if (musica) {
            musica.volume = 0.6; // Volumen al 60%

            const reproducir = () => {
                musica.play().then(() => {
                    // Si reproduce con éxito, quitamos los eventos de respaldo
                    document.removeEventListener("click", reproducir);
                    document.removeEventListener("touchstart", reproducir);
                }).catch(() => {
                    console.log("El navegador requiere un toque en la pantalla para iniciar audio.");
                });
            };

            // Intentar reproducir al cargar la sorpresa
            reproducir();

            // Respaldo por si el navegador bloquea el audio al recargar la página
            document.addEventListener("click", reproducir, { once: true });
            document.addEventListener("touchstart", reproducir, { once: true });
        }

        // 2. Iniciar la secuencia de escenas románticas
        if (typeof iniciarSecuenciaRomantica === "function") {
            iniciarSecuenciaRomantica();
        }
    }
});
