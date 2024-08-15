<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="dashboard-content">
      <div class="charts-section">
        <ChartsComponent />
      </div>
      <div class="process-status-section">
        <ProcessStatus />
      </div>
    </div>
  </div>
</template>

<script>
import ChartsComponent from '@/components/ChartsComponent.vue';
import ProcessStatus from '@/components/ProcessStatus.vue';

export default {
  name: 'DashboardPage',
  components: {
    ChartsComponent,
    ProcessStatus
  }
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
}

.dashboard-content {
  display: flex;
  gap: 20px;
}

.charts-section, .process-status-section {
  flex: 1;
}

.charts-section {
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 20px;
}

.process-status-section {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
}
</style>
