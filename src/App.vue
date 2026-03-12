<script setup>
import AppForm from './components/layout/AppForm.vue'
import AppResult from './components/layout/AppResult.vue'
import AppHeader from './components/layout/AppHeader.vue'
</script>

<template>

  <AppHeader />

  <div class="app-container">

    <AppForm />
    <AppResult />

  </div>

</template>

<style scoped>

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;

  padding: 100px 0px 0px 0px;
  margin: 0;
  min-height: auto;
}

@media (min-width: 600px) {

  .app-container {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;

    padding: 160px 40px 40px 40px;

    min-height: 100vh;
    max-width: 1200px;
    margin: auto;
  }

}

</style>