<script setup>
import { ref } from 'vue'
import TipConfig from './components/TipConfig.vue';
import TipReport from './components/TipReport.vue';

defineEmits(['setBill'])

const bill = ref(0);
const tip = ref(0);
const people = ref(0);
const tipAmount = ref(0);
const total = ref(0);
const DEFAULT_TIPS = [5, 10, 15, 25, 50];

function setBill(value) {
  bill.value = Number(value)
}


</script>

<template>
  <main>
    <TipConfig @set-bill="setBill" />
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
