<template>
    <section class="c-TipReport">
        <section class="c-TipReport-Content">
            <section class="c-TipReport-Details">
                <div class="c-TipReport-Detail">
                    <span>Tip Amount</span>
                    <span class="small-text">/ person</span>
                </div>
                <div class="c-TipReport-Value">
                    <span>$4.27</span>
                </div>
                <div class="c-TipReport-Detail">
                    <span>Total</span>
                    <span class="small-text">/ person</span>
                </div>
                <div class="c-TipReport-Value">
                    <span>$32.79</span>
                </div>
            </section>
            <button class="c-TipReport-Reset">RESET</button>
        </section>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.c-TipReport {
    display: flex;
    flex-direction: column;
    padding: 0 1.8rem 1rem 1.8rem;
    color: var(--color-text-light);
}

@media screen and (min-width: 768px) {
    .c-TipReport {
        padding: 1.5rem;
    }
    .c-TipReport-Content{
        height: 100%;
        justify-content: space-between;
    }
}

.c-TipReport-Content {
    background-color: var(--vt-c-dark-cyan);
    display: flex;
    flex-direction: column;
    padding: 1.3rem;
    border-radius: 20px;
    gap: 1rem;
}

.c-TipReport-Details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
    padding: 0.5rem;
}

.c-TipReport-Reset {
    background-color: var(--vt-c-cyan);
    color: var(--vt-c-dark-cyan);
    font-weight: 700;
    border: 1px solid var(--vt-c-dark-gray-cyan-2);
    border-radius: 5px;
    height: 2.8rem;
    font-family: 'Space Mono', monospace;
    font-size: 1.2rem;
}

.c-TipReport-Detail {
    display: flex;
    flex-direction: column;
    font-size: 1rem;

    & .small-text {
        font-size: 0.8rem;
        color: var(--vt-c-dark-gray-cyan-2);
    }
}

.c-TipReport-Value {
    display: flex;
    justify-content: flex-end;
    font-size: 2rem;
    color: var(--vt-c-cyan);
}
</style>