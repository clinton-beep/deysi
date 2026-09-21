<?php
$passwordCorrecta = "03012026";
$acceso = false;
$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (isset($_POST['password']) && $_POST['password'] === $passwordCorrecta) {
        $acceso = true;

    } elseif (isset($_POST['finalizar'])) {
        $acceso = false;

    } else {
        $error = "Esa fecha no abre este pequeño detalle 💛";
    }
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Para Deysi 💛 | Flores Amarillas</title>

    <link rel="stylesheet" href="estilo.css">

    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">
</head>

<body>

    <!-- FONDO ESPACIAL -->
    <canvas id="space-canvas"></canvas>

    <!-- Luna -->
    <div id="luna" class="oculto">
        <div class="mar mar-1"></div>
        <div class="mar mar-2"></div>
        <div class="crater crater1"></div>
        <div class="crater crater2"></div>
        <div class="crater crater3"></div>
        <div class="crater crater4"></div>
        <div class="crater crater5"></div>
    </div>

    <!-- Sistema solar romántico de fondo -->
    <div id="sistema-solar">
        <div class="sol"></div>
        <div class="orbita orbita-1"><div class="planeta planeta-1"></div></div>
        <div class="orbita orbita-2"><div class="planeta planeta-2"></div></div>
        <div class="orbita orbita-3"><div class="planeta planeta-anillo"></div></div>
        <div class="orbita orbita-4"><div class="planeta planeta-3"></div></div>
    </div>

    <!-- Brillos -->
    <div class="glow glow-1"></div>
    <div class="glow glow-2"></div>

    <div class="contenedor-principal">

        <?php if (!$acceso): ?>

            <!-- ================= LOGIN ================= -->

            <div id="login-screen" class="login-card escena visible">

                <div class="corazon-login">💛</div>

                <div class="mini-linea"></div>

                <p class="pequeno">Tengo algo preparado para ti, Deysi</p>

                <h1 class="titulo-login">
                    Un detalle<br>
                    <span>para ti</span>
                </h1>

                <p class="subtitulo-login">
                    La distancia no cabe en un mensaje,<br>
                    pero quise intentarlo de todas formas.
                </p>

                <?php if ($error): ?>
                    <p class="error">
                        <?php echo htmlspecialchars($error); ?>
                    </p>
                <?php endif; ?>

                <form action="index.php" method="POST" class="formulario">

                    <div class="input-wrapper">
                        <span>♡</span>

                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="Nuestra fecha especial"
                            autofocus
                        >
                    </div>

                    <button type="submit">
                        <span>Abrir mi sorpresa</span>
                        <b>→</b>
                    </button>

                </form>

                <p class="fecha-especial">
                    21 · 09 · 2026
                </p>

            </div>

            <script>
                const iniciarSecuencia = false;
            </script>


        <?php else: ?>

            <script>
                const iniciarSecuencia = true;
            </script>

            <!-- ================= ESCENA 1 ================= -->

            <div id="escena-texto" class="escena escena-romantica oculto">

                <div class="estrella-decorativa">✦</div>

                <p class="frase-pequena">
                    Para Deysi, mi persona favorita
                </p>

                <h2 class="texto-romantico">
                    Feliz día de las<br>
                    <span>flores amarillas</span>
                </h2>

                <div class="separador">
                    <i></i>
                    <span>✦</span>
                    <i></i>
                </div>

                <p class="frase-secundaria">
                    Que este día tenga un poquito<br>
                    de la luz que tú le das a mi vida.
                </p>

            </div>


            <!-- ================= ESCENA 2: LA DISTANCIA ================= -->

            <div id="escena-distancia" class="escena escena-distancia oculto">

                <p class="frase-pequena">Entre tú y yo</p>

                <div class="mapa-distancia">
                    <div class="punto punto-yo">
                        <span class="punto-nucleo"></span>
                        <span class="punto-anillo"></span>
                        <label>yo</label>
                    </div>

                    <div class="linea-conexion">
                        <div class="pulso"></div>
                        <div class="corazon-viajero">💛</div>
                    </div>

                    <div class="punto punto-tu">
                        <span class="punto-nucleo"></span>
                        <span class="punto-anillo"></span>
                        <label>tú</label>
                    </div>
                </div>

                <h2 class="texto-distancia">
                    Ninguna distancia<br>
                    <span>alcanza para separarnos corazon</span>
                </h2>

                <p class="frase-secundaria">
                    No importa cuántos kilómetros haya en medio,<br>
                    todos los días elijo llegar hasta ti.
                </p>

            </div>


            <!-- ================= ESCENA 3 ================= -->

            <div id="escena-ramo" class="escena escena-ramo oculto">

                <div class="mensaje-ramo">
                    <span>Hoy te regalo</span>
                    <strong>un pedacito de primavera mi amor</strong>
                </div>

                <div class="bouquet">

                    <!-- DESTELLOS -->
                    <div class="sparkle sparkle-1">✦</div>
                    <div class="sparkle sparkle-2">✧</div>
                    <div class="sparkle sparkle-3">✦</div>
                    <div class="sparkle sparkle-4">·</div>

                    <!-- TALLOS -->
                    <div class="tallo tallo-1"></div>
                    <div class="tallo tallo-2"></div>
                    <div class="tallo tallo-3"></div>
                    <div class="tallo tallo-4"></div>
                    <div class="tallo tallo-5"></div>
                    <div class="tallo tallo-6"></div>
                    <div class="tallo tallo-7"></div>

                    <!-- HOJAS -->
                    <div class="hoja hoja-1"></div>
                    <div class="hoja hoja-2"></div>
                    <div class="hoja hoja-3"></div>
                    <div class="hoja hoja-4"></div>
                    <div class="hoja hoja-5"></div>
                    <div class="hoja hoja-6"></div>

                    <!-- GIRASOLES -->
                    <div class="flor girasol g1">
                        <span class="petalo p1"></span>
                        <span class="petalo p2"></span>
                        <span class="petalo p3"></span>
                        <span class="petalo p4"></span>
                        <span class="petalo p5"></span>
                        <span class="petalo p6"></span>
                        <span class="petalo p7"></span>
                        <span class="petalo p8"></span>
                        <span class="centro"></span>
                    </div>

                    <div class="flor girasol g2">
                        <span class="petalo p1"></span>
                        <span class="petalo p2"></span>
                        <span class="petalo p3"></span>
                        <span class="petalo p4"></span>
                        <span class="petalo p5"></span>
                        <span class="petalo p6"></span>
                        <span class="petalo p7"></span>
                        <span class="petalo p8"></span>
                        <span class="centro"></span>
                    </div>

                    <div class="flor girasol g3">
                        <span class="petalo p1"></span>
                        <span class="petalo p2"></span>
                        <span class="petalo p3"></span>
                        <span class="petalo p4"></span>
                        <span class="petalo p5"></span>
                        <span class="petalo p6"></span>
                        <span class="petalo p7"></span>
                        <span class="petalo p8"></span>
                        <span class="centro"></span>
                    </div>

                    <!-- ROSAS -->
                    <div class="rosa r1">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div class="rosa r2">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div class="rosa r3">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <!-- MARGARITAS -->
                    <div class="margarita m1">
                        <i></i><i></i><i></i><i></i>
                        <i></i><i></i><i></i><i></i>
                        <b></b>
                    </div>

                    <div class="margarita m2">
                        <i></i><i></i><i></i><i></i>
                        <i></i><i></i><i></i><i></i>
                        <b></b>
                    </div>

                    <!-- ENVOLTORIO -->
                    <div class="envoltura"></div>

                    <div class="papel-lazo"></div>

                    <div class="cinta cinta-izq"></div>
                    <div class="cinta cinta-der"></div>

                    <div class="lazo">
                        <span></span>
                        <span></span>
                        <b></b>
                    </div>

                </div>

                <p class="dedicatoria">
                    Porque algunas personas llegan a nuestra vida<br>
                    y hacen que todo florezca un poquito más. TE AMO DEYSI💛
                </p>

            </div>


            <!-- ================= ESCENA 4: LA CARTA ================= -->

            <div id="escena-carta" class="escena escena-carta oculto">
                <br><br>
                <p class="frase-pequena">Una cartita para ti</p>

                <div id="sobre" class="sobre">
                    <div class="sobre-cuerpo"></div>
                    <div class="sobre-carta">
                        <p class="carta-saludo">Para mi kalapatia Deysi,</p>
                        <p class="carta-texto">
                            Sé que hoy no puedo tomarte de la mano<br>
                            ni regalarte flores de verdad, pero quería<br>
                            que sintieras lo mismo desde donde estoy y que
                            no olvide lo mucho que me importas.
                        </p>
                        <p class="carta-texto">
                            Gracias por sostener esta relación a pesar<br>
                            de la distancia, por las videollamadas,<br>
                            los mensajes de buenos días y por seguir<br>
                            eligiéndome aunque no sea fácil.
                        </p>
                        <p class="carta-firma">Te amo, hoy y desde lejos.</p>
                    </div>
                    <div class="sobre-solapa"></div>
                    <div class="sobre-sello">💛</div>
                </div>

            </div>


            <!-- ================= ESCENA 5 ================= -->

            <div id="escena-final" class="escena escena-final oculto">

                <div class="corazones-final">
                    <span>♥</span>
                    <span>♥</span>
                    <span>♥</span>
                </div>

                <div class="ositos">
                    🧸 <span>💛</span> 🧸
                </div>

                <h3 class="texto-final">
                    Siempre juntos,<br>la distancia pasara.
                </h3>

                <p class="mensaje-final">
                    Y si esta noche miras las estrellas,<br>
                    recuerda que las vemos los dos, al mismo tiempo,<br>
                    solo que desde lugares distintos mi amor. ✨
                </p>

                <div class="firma">
                    Con todo mi cariño,<br>
                    <span>de Jeferson para Deysi</span>
                </div>

                <form action="login.php" method="POST">

                    <input
                        type="hidden"
                        name="finalizar"
                        value="1"
                    >

                    <button
                        type="submit"
                        class="btn-finalizar"
                    >
                        Volver al inicio
                    </button>

                </form>

            </div>

        <?php endif; ?>

    </div>

    <script src="index.js"></script>

</body>
</html>
