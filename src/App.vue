<script setup>
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
  grid-template-columns: 1fr;
  width: 100%;
  gap: 1rem;
  background-color: var(--color-background-soft);
  border-radius: 20px;
}

@media screen and (min-width: 768px) {
  main {
    grid-template-columns: 1fr 1fr;
    width: 50rem;
  }
}
</style>
