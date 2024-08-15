<template>
  <div>
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
    <p>¿No tienes una cuenta? <router-link to="/register">Crea una aquí</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async handleLogin() {
      // Aquí iría la lógica de autenticación
      // Por ejemplo, llamar a una API para verificar las credenciales
      // Si no está registrado, redirigir a la página de registro
      const isRegistered = await this.checkUserCredentials(this.email, this.password);
      if (!isRegistered) {
        this.$router.push('/register');
      }
    },
    async checkUserCredentials(email, password) {
      // Simula una verificación de usuario (deberías implementar esto con una API real)
      return email === 'user@example.com' && password === 'password';
    }
  }
};
</script>
