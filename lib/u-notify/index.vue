<template>
  <div class="u-flex u-justify-end">
    <TransitionRoot
      :show="show"
      appear
      enter="u-duration-500 u-ease-out"
      enter-from="u-opacity-0 u-translate-x-full"
      enter-to="u-opacity-100 u-translate-x-0"
      leave="u-duration-500 u-ease-in"
      leave-from="u-opacity-100 u-translate-x-0"
      leave-to="u-opacity-0 u-translate-x-full"
    >
      <div
        class="u-w-96 u-overflow-hidden u-rounded-tr-xl u-rounded-br-xl u-border-l-4 u-border-l-red u-bg-white
        u-p-4 u-text-left u-align-middle u-shadow-xl u-mt-2 u-mr-2 u-relative"
        :class="classes"
        @mouseover="clearNotifyTimeout"
        @mouseleave="show = false"
      >
        <div class="u-flex u-align-center">
          <span class="u-flex u-items-center">
            <check v-if="type === 'success'" class="u-w-5 h-w-5 u-stroke-green" />
            <warning v-if="type === 'warn'" class="u-w-5 h-w-5 u-stroke-yellow" />
            <xmark v-if="type === 'error'" class="u-w-5 h-w-5 u-stroke-red" />
          </span>
          <div class="u-ml-2">
            <p class="u-font-medium">
              {{ title }}
            </p>
            <p class="u-text-gray-500 u-font-small">
              <slot>{{ message }}</slot>
            </p>
          </div>
        </div>
        <div class="u-absolute u-top-1 u-right-1 u-cursor-pointer u-rounded-full" @click="show = false">
          <span><xmark /></span>
        </div>
      </div>
    </TransitionRoot>
  </div>
</template>

<script setup>
import warning from '../_svg/exclamation-circle.vue'
import xmark from '../_svg/x-mark.vue'
import check from '../_svg/check.vue'

const props = defineProps({
  type: {
    type: String,
    default: 'success',
  },
  timeout: {
    type: Number,
    default: 3500,
  },
})

const show = ref(true)

const classes = computed(() => {
  return TYPE[props.type]
})

const title = computed(() => {
  return props.type.charAt(0).toUpperCase() + props.type.slice(1)
})

let timer

const clearNotifyTimeout = () => {
  clearTimeout(timer)
}

onMounted(() => {
  timer = setTimeout(() => {
    show.value = false
  }, props.timeout)
})
</script>

<script>
export const TYPE = {
  success: 'u-border-l-green',
  warn: 'u-border-l-yellow',
  error: 'u-border-l-red',
}
</script>
