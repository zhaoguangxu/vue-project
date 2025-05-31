import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseButton from './BaseButton.vue'

describe('BaseButton', () => {
  it('renders properly with default props', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Click me',
      },
    })

    expect(wrapper.text()).toBe('Click me')
    expect(wrapper.classes()).toContain('base-button--primary')
    expect(wrapper.classes()).toContain('base-button--medium')
  })

  it('renders with different types', () => {
    const types = ['primary', 'secondary', 'danger', 'text']

    types.forEach((type) => {
      const wrapper = mount(BaseButton, {
        props: { type },
        slots: { default: 'Button' },
      })

      expect(wrapper.classes()).toContain(`base-button--${type}`)
    })
  })

  it('renders with different sizes', () => {
    const sizes = ['small', 'medium', 'large']

    sizes.forEach((size) => {
      const wrapper = mount(BaseButton, {
        props: { size },
        slots: { default: 'Button' },
      })

      expect(wrapper.classes()).toContain(`base-button--${size}`)
    })
  })

  it('shows loading state', () => {
    const wrapper = mount(BaseButton, {
      props: { loading: true },
      slots: { default: 'Button' },
    })

    expect(wrapper.classes()).toContain('base-button--loading')
    expect(wrapper.find('.base-button__loading-icon').exists()).toBe(true)
  })

  it('handles disabled state', () => {
    const wrapper = mount(BaseButton, {
      props: { disabled: true },
      slots: { default: 'Button' },
    })

    expect(wrapper.classes()).toContain('base-button--disabled')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(BaseButton, {
      slots: { default: 'Button' },
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('does not emit click event when disabled', async () => {
    const wrapper = mount(BaseButton, {
      props: { disabled: true },
      slots: { default: 'Button' },
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('does not emit click event when loading', async () => {
    const wrapper = mount(BaseButton, {
      props: { loading: true },
      slots: { default: 'Button' },
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })
})
