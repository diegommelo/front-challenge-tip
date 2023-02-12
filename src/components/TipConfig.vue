<template>
    <section class="c-TipConfig">
        <div class="e-TipConfig-Input">
            <label for="totalBill">Bill</label>
            <input type="text" id="totalBill">
        </div>
        <div class="">
            <span>Select Tip %</span>
            <div class="e-TipConfig-TipPercentages">
                <button>5%</button>
                <button>10%</button>
                <button>15%</button>
                <button>25%</button>
                <button>50%</button>
                <button>Custom</button>
            </div>
        </div>
        <div class="e-TipConfig-Input">
            <label for="numberOfPeople">Number of People</label>
            <input type="text" id="numberOfPeople">
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
.c-TipConfig {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.e-TipConfig-TipPercentages {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
}

@media screen and (max-width: 768px) {
    .e-TipConfig-TipPercentages {
        grid-template-columns: 1fr 1fr;
    }
}

.e-TipConfig-Input {
    display: flex;
    flex-direction: column;
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
.c-TipConfig input {
    border: 1px solid var(--input-background);
    height: 2.5rem;
    font-family: 'Space Mono', monospace;
    font-size: 24px;
    font-weight: bold;
    text-align: right;
    color: var(--primary-dark);
    background-color: var(--input-background);
    border-radius: 5px;
}
</style>