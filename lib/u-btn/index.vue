<template>
  <button
    :type="type"
    :class="classes"
    :disabled="disabled"
  >
    <spin v-if="loading" :class="VARIANS_TEXT[props.varian]" />
    <slot>
      {{ inlineText }}
    </slot>
  </button>
</template>

<script setup>
import spin from '../_svg/spin.vue'

const props = defineProps({
  varian: {
    type: String,
    default: 'white',
    validator: varian => Object.hasOwn(VARIANS_BG, varian),
  },
  inlineText: {
    type: String,
    required: false,
    default: '',
  },
  type: {
    type: String,
    default: 'button',
  },
  size: {
    type: String,
    default: 'md',
    validator: size => Object.hasOwn(SIZES, size),
  },
  block: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const base = 'u-border u-font-medium u-rounded-md u-inline-flex u-shadow-sm'

const classes = computed(() => {
  const cls = [base]
  cls.push(VARIANS_BG[props.varian])
  cls.push(VARIANS_TEXT[props.varian])
  cls.push(SIZES[props.size])
  cls.push(props.block ? 'u-w-full u-justify-center' : 'u-w-max')
  cls.push(props.disabled ? 'u-cursor-not-allowed u-opacity-50' : 'u-cursor-pointer')
  return cls.join(' ')
})
</script>

<script>
export const VARIANS_BG = {
  white: 'u-border u-bg-white u-text-gray-900 hover:u-bg-gray-100 active:u-bg-gray-200',
  primary: 'u-bg-primary u-text-white u-border-primary active:u-bg-primary-dk1',
  success: 'u-bg-green u-text-white u-border-green hover:u-bg-green-lg1 active:u-bg-green-dk1',
  error: 'u-bg-red u-text-white u-border-red hover:u-bg-red-lg1 active:u-bg-red-dk1',
  warning: 'u-bg-yellow u-text-gray-700 u-border-yellow hover:u-bg-yellow-lg1 active:u-bg-yellow-dk1',
}

export const VARIANS_TEXT = {
  white: 'u-text-gray-900',
  primary: 'u-text-white',
  success: 'u-text-white',
  error: 'u-text-white',
  warning: 'u-text-gray-600',
}

export const SIZES = {
  sm: 'u-px-2.5 u-py-1.5 u-text-xs',
  md: 'u-px-4 u-py-2 u-text-sm',
  lg: 'u-px-6 u-py-3 u-text',
}

export default {
  name: 'UBtn',
}
</script>
