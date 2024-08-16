<template>
  <div class="home">
    <!-- Barra de Navegación Superior -->
    <header class="navbar">
      <div class="logo-container">
        <img class="logo" src="../assets/image/Inverst-logo.png" alt="Logo" />
        <span class="system-name">Inverst S.A.S</span>
      </div>
      <div class="user-info">
        <div class="profile-menu">
          <img class="user-photo" src="../assets/image/Inverst-logo.png" alt="Foto del Funcionario" />
          <div class="dropdown">
            <span @click="toggleDropdown">Perfil ▼</span>
            <div v-if="dropdownOpen" class="dropdown-content">
              <span @click="goToProfile">Perfil</span>
              <span @click="goToSettings">Configuración</span>
              <span @click="logout">Cerrar sesión</span>
            </div>
          </div>
          <button @click="toggleNotifications" class="notification-btn">
            <i class="fas fa-bell"></i> <!-- Icono de campanita -->
            <span class="notification-count">{{ notifications.length }}</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Panel de Estado de Procesos -->
    <section class="status-panel">
      <div class="status-charts">
        <h2>Gráficos de Seguimiento</h2>
        <div class="chart">
          <p>Visualización de transacciones en progreso, completadas y pendientes</p>
        </div>
      </div>
      <!-- Mostrar tareas y alertas si showNotifications es true -->
      <div v-if="showNotifications" class="alerts-tasks">
        <h2>Alertas y Tareas Pendientes</h2>
        <ul>
          <li>Tarea 1</li>
          <li>Tarea 2</li>
          <li>Alerta importante</li>
        </ul>
      </div>
    </section>

    <!-- Accesos Directos -->
    <section class="shortcuts">
      <button @click="goToCentralization">Centralización de Información</button>
      <button @click="goToTracking">Seguimiento de Etapas</button>
      <button @click="goToOrganization">Organización Eficiente</button>
      <button @click="goToPurchases">Interacción con el Área de Compras</button>
      <button @click="goToReports">Análisis y Reportes</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      dropdownOpen: false,
      showNotifications: false,
      notifications: [
        { type: 'tarea', message: 'Tarea 1' },
        { type: 'tarea', message: 'Tarea 2' },
        { type: 'alerta', message: 'Alerta importante' },
      ]
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    toggleNotifications() {
      this.showNotifications = !this.showNotifications;
    },
    goToProfile() {
      this.$router.push({ name: 'Profile' });
    },
    goToSettings() {
      this.$router.push({ name: 'Settings' });
    },
    logout() {
      this.$router.push({ name: 'UserLogin' });
    },
    goToCentralization() {
      this.$router.push({ name: 'Centralization' });
    },
    goToTracking() {
      this.$router.push({ name: 'Tracking' });
    },
    goToOrganization() {
      this.$router.push({ name: 'Organization' });
    },
    goToPurchases() {
      this.$router.push({ name: 'Purchases' });
    },
    goToReports() {
      this.$router.push({ name: 'Reports' });
    }
  }
};
</script>

<style scoped>
/* Estilos para la barra de navegación superior */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #2c3e50;
  color: #ecf0f1;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 60px;
  margin-right: 15px;
}

.system-name {
  font-size: 28px;
  font-weight: bold;
}

.user-info {
  display: flex;
  align-items: center;
}

.profile-menu {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.user-photo {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid #ecf0f1;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  position: absolute;
  top: 30px;
  right: 0;
  background-color: #34495e;
  border-radius: 5px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content span {
  display: block;
  padding: 10px;
  color: #ecf0f1;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 14px; /* Tamaño de fuente más pequeño */
}

.dropdown-content span:hover {
  background-color: #2980b9;
}

/* Estilos para el panel de estado de procesos */
.status-panel {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.status-charts,
.alerts-tasks {
  flex: 1;
  margin-right: 20px;
  padding: 20px;
  background-color: #ecf0f1;
  border-radius: 5px;
}

.alerts-tasks ul {
  list-style-type: none;
  padding: 0;
}

.alerts-tasks li {
  margin-bottom: 10px;
  font-weight: bold;
}

/* Estilos para los accesos directos */
.shortcuts {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.shortcuts button {
  flex: 1;
  margin: 0 5px;
  padding: 15px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.shortcuts button:hover {
  background-color: #2980b9;
}

/* Estilos para el botón de notificaciones */
.notification-btn {
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  margin-left: 20px;
  color: #ecf0f1;
  font-size: 24px;
}

.notification-btn .notification-count {
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
}
</style>
