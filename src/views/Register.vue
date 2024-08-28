<template>
    <section>
        <div class="contenedor">
            <form action="register.php" method="POST">
                <h2>Registro Inverst S.A.S</h2>
    
                <!-- Información de la Empresa -->               
                
                <div class="input-contenedor">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" id="email_empresa" name="email_empresa" required>
                    <label for="email_empresa">Correo</label>
                </div>

                <!-- Información del Representante -->
                <div class="input-contenedor">
                    <i class="fa-solid fa-user"></i>
                    <input type="text" id="Nombre" name="Nombre" required>
                    <label for="Nombre">Nombre</label>
                </div>
                <div class="input-contenedor">
                    <i class="fa-solid fa-list-ol"></i>
                    <input type="text" id="apellido" name="apellido" required>
                    <label for="apellido">Apellido</label>
                </div>
    
                <div class="input-contenedor">
                    <i class="fa-solid fa-phone"></i>
                    <input type="tel" id="telefono_empresa" name="telefono_empresa" 
                           pattern="\d{10}" title="Número de teléfono debe ser de 10 dígitos" 
                           inputmode="numeric" required>
                    <label for="telefono_empresa">Teléfono</label>
                </div>
    
                <!-- Información Adicional -->
                <div class="input-contenedor">
                    <i class="fa-solid fa-building"></i>
                    <input type="text" id="cargo" name="cargo" required>
                    <label for="cargo">Cargo</label>
                </div>
                
                <button type="submit">Registrar</button>
    
                <div class="registrar">
                    <p>¿Ya tienes una cuenta? <router-link to="/login">Inicia sesión</router-link></p>
                </div>
            </form>
        </div>
    </section>

</template>


<script>
    export default {
        name: "UserRegister",
    };
</script>

<style scoped>

        /* Estilo del contenedor de la sección principal */
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100vh;
        background: url(../assets/image/fondoregistro.jpeg) no-repeat center center;
        background-size: cover;
    }

    /* Estilo del contenedor del formulario */
    .contenedor {
        width: 100%;
        max-width: 450px; /* Ancho máximo aumentado */
        border: 1px solid #ddd; /* Borde más fino */
        border-radius: 15px; /* Bordes menos redondeados */
        backdrop-filter: blur(10px); /* Desenfoque más sutil */
        padding: 30px; /* Padding aumentado para mejor disposición */
        background: rgba(231, 228, 228, 0.9); /* Fondo más opaco */
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); /* Sombra más sutil */
    }

    /* Estilo del título dentro del contenedor */
    .contenedor h2 {
        font-size: 2.2rem; /* Tamaño de fuente aumentado */
        color: #333;
        text-align: center;
        margin-bottom: 20px; /* Espacio debajo del título */
        font-weight: 600;
    }

    /* Estilo del contenedor de los campos de entrada */
    .input-contenedor {
        position: relative;
        margin: 25px 0; /* Más espacio entre campos */
        width: 100%; /* Ocupa el 100% del contenedor */
    }

    /* Estilo de los campos de entrada */
    .input-contenedor input {
        width: 100%;
        height: 50px; /* Altura del campo aumentada */
        border: 2px solid #ddd; /* Borde más grueso y suave */
        border-radius: 12px; /* Bordes redondeados */
        padding: 0 20px; /* Espacio interno aumentado */
        font-size: 1.1rem; /* Tamaño de fuente aumentado */
        color: #333;
        outline: none;
        transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Transición para borde y sombra */
    }

    /* Estilo del campo cuando está enfocado */
    input:focus {
        border-color: #262626; /* Color de borde al enfocar */
        box-shadow: 0 0 8px rgba(255, 107, 107, 0.3); /* Sombra sutil al enfocar */
    }

    /* Estilo de las etiquetas de los campos de entrada */
    .input-contenedor label {   
        position: absolute;
        top: 50%;
        left: 20px; /* Ajuste para una mejor alineación */
        transform: translateY(-50%);
        color: #4e4e4e6c; /* Color de etiqueta más suave */
        font-size: 1.1rem; /* Tamaño de fuente aumentado */
        pointer-events: none;
        transition: top 0.3s ease, font-size 0.3s ease, opacity 0.3s ease; /* Transición para la etiqueta */
        font-weight: bold;
    }

    /* Estilo de la etiqueta cuando el campo está enfocado o tiene un valor válido */
    .input-contenedor input:focus ~ label,
    .input-contenedor input:valid ~ label {
        top: -20px; /* Mueve la etiqueta hacia arriba */
        left: 15px; /* Ajuste de la posición horizontal */
        font-size: 0.9rem; /* Tamaño de fuente reducido */
        opacity: 0.7; /* Opacidad reducida */
    }

    /* Estilo del icono dentro del contenedor del campo */
    .input-contenedor i {
        position: absolute;
        color: #94B1AC;
        font-size: 1rem; /* Tamaño de icono reducido */
        top: 50%;
        right: 15px; /* Ajuste de la posición horizontal */
        transform: translateY(-50%);
    }

    /* Estilo del botón */
    button {
        width: 100%;
        height: 55px; /* Altura del botón aumentada */
        border-radius: 30px; /* Bordes más redondeados */
        background: #ff6b6b;
        border: none;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        font-size: 1.1rem; /* Tamaño de fuente aumentado */
        transition: background 0.3s, transform 0.3s;
        margin-top: 20px; /* Espacio superior ajustado */
    }

    /* Estilo del botón cuando se pasa el ratón sobre él */
    button:hover {
        background: #ff4d4d;
        transform: scale(1.03); /* Escala del botón más sutil */
    }

    /* Estilo del texto de registro (enlace a inicio de sesión) */
    .registrar {
        font-size: 1rem; /* Tamaño de fuente aumentado */
        color: #333;
        text-align: center;
        margin-top: 20px; /* Espacio superior ajustado */
    }

    /* Estilo del enlace dentro del texto de registro */
    .registrar p a {
        text-decoration: none;  
        color: #ff6b6b;
        font-weight: bold;
        transition: color 0.3s;
    }

    /* Estilo del enlace cuando se pasa el ratón sobre él */
    .registrar p a:hover {
        color: #ff4d4d;
        text-decoration: underline;
    }


</style>
  