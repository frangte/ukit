<template>
  <Listbox v-model="selectedItem" :multiple="multiple">
    <div class="u-relative u-mt-1">
      <ListboxButton
        class="u-relative u-w-full u-cursor-default u-rounded-lg u-bg-white u-py-2 u-pl-3 u-pr-10 u-text-left u-shadow-md u-focus:outline-none u-focus-visible:border-indigo-500 u-focus-visible:ring-2 u-focus-visible:ring-white u-focus-visible:ring-opacity-75 u-focus-visible:ring-offset-2 u-focus-visible:ring-offset-orange-300 u-sm:text-sm"
      >
        <span class="u-block u-truncate u-after:u-text-red before:u-content-['\200b']">
          {{ selectedList }}
        </span>
        <span
          class="u-pointer-events-none u-absolute u-inset-y-0 u-right-0 u-flex u-items-center u-pr-2"
        >
          <slot name="selectIcon" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="u-transition u-duration-100 u-ease-in"
        leave-from-class="u-opacity-100"
        leave-to-class="u-opacity-0"
      >
        <ListboxOptions
          class="u-absolute u-mt-1 u-max-h-60 u-w-full u-overflow-auto u-rounded-md u-bg-white u-py-1 u-text-base u-shadow-lg u-ring-1 u-ring-black u-ring-opacity-5 u-focus:outline-none u-sm:text-sm"
        >
          <ListboxOption
            v-for="option in options"
            v-slot="{ active, selected }"
            :key="option.title"
            :value="option"
            as="template"
          >
            <li
              class="u-relative u-cursor-default u-select-none u-py-2 u-pl-10 u-pr-4 hover:u-bg-gray-300 hover:u-text-white"
              :class="[
                active ? 'u-bg-amber-100 u-text-amber-900' : 'u-text-gray-900',
              ]"
            >
              <span
                class="u-block u-truncate"
                :class="[
                  selected ? 'u-font-medium' : 'u-font-normal',
                ]"
              >{{ option.title }}</span>
              <span
                v-if="selected"
                class="u-absolute u-inset-y-0 u-left-0 u-flex u-items-center u-pl-3 u-text-amber-600"
              >
                <CheckIcon class="u-h-5 u-w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import CheckIcon from '../_svg/check.vue'

const props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array,
  },
})

const selectedItem = ref([])
const selectedList = computed(() => {
  return props.multiple ? selectedItem.value.map(item => item.title).join(' | ') : selectedItem.value.title
})
</script>

