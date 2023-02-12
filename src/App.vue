<script setup>
import { ref } from 'vue'
import TipConfig from './components/TipConfig.vue';
import TipReport from './components/TipReport.vue';
</script>

<template>
  <main>
    <TipConfig />
    <TipReport />
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 50rem;
  }
</style>
