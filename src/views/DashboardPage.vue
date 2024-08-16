<template>
  <div class="home">
    <!-- Barra de Navegación Superior -->
    <header class="navbar">
      <div class="logo-container">
        <img class="logo" src="../assets/image/Inverst-logo.png" alt="Logo" />
        <span class="system-name">Invers S.A.S</span>
      </div>
      <div class="user-info">
        <button @click="toggleSidebar" class="menu-btn">
          <i class="fas fa-bars"></i>
        </button>
        <div class="profile-menu">
          <img class="user-photo" src="../assets/image/Inverst-logo.png" alt="Foto del Funcionario" />
          <div class="dropdown">
            <span @click="toggleDropdown" class="dropdown-toggle">Perfil ▼</span>
            <div v-if="dropdownOpen" class="dropdown-content">
              <span @click="goToProfile">Perfil</span>
              <span @click="goToSettings">Configuración</span>
              <span @click="logout">Cerrar sesión</span>
            </div>
          </div>
          <button @click="toggleNotifications" class="notification-btn">
            <i class="fas fa-bell"></i>
            <span class="notification-count">{{ notifications.length }}</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Barra Lateral de Navegación -->
    <aside class="sidebar" :class="{ open: sidebarOpen }">
      <ul>
        <li @click="selectSection('documents')" :class="{ active: selectedSection === 'documents' }">Documentos</li>
        <li @click="selectSection('contracts')" :class="{ active: selectedSection === 'contracts' }">Contratos</li>
        <li @click="selectSection('financial')" :class="{ active: selectedSection === 'financial' }">Datos Financieros</li>
        <li @click="selectSection('vehicles')" :class="{ active: selectedSection === 'vehicles' }">Autos y Otros</li>
        <!-- Agregar más opciones aquí -->
        <li @click="goToAdditionalPage('option1')">Opción 1</li>
        <li @click="goToAdditionalPage('option2')">Opción 2</li>
        <li @click="goToAdditionalPage('option3')">Opción 3</li>
      </ul>
    </aside>

    <!-- Área Principal -->
    <main class="main-area">
      <button @click="goHome" class="back-to-home-btn">Volver a Home</button>
      
      <div v-if="selectedSection === 'documents'" class="documents-view">
        <div class="search-filters">
          <input type="text" placeholder="Buscar documentos" v-model="searchQuery" />
          <button @click="searchDocuments">Buscar</button>
        </div>
        <div class="documents-content">
          <div class="folder-tree">
            <h3>Árbol de Carpetas</h3>
            <!-- Ejemplo de árbol de carpetas -->
            <ul>
              <li>Carpeta 1
                <ul>
                  <li>Documento 1</li>
                  <li>Documento 2</li>
                </ul>
              </li>
              <li>Carpeta 2
                <ul>
                  <li>Documento 3</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="preview-area">
            <h3>Área de Previsualización</h3>
            <p>Selecciona un documento para previsualizarlo.</p>
          </div>
        </div>
        <div class="actions-panel">
          <button @click="uploadDocument">Subir Documentos</button>
          <button @click="deleteDocument">Eliminar/Archivar Documentos</button>
          <button @click="shareDocument">Compartir Documentos</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DashboardPage',
  data() {
    return {
      dropdownOpen: false,
      sidebarOpen: false,
      selectedSection: 'documents',
      notifications: [] as Array<string>,
      searchQuery: ''
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    goToProfile() {
      // Navegar al perfil del usuario
    },
    goToSettings() {
      // Navegar a configuración
    },
    logout() {
      this.$router.push({ name: 'UserLogin' });
    },
    toggleNotifications() {
      // Mostrar u ocultar notificaciones
    },
    selectSection(section: string) {
      this.selectedSection = section;
    },
    searchDocuments() {
      // Implementar búsqueda de documentos
    },
    uploadDocument() {
      // Implementar subida de documentos
    },
    deleteDocument() {
      // Implementar eliminación/archivado de documentos
    },
    shareDocument() {
      // Implementar compartición de documentos
    },
    goHome() {
      this.$router.push({ name: 'HomePage' });
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    goToAdditionalPage(option: string) {
      // Redirigir según la opción seleccionada
      this.$router.push({ name: option });
    }
  }
});
</script>

<style scoped>
/* Estilos para la barra de navegación superior */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #34495e;
  color: #ecf0f1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  font-size: 24px;
  font-weight: 600;
}

.user-info {
  display: flex;
  align-items: center;
}

.profile-menu {
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.user-photo {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid #ecf0f1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.dropdown-toggle {
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
}

.dropdown-content {
  position: absolute;
  top: 35px;
  right: 0;
  background-color: #2c3e50;
  border-radius: 5px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-width: 150px;
  padding: 5px 0;
}

.dropdown-content span {
  display: block;
  padding: 10px;
  color: #ecf0f1;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dropdown-content span:hover {
  background-color: #2980b9;
}

.notification-btn {
  position: relative;
  margin-left: 10px;
  background: none;
  border: none;
  color: #ecf0f1;
  cursor: pointer;
  font-size: 20px;
}

.notification-count {
  position: absolute;
  top: -5px;
  right: -10px;
  background: #e74c3c;
  color: white;
  border-radius: 50%;
  padding: 3px 6px;
  font-size: 12px;
}

/* Estilos para la barra lateral de navegación */
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100%;
  background-color: #2c3e50;
  color: #ecf0f1;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.2);
  transform: translateX(-100%);
  transition: transform 0.3s;
  z-index: 10;
}

.sidebar.open {
  transform: translateX(0);
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  padding: 15px;
  cursor: pointer;
  border-bottom: 1px solid #34495e;
}

.sidebar li:hover,
.sidebar li.active {
  background-color: #2980b9;
}

/* Estilos para el área principal */
.main-area {
  margin-left: 250px;
  padding: 20px;
}

.back-to-home-btn {
  display: inline-block;
  margin-bottom: 20px;
  padding: 12px 24px;
  background-color: #1abc9c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 16px;
}

.back-to-home-btn:hover {
  background-color: #16a085;
}

/* Estilos para la vista de documentos */
.documents-view {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.search-filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.search-filters input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-filters button {
  padding: 10px 20px;
  background-color: #1abc9c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-filters button:hover {
  background-color: #16a085;
}

.documents-content {
  display: flex;
  gap: 20px;
}

.folder-tree,
.preview-area,
.actions-panel {
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.folder-tree ul {
  list-style-type: none;
  padding: 0;
}

.folder-tree li {
  margin-bottom: 10px;
}

.preview-area {
  min-height: 200px;
}

.actions-panel {
  margin-top: 20px;
}

.actions-panel button {
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.actions-panel button:hover {
  background-color: #2980b9;
}

/* Estilos para el ícono de menú hamburguesa */
.fas.fa-bars {
  font-size: 24px;
}
</style>
