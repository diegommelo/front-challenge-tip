import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from "pinia";
import { useTipsStore } from '../../stores/tips'
import TipReport from '../TipReport.vue'

describe('TipReport', () => { 
    beforeEach(() => {
        setActivePinia(createPinia());
    })
    it('should render tip amount / person', () => {
        const store = useTipsStore()
        store.tipAmount = 10
        const wrapper = mount(TipReport)
        expect(wrapper.find('.c-TipReport-Amount').text()).toBe('$10.00')
    })
    it('should render total amount / person', () => {
        const store = useTipsStore()
        store.total = 10
        const wrapper = mount(TipReport)
        expect(wrapper.find('.c-TipReport-Total').text()).toBe('$10.00')
    })
    it('should render reset button', () => {
        const wrapper = mount(TipReport)
        expect(wrapper.find('.c-TipReport-Reset').exists()).toBe(true)
    })
    it('should reset store on reset button click', () => {
        const store = useTipsStore()
        const wrapper = mount(TipReport)
        wrapper.find('.c-TipReport-Reset').trigger('click')
        expect(store.bill).toBe(0)
        expect(store.customTip).toBe('')
        expect(store.people).toBe(0)
        expect(store.tip).toBe(0)
        expect(store.tipAmount).toBe(0)
        expect(store.total).toBe(0)
    })
})