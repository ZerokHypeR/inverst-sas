<template>
  <div class="auth-container">
    <div class="auth-box">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="email">Correo Electrónico</label>
          <input
            type="email"
            v-model="email"
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </div>
        <div class="input-group">   
          <label for="password">Contraseña</label>
          <input
            type="password"
            v-model="password"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        <button type="submit" class="auth-button">Iniciar Sesión</button>
        <p class="toggle-text" @click="$emit('toggle-form')">
          ¿No tienes una cuenta? Regístrate
        </p>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'UserLogin',
  setup() {
    const email = ref('');
    const password = ref('');

    const handleLogin = () => {
      // Lógica para iniciar sesión
      console.log('Iniciar sesión:', { email: email.value, password: password.value });
    };

    return {
      email,
      password,
      handleLogin
    };
  }
};
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
}

.auth-box {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.auth-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.auth-button:hover {
  background-color: #0056b3;
}

.toggle-text {
  text-align: center;
  margin-top: 15px;
  color: #007bff;
  cursor: pointer;
}

.toggle-text:hover {
  text-decoration: underline;
}
</style>
