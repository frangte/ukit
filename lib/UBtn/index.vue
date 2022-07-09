<template>
  <button
    type="button"
    :class="classes"
    :disabled="disabled"
  >
    <svg
      v-if="loading"
      class="uk-animate-spin uk-h-4 uk-mr-2 uk-my-auto"
      :class="VARIANS_TEXT[props.varian]"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="uk-opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="uk-opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>

    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  varian: {
    type: String,
    default: 'white',
    validator: varian => Object.hasOwn(VARIANS_BG, varian),
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

const base = 'uk-font-medium uk-rounded-md uk-inline-flex'

const classes = computed(() => {
  const cls = [base]
  cls.push(VARIANS_BG[props.varian])
  cls.push(VARIANS_TEXT[props.varian])
  cls.push(SIZES[props.size])
  cls.push(props.block ? 'uk-w-full uk-justify-center' : '')
  cls.push(props.disabled ? 'uk-cursor-not-allowed uk-opacity-50' : 'uk-cursor-pointer')
  return cls.join(' ')
})
</script>

<script>
export const VARIANS_BG = {
  white: 'uk-bg-gray-100 uk-text-gray-900 uk-border-b-2 uk-border-gray-300 hover:uk-bg-gray-100 active:uk-bg-gray-200',
  primary: 'uk-bg-primary-base uk-text-white uk-border-b-2 uk-border-primary-dk2 active:uk-bg-primary-dk1',
  success: 'uk-bg-green-base uk-text-white uk-border-b-2 uk-border-green-dk2 hover:uk-bg-green-lg1 active:uk-bg-green-dk1',
  green: 'uk-bg-green-base uk-text-white uk-border-b-2 uk-border-green-dk2 hover:uk-bg-green-lg1 active:uk-bg-green-dk1',
  error: 'uk-bg-red-base uk-text-white uk-border-b-2 uk-border-red-dk2 hover:uk-bg-red-lg1 active:uk-bg-red-dk1',
  red: 'uk-bg-red-base uk-text-white uk-border-b-2 uk-border-red-dk2 hover:uk-bg-red-lg1 active:uk-bg-red-dk1',
  warning: 'uk-bg-yellow-base uk-text-gray-600 uk-border-b-2 uk-border-yellow-dk2 hover:uk-bg-yellow-lg1 active:uk-bg-yellow-dk1',
  yellow: 'uk-bg-yellow-base uk-text-gray-600 uk-border-b-2 uk-border-yellow-dk2 hover:uk-bg-yellow-lg1 active:uk-bg-yellow-dk1',
}
export const VARIANS_TEXT = {
  white: 'uk-text-gray-900',
  primary: 'uk-text-white',
  success: 'uk-text-white',
  green: 'uk-text-white',
  error: 'uk-text-white',
  red: 'uk-text-white',
  warning: 'uk-text-gray-600',
  yellow: 'uk-text-gray-600',
}

export const SIZES = {
  xs: 'uk-px-2.5 uk-py-1.5 uk-text-xs',
  // sm: 'uk-px-3 uk-py-2 uk-text-sm',
  md: 'uk-px-4 uk-py-2 uk-text-sm',
  // lg: 'uk-px-4 uk-py-2 uk-text-base',
  xl: 'uk-px-6 uk-py-3 uk-text-base',
}

export default {
  name: 'UBtn',
}
</script>
