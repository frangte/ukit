<template>
  <div :class="classes" class="u-max">
    <slot>
      <p>
        {{ text }}
      </p>
    </slot>
  </div>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'md',
  },
  color: {
    type: String,
    default: 'blue',
  },
})

const base = 'u-inline-flex u-font-bold u-w-max u-rounded-sm'
const classes = computed(() => {
  const cls = [base]
  cls.push(COLORS[props.color])
  cls.push(SIZES[props.size])
  return cls.join(' ')
})
</script>

<script>
export const SIZES = {
  sm: 'u-px-2.5 u-py-1 u-text-xs',
  md: 'u-px-4 u-py-1.5 u-text-sm',
  lg: 'u-px-6 u-py-2 u-text',
}

export const COLORS = {
  blue: 'u-bg-primary-lt2 u-text-primary-dk2', // alias
  red: 'u-bg-red-lt2 u-text-red-dk2',
  green: 'u-bg-green-lt2 u-text-green-dk2',
  yellow: 'u-bg-yellow-lt1 u-text-yellow-dk2',
}

export default {
  name: 'UBadge',
}
</script>
