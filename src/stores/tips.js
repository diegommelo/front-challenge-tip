import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTipsStore = defineStore('tips', () => {
    const bill = ref(0)
    const tip = ref(0)
    const customTip = ref("")
    const people = ref(0);
    const tipAmount = ref(0);
    const total = ref(0);
    const defaultTips = [5, 10, 15, 25, 50];

    function setTip(value) {
        tip.value = value;
    }

    function reset() {
        bill.value = 0;
        tip.value = 0;
        people.value = 0;
        tipAmount.value = 0;
        total.value = 0;
        customTip.value = 0;
    }

    return { bill, tip, people, tipAmount, total, defaultTips, setTip, customTip, reset }
})