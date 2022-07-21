<template>
  <div>
    <label class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <div class="mt-1">
      <input
        v-model="computeValue"
        :type="type"
        :placeholder="placeholder"
        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      >
    </div>
    <slot name="help-text">
      <div>
        <p v-show="showHelpText" class="uk-mt-1 uk-text-sm">
          {{ }}
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
  label: {
    type: String,
    required: false,
  },
  helpText: {
    type: String,
    default: '',
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

const inputClasses = computed(() => { return '' })
</script>

<script>
export const SIZES = {
  xs: 'uk-px-2.5 uk-py-1.5 uk-text-xs',
  // sm: 'uk-px-3 uk-py-2 uk-text-sm',
  md: 'uk-px-4 uk-py-2 uk-text-sm',
  // lg: 'uk-px-4 uk-py-2 uk-text-base',
  xl: 'uk-px-6 uk-py-3 uk-text-base',
}

export const VARIANS_TEXT = {
}

export default {
  name: 'UInput',
}
</script>
