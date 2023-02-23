import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseInput from '../BaseInput.vue'

describe('BaseInput', () => {
    it('should render input with label', () => {
        const wrapper = mount(BaseInput, {
            props: {
                label: 'Test Label'
            }
        })
        expect(wrapper.find('label').text()).toBe('Test Label')
    })
    it('should render input with placeholder', () => {
        const wrapper = mount(BaseInput, {
            props: {
                placeholder: 'Test Placeholder'
            }
        })
        expect(wrapper.find('input').attributes('placeholder')).toBe('Test Placeholder')
    })
    it('should render input with type', () => {
        const wrapper = mount(BaseInput, {
            props: {
                type: 'number'
            }
        })
        expect(wrapper.find('input').attributes('type')).toBe('number')
    })
})