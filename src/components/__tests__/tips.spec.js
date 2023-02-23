import { beforeEach, describe, it, expect } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTipsStore } from "../../stores/tips";

describe("Tips Store", () => {
    beforeEach(() => {
      setActivePinia(createPinia());
    })
    it("should calculate tip amount per person", () => {
        const store = useTipsStore()
        store.bill = 100
        store.tip = 10
        store.people = 2
        store.calculateTip()
        expect(store.tipAmount).toBe(5)
    })
    it("should calculate total amount with tip per person", () => {
        const store = useTipsStore()
        store.setTip(10)
        store.bill = 100
        store.people = 2
        store.calculateTip()
        expect(store.total).toBe(55)
    })
    it("should calculate tip amount per person with custom tip", () => {
        const store = useTipsStore()
        store.setCustomTip(12)
        store.bill = 100
        store.people = 2
        store.calculateTip()
        expect(store.tipAmount).toBe(6)
    })
    it("should calculate total amount with tip per person with custom tip", () => {
        const store = useTipsStore()
        store.setCustomTip(12)
        store.bill = 100
        store.people = 2
        store.calculateTip()
        expect(store.total).toBe(56)
    })
    it("should reset all values", () => {
        const store = useTipsStore()
        store.bill = 100
        store.tip = 10
        store.people = 2
        store.customTip = 10
        store.total = 100
        store.tipAmount = 10
        store.reset()
        expect(store.bill).toBe(0)
        expect(store.tip).toBe(0)
        expect(store.people).toBe(0)
        expect(store.customTip).toBe("")
        expect(store.total).toBe(0)
        expect(store.tipAmount).toBe(0)
    })
})