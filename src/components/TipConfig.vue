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
                <button>1%</button>
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
.c-TipConfig {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.e-TipConfig-TipPercentages {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
}

.e-TipConfig-Input {
    display: flex;
    flex-direction: column;
}
</style>