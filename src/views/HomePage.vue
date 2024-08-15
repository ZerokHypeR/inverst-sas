<template>
  <div class="home-container">
    <!-- Barra de Navegación Superior -->
    <nav class="navbar">
      <div class="navbar-left">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
        <h1>Inverst S.A.S</h1>
      </div>
      <div class="navbar-right">
        <div class="notifications">
          <i class="fas fa-bell"></i> <!-- Icono de notificaciones -->
        </div>
        <div class="user-menu">
          <span>Perfil</span>
          <span>Configuración</span>
          <span @click="logout">Cerrar sesión</span>
        </div>
      </div>
    </nav>

    <!-- Panel de Estado de Procesos -->
    <div class="process-status-panel">
      <h2>Estado de Procesos</h2>
      <div class="status-charts">
        <div class="chart">
          <h3>Transacciones en Progreso</h3>
          <!-- Inserta un gráfico aquí -->
        </div>
        <div class="chart">
          <h3>Transacciones Completadas</h3>
        </div>
        <div class="chart">
          <h3>Transacciones Pendientes</h3>
        </div>
      </div>
    </div>

    <!-- Accesos Directos -->
    <div class="shortcuts">
      <h2>Accesos Directos</h2>
      <div class="shortcuts-grid">
        <div class="shortcut" @click="navigateTo('centralization')">
          Centralización de Información
        </div>
        <div class="shortcut" @click="navigateTo('stages')">
          Seguimiento de Etapas
        </div>
        <div class="shortcut" @click="navigateTo('organization')">
          Organización Eficiente
        </div>
        <div class="shortcut" @click="navigateTo('purchasing')">
          Interacción con el Área de Compras
        </div>
        <div class="shortcut" @click="navigateTo('analysis')">
          Análisis y Reportes
        </div>
      </div>
    </div>

    <!-- Alertas y Tareas Pendientes -->
    <div class="alerts-tasks">
      <h2>Alertas y Tareas Pendientes</h2>
      <ul>
        <li>Tarea Urgente 1</li>
        <li>Recordatorio Importante</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const logout = () => {
  localStorage.removeItem('authToken');
  window.location.href = '/';
};

const navigateTo = (section) => {
  // Lógica para navegar a las secciones específicas
  console.log(`Navegando a: ${section}`);
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f0f2f5; /* Fondo por defecto */
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.logo {
  width: 40px;
  margin-right: 10px;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.notifications {
  margin-right: 20px;
}

.user-menu span {
  margin-left: 10px;
  cursor: pointer;
}

.process-status-panel, .alerts-tasks, .shortcuts {
  margin-top: 20px;
}

.status-charts {
  display: flex;
  justify-content: space-around;
}

.chart {
  width: 30%;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.shortcuts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 10px;
}

.shortcut {
  background-color: #007bff;
  color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.shortcut:hover {
  background-color: #0056b3;
}

.alerts-tasks ul {
  list-style-type: none;
  padding-left: 0;
}

.alerts-tasks li {
  background-color: #ffeeba;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
</style>
