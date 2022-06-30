<template>
  <button
    type="button"
    :class="classes"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed, defineProps } from 'vue'
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

const classes = computed(() => {
  const cls = []
  cls.push(VARIANS[props.varian])
  cls.push(SIZES[props.size])
  return cls.join(' ')
})
</script>

<script>
export const VARIANS = {
  'white': 'bg-white text-red-800',
  'black': '',
  'blue': '',
  'red': '',
  'green': '',
  'yellow': '',
  'text': '',
  'text-dark': '',
}

export const SIZES = {
  xs: '',
  sm: '',
  md: 'px-3 py-1.5',
  lg: '',
  xl: '',
}
export default {
  name: 'UBtn',
}
</script>
