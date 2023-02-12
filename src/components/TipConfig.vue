<template>
    <section class="c-TipConfig">
        <BaseInput label="Bill">
            <template #icon>
                <IconDollar />
            </template>
        </BaseInput>
        <!-- <div class="c-TipConfig-Input">
            <label for="totalBill">Bill</label>
            <input type="text" id="totalBill">
        </div> -->
        <div class="">
            <span>Select Tip %</span>
            <div class="c-TipConfig-TipPercentages">
                <button>5%</button>
                <button>10%</button>
                <button>15%</button>
                <button>25%</button>
                <button>50%</button>
                <button>Custom</button>
            </div>
        </div>
        <BaseInput label="Number of People">
            <template #icon>
                <IconPerson />
            </template>
        </BaseInput>
        <!-- <div class="c-TipConfig-Input">
            <label for="numberOfPeople">Number of People</label>
            <input type="text" id="numberOfPeople">
        </div> -->
    </section>
</template>

<script setup>
import BaseInput from './base/BaseInput.vue'
import IconDollar from './icons/IconDollar.vue'
import IconPerson from './icons/IconPerson.vue'
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');

.c-TipConfig {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.c-TipConfig-TipPercentages {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
}

@media screen and (max-width: 768px) {
    .c-TipConfig-TipPercentages {
        grid-template-columns: 1fr 1fr;
    }
}

.c-TipConfig button {
    background-color: var(--primary-dark);
    color: var(--vt-c-light-gray-cyan-2);
    border: 1px solid var(--primary-dark);
    border-radius: 5px;
    height: 2.8rem;
    font-family: 'Space Mono', monospace;
    font-size: 24px;
    font-weight: bold;
}
</style>