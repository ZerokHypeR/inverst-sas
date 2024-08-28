<template>
  <section>
    <div class="contenedor">
      <div class="formulario">
        <form action="login.php" method="POST">
          <h2>Iniciar Sesión</h2>
          <div class="input-contenedor">
            <i class="fa-solid fa-envelope"></i>
            <input type="email" name="email" required>
            <label>Email</label>
          </div>

          <div class="input-contenedor">
            <i class="fa-solid fa-lock"></i>
            <input type="password" name="password" required>
            <label>Password</label>
          </div>

          <div class="olvidar">
            <label for="#">
              <input type="checkbox" name="remember"> Recordar
              <a href="#">Olvidé La Contraseña</a>
            </label>
          </div>

          <button type="submit">Acceder</button>
        </form>

        <div class="registrar">
          <p>No Tengo Una Cuenta <router-link to="/register">Crear Una Cuenta</router-link></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "UserLogin",
};
</script>

<style scoped>


section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background: url(../assets/image/bg.jpg) no-repeat;
    background-position: center;
    background-size: cover;
}

.contenedor {
    position: relative;
    width: 400px;
    border: 2px solid rgb(250, 240, 240);
    border-radius: 20px;
    backdrop-filter: blur(15px);
    height: 480px; /* Aumenté la altura para mayor espacio */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: rgba(231, 228, 228, 0.726); /* Fondo gris sutil */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.contenedor h2 {
    font-size: 2.3rem;
    color: #82A39C;
    text-align: center;
    margin-bottom: 20px; /* Espacio debajo del título */
}

.input-contenedor {
    position: relative;
    margin: 20px 0;
    width: 300px;
    border-bottom: 2px solid #94B1AC;
}  

.input-contenedor label {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    color: #B5D3CF;
    font-size: 1rem;
    pointer-events: none;
    transition: top 0.3s ease;
    font-weight: bold;
}

input:focus ~ label,
input:valid ~ label {
    top: -5px;
}

.input-contenedor input {
    width: 100%;
    height: 50px;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0 0 5px;
    color: #94B1AC;
}

.input-contenedor i {
    position: absolute;
    color:#94B1AC;
    font-size: 1.6rem;
    top: 19px;
    right: 8px;
}

/* Mejora en la sección de Recordar y Olvidar Contraseña */
.olvidar {
    margin: 20px 0;
    color: #94B1AC;
    display: flex;
    justify-content: space-between;
    width: 300px;
}

.olvidar label {
    font-size: 0.9em;
    display: flex;
    align-items: center;
}

.olvidar input {
    margin-right: 5px;
}

.olvidar a {
    color: #94B1AC;
    text-decoration: none;
    font-size: 0.9em;
    transition: color 0.3s;
}

.olvidar a:hover {
    color: #ccc;
    text-decoration: underline;
}

/* Estilo del botón de Acceder */
button {
    width: 100%;
    height: 45px;
    border-radius: 40px;
    background-color:#94B1AC;
    border: none;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    font-size: 1rem;
    transition: opacity 0.4s;
    margin-top: 20px;
}

button:hover {
    opacity: 0.9;
}

/* Espaciado entre el botón y el enlace para crear una cuenta */
.registrar {
    font-size: 0.8rem;
    color: #94B1AC;
    text-align: center;
    margin-top: 20px; /* Ajuste del margen superior */
}

.registrar p a {
    text-decoration: none;
    color: #94B1AC;
    font-weight: bold;
    transition: color 0.3s;
}

.registrar p a:hover {
    color: #ccc;
    text-decoration: underline;
}


</style>
