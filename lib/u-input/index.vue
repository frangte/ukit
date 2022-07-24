<template>
  <div :class="wrapperClasses">
    <label
      class="u-block u-text-sm u-font-medium"
      :class="error ? 'u-text-red-lt1' : 'u-text-gray-600'"
    >
      {{ label }}
    </label>
    <div class="u-mt-1">
      <input
        v-model="computeValue"
        :type="type"
        :placeholder="placeholder"
        :class="classes"
        :disabled="disabled"
      >
    </div>
    <slot name="help-text">
      <p
        v-show="showHelpText"
        class="u-mt-1 u-text-xs"
        :class="error ? 'u-text-red-lt1' : ''"
      >
        {{ helpText }}
      </p>
    </slot>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
  },
  block: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    required: true,
  },
  helpText: {
    type: String,
    default: '',
  },
  error: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'md',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  varian: {
    type: String,
    default: 'primary',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['update:modelValue', 'change'])

const computeValue = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits('change', val)
    emits('update:modelValue', val)
  },
})

const showHelpText = computed(() => {
  return !!props.helpText
})

const base = 'u-px-3 u-shadow-sm u-border-gray-300 u-rounded-md u-border'
const focus = 'focus:u-outline-none focus:u-ring focus:u-ring-2 focus:ring-offset-2'

const classes = computed(() => {
  const cls = [base, focus]
  cls.push(props.error ? 'u-border-red-lt1 u-ring-red-lt1 focus:u-border-red-lt1 u-text-red-lt1' : 'u-ring-gray-200 u-border-gray-200')
  cls.push(SIZES[props.size])
  cls.push(props.block ? 'u-w-full' : '')
  cls.push(props.disabled ? 'u-cursor-not-allowed u-opacity-50' : 'u-cursor-pointer')
  return cls.join(' ')
})

const wrapperClasses = computed(() => {
  const cls = []
  cls.push(props.block ? 'u-w-full' : '')
  return cls.join(' ')
})
</script>

<script>
export const SIZES = {
  sm: 'u-py-1.5 u-text-xs',
  md: 'u-py-2 u-text-md',
  lg: 'u-py-3 u-text-base',
}

export default {
  name: 'UInput',
}
</script>
