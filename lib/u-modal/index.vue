<template>
  <TransitionRoot
    appear
    :show="show"
    as="template"
  >
    <Dialog
      as="div"
      class="u-relative u-z-10"
      @close="handleClickOutSide"
    >
      <TransitionChild
        as="template"
        enter="u-duration-300 u-ease-out"
        enter-from="u-opacity-0"
        enter-to="u-opacity-100"
        leave="u-duration-200 u-ease-in"
        leave-from="u-opacity-100"
        leave-to="u-opacity-0"
      >
        <div class="u-fixed u-inset-0 u-bg-black u-bg-opacity-25" />
      </TransitionChild>

      <div class="u-fixed u-inset-0 u-overflow-y-auto">
        <div
          class="u-flex u-min-h-full u-items-center u-justify-center u-p-4 u-text-center"
        >
          <TransitionChild
            as="template"
            enter="u-duration-300 u-ease-out"
            enter-from="u-opacity-0 u-scale-95"
            enter-to="u-opacity-100 u-scale-100"
            leave="u-duration-200 u-ease-in"
            leave-from="u-opacity-100 u-scale-100"
            leave-to="u-opacity-0 u-scale-95"
          >
            <DialogPanel
              class="u-w-full u-max-w-md u-transform u-overflow-hidden u-rounded-2xl u-bg-white u-p-6 u-text-left u-align-middle u-shadow-xl u-transition-all"
            >
              <DialogTitle
                as="h3"
                class="u-text-lg u-font-medium u-leading-6 u-text-gray-900"
              >
                <slot name="title" />
              </DialogTitle>

              <div class="u-mt-2">
                <slot />
              </div>

              <div class="u-mt-4">
                <slot name="actions" :close-modal="closeModal" />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  clickOutSide: {
    type: Boolean,
    default: true,
  },
})

const emits = defineEmits(['update:modelValue', 'onClose'])

const show = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits('update:modelValue', val)
    emits('onClose')
  },
})

const closeModal = () => {
  show.value = false
}

const handleClickOutSide = () => {
  if (props.clickOutSide)
    show.value = false
}
</script>

<script>
export default {
  name: 'UModal',
}
</script>
