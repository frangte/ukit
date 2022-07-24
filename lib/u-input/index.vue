<template>
  <div :class="wrapperClasses">
    <label class="u-block u-text-sm u-font-medium">
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
      <div>
        <p v-show="showHelpText" class="u-mt-1 u-text-sm">
          {{ helpText }}
        </p>
      </div>
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

const base = 'u-block u-shadow-sm sm:u-text-sm u-border-gray-300 u-rounded-md u-border'
const focus = 'focus:u-outline-none focus:u-ring focus:u-ring-offset-2 focus:u-ring-2'

const classes = computed(() => {
  const cls = [base, focus]
  cls.push(SIZES[props.size])
  cls.push(props.block ? 'u-w-full' : '')
  cls.push(props.disabled ? 'u-cursor-not-allowed u-opacity-50' : 'u-cursor-pointer')
  return cls.join(' ')
})

const wrapperClasses = computed(() => {
  return props.block ? 'u-w-full' : ''
})
</script>

<script>
export const SIZES = {
  sm: 'u-px-2.5 u-py-1.5 u-text-xs',
  md: 'u-px-4 u-py-2 u-text-base',
  lg: 'u-px-6 u-py-3 u-text-base',
}

export default {
  name: 'UInput',
}
</script>
