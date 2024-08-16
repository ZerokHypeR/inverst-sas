<template>
  <div id="login">
    <img src="../assets/image/Inverst-logo.png" alt="Inverst Logo" class="logo"/>
    <form @submit.prevent="handleSubmit">
      <h2>Login</h2>

      <label for="username">Username</label>
      <input 
        type="text" 
        id="username" 
        v-model="username" 
        placeholder="Enter your username"
      />

      <label for="password">Password</label>
      <input 
        type="password" 
        id="password" 
        v-model="password" 
        placeholder="Enter your password"
      />

      <div class="links">
        <p @click="redirectToRegister">Registrarme</p>
        <p @click="redirectToForgotPassword">Olvidé Mi Contraseña</p>
      </div>

      <div>
        <input type="submit" class="btn-1" value="Iniciar">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      if (!this.username || !this.password) {
        alert('Por favor, complete todos los campos.');
        return;
      }
      // Lógica para iniciar sesión
    },
    redirectToRegister() {
      this.$router.push('/register');
    },
    redirectToForgotPassword() {
      this.$router.push('/forgot-password');
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica Neue', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(../assets/image/Inverst-logo.png);
  background-image: url(~@/assets/image/Inverst-logo.png');

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

#login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}



#login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  margin-bottom: 30px;
  width: 150px; /* Ajusta el tamaño según sea necesario */
}

form {
  padding: 50px;
  display: flex;
  flex-direction: column;
  width: 400px;
  box-shadow: 0 0 20px black;
  border-radius: 15px;
  background-color: #eeeeee;
}

h2 {
  text-align: center;
  font-size: 30px;
  text-transform: uppercase;
  color: #2e2e2e;
  margin-bottom: 25px;
}

label, p {
  font-size: 17px;
  color: #575757;
  margin-bottom: 10px;
}

input {
  padding: 17px 11px;
  border: 1px solid #00adef;
  border-radius: 25px;
  margin-bottom: 25px;
  background-color: #fafcfa;
  outline: none;
  color: #00adef;
  font-size: 16px;
}

.btn-1 {
  background-color: #00adef;
  font-size: 15px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
}

.btn-1:hover {
  background-color: #007cbf;
}

.links {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}

.links p {
  cursor: pointer;
  color: #00adef;
  text-decoration: underline;
}

@media (max-width: 991px) {
  body {
    padding: 30px;
  }

  form {
    width: 100%;
  }
}
</style>
