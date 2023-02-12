<template>
    <div class="c-TipConfig-Input">
        <label for="input">{{ label }}</label>
        <input type="text" id="input">
        <i>
            <slot name="icon"></slot>
        </i>
    </div>
</template>

<script setup>
defineProps({
    label: {
        type: String,
    }
})

</script>

<style lang="scss" scoped>
.c-TipConfig-Input {
    display: flex;
    flex-direction: column;

    & label {
        margin-bottom: 10px;
    }

    & input {
        width: 100%;
        height: 2.5rem;
        padding: 1.4rem 0.5rem 1.4rem 2.1rem;
        font-family: 'Space Mono', monospace;
        font-size: 24px;
        font-weight: bold;
        text-align: right;
        border: 1px solid var(--input-background);
        color: var(--primary-dark);
        background-color: var(--input-background);
        border-radius: 5px;
    }

    & i {
        position: absolute;
        top: 3rem;
        left: 1rem;
        color: var(--primary-dark);
    }
}
</style>