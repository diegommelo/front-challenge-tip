import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from "pinia";
import { useTipsStore } from '../../stores/tips'
import TipConfig from '../TipConfig.vue'

describe('TipConfig', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    })
    it('should render all tips buttons', () => {
        const store = useTipsStore()
        const wrapper = mount(TipConfig)
        expect(wrapper.find('.c-TipConfig-TipPercentages').findAll('button')).toHaveLength(store.defaultTips.length)
    })
    it('should render custom tip input', () => {
        const wrapper = mount(TipConfig)
        expect(wrapper.find('.c-TipConfig-CustomTip').exists()).toBe(true)
    })
    it('should render number of people tip', () => {
        const wrapper = mount(TipConfig)
        expect(wrapper.find('.c-TipConfig-People').exists()).toBe(true)
    })
    it('should render icon dollar', () => { 
        const wrapper = mount(TipConfig)
        expect(wrapper.find('.c-TipConfig-IconDollar').exists()).toBe(true)
    })
    it('should set bill on input', () => { 
        const store = useTipsStore()
        const wrapper = mount(TipConfig)
        wrapper.find('.c-TipConfig-Bill input').setValue(100)
        expect(store.bill).toBe('100')
    })
    it('should set customTip on input', () => { 
        const store = useTipsStore()
        const wrapper = mount(TipConfig)
        wrapper.find('.c-TipConfig-CustomTip input').setValue(10)
        expect(store.customTip).toBe('10')
    })
    it('should set people on input', () => {
        const store = useTipsStore()
        const wrapper = mount(TipConfig)
        wrapper.find('.c-TipConfig-People input').setValue(10)
        expect(store.people).toBe('10')
    })
    it('should set tip on button click', () => {
        const store = useTipsStore()
        const wrapper = mount(TipConfig)
        wrapper.find('.c-TipConfig-TipPercentages button').trigger('click')
        expect(store.tip).toBe(5)
    })
    it('should select content on input click on custom tip', () => { 
        const wrapper = mount(TipConfig)
        wrapper.find('.c-TipConfig-CustomTip input').trigger('click')
        expect(wrapper.find('.c-TipConfig-CustomTip input').element.value).toBe('')
    })
    it('should select content on input click on bill', () => {
        const store = useTipsStore()
        const wrapper = mount(TipConfig)
        wrapper.find('.c-TipConfig-Bill input').trigger('click')
        expect(wrapper.find('.c-TipConfig-Bill input').element.value).toBe(store.bill.toString())
    })
})
