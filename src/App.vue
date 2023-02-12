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
  gap: 1rem;
  width: 50rem;
  background-color: var(--color-background-soft);
}
</style>
