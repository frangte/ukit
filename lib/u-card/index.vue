<template>
  <div class="u-rounded-md u-px-3 u-py-2 u-bg-white u-w-full" :class="classes">
    <slot>{{ props.title }}</slot>
    <p>{{ props.content }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  classes: {
    type: String,
    default: 'u-bg-white ',
  },
})
</script>

<script>
export default {
  name: 'UCard',
}
</script>
