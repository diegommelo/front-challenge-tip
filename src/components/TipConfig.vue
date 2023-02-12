<template>
    <section class="c-TipConfig">
        <BaseInput label="Bill" v-model="tipsStore.bill">
            <template #icon>
                <IconDollar />
            </template>
        </BaseInput>
        <div>
            <span>Select Tip %</span>
            <div class="c-TipConfig-TipPercentages">
                <template v-for="tip in defaultTips" :key="tip">
                    <button @click="setTip(tip)" :class="{ 'selected': selectedTip(tip) }">{{ tip }}%</button>
                </template>
                <BaseInput placeholder="Custom" v-model="tipsStore.customTip" @click="setTip(0)"/>
            </div>
        </div>
        <BaseInput label="Number of People" v-model="tipsStore.people">
            <template #icon>
                <IconPerson />
            </template>
        </BaseInput>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useTipsStore } from '../stores/tips';
import BaseInput from './base/BaseInput.vue'
import IconDollar from './icons/IconDollar.vue'
import IconPerson from './icons/IconPerson.vue'

const tipsStore = useTipsStore()
const defaultTips = ref(tipsStore.defaultTips)

const setTip = (tip) => {
    tipsStore.setTip(tip)
}

const selectedTip = (tip) => {
    return tip == tipsStore.tip
}

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
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

@media screen and (min-width: 768px) {
    .c-TipConfig {
        padding: 1.3rem 1rem 1.3rem 1.5rem;
    }

    .c-TipConfig-TipPercentages {
        grid-template-columns: 1fr 1fr 1fr;
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

    &:hover {
        background-color: var(--primary-light-2);
        border: 1px solid var(--primary-light-2);
        color: var(--primary-dark);
        cursor: pointer;
    }

    &.selected {
        background-color: var(--primary);
        border: 1px solid var(--primary);
        color: var(--primary-dark);
    }
}
</style>