import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTipsStore = defineStore('tips', () => {
    const bill = ref(0)
    const tip = ref(0)
    const people = ref(0);
    const tipAmount = ref(0);
    const total = ref(0);
    const defaultTips = [5, 10, 15, 25, 50];

    function setBill(value) {
        bill.value = value;
    }

    function setTip(value) {
        tip.value = value;
    }

    function setPeople(value) {
        people.value = value;
    }

    return { bill, tip, people, tipAmount, total, defaultTips, setBill, setTip, setPeople }
})