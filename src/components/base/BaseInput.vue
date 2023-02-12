<template>
    <div class="c-TipConfig-Input">
        <label v-if="label">{{ label }}</label>
        <input :type="type" :placeholder="placeholder" v-model="value" >
        <i>
            <slot name="icon"></slot>
        </i>
    </div>
</template>

<script setup>

import { computed } from 'vue'

const props = defineProps({
    label: {
        type: String,
    },
    placeholder: {
        type: String,
        default: ""
    },
    modelValue: {
        type: [String, Number],
        default: ""
    },
    type: {
        type: String,
        default: "text"
    },
})

const emits = defineEmits(['update:modelValue'])

const value = computed({
    get() {
        return props.modelValue
    },
    set(val) {
        emits('update:modelValue', val)
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
        padding: 1.4rem 0.5rem;
        background-color: var(--input-background);
        color: var(--primary-dark);
        font-family: 'Space Mono', monospace;
        font-size: 24px;
        font-weight: bold;
        text-align: right;
        border: 1px solid var(--input-background);
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