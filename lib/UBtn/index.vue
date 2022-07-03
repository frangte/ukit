<template>
  <button
    type="button"
    :class="classes"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup>
import { objectHasKey } from '../../utils/index.js'

const props = defineProps({
  varian: {
    type: String,
    default: 'white',
    validator(varian) {
      return objectHasKey(VARIANS, varian)
    },
  },
  size: {
    type: String,
    default: 'md',
    validator(size) {
      return objectHasKey(SIZES, size)
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const base = 'uk-rounded-md uk-font-medium'

const classes = computed(() => {
  const cls = [base]
  cls.push(VARIANS[props.varian])
  cls.push(SIZES[props.size])
  cls.push(props.disabled ? 'uk-cursor-not-allowed uk-opacity-50' : 'uk-cursor-pointer')
  return cls.join(' ')
})
</script>

<script>
export const VARIANS = {
  'white': 'uk-bg-gray-100 uk-text-gray-900 uk-border-b-2 uk-border-t-1 uk-border-gray-300 hover:uk-bg-gray-100 active:uk-bg-gray-200',
  'primary': 'uk-bg-gray-100 uk-text-gray-900 uk-border-b-2 uk-border-t-1 uk-border-gray-300 hover:uk-bg-gray-100 active:uk-bg-gray-200',
  'secondary': '',
  'danger': '',
  'success': '',
  'warning': '',
  'text': '',
  'text-black': '',
}

export const SIZES = {
  xs: 'uk-px-2.5 uk-py-1.5 uk-text-xs',
  sm: 'uk-px-3 uk-py-2 uk-text-sm',
  md: 'uk-px-4 uk-py-2 uk-text-sm',
  lg: 'uk-px-4 uk-py-2 uk-text-base',
  xl: 'uk-px-6 uk-py-3 uk-text-base',
}

export default {
  name: 'UBtn',
}
</script>
