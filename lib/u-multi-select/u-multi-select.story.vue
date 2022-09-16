<template>
  <Story title="Multi Select">
    <Variant title="Single">
      <UMultiSelect
        :options="options"
      >
        <template #selectIcon>
          <ChevronUpDownIcon />
        </template>
      </UMultiSelect>
    </Variant>
    <Variant title="Multi">
      <UMultiSelect
        :multiple="true"
        :options="options"
      >
        <template #selectIcon>
          <ChevronUpDownIcon
            aria-hidden="true"
          />
        </template>
      </UMultiSelect>
    </Variant>
  </Story>
</template>

<script setup>
import ChevronUpDownIcon from '../_svg/chevron-up-down.vue'
import UMultiSelect from './index.vue'

const options = [
  { title: 'Wade Cooper' },
  { title: 'Arlene Mccoy' },
  { title: 'Devon Webb' },
  { title: 'Tom Cook' },
  { title: 'Tanya Fox' },
  { title: 'Hellen Schmidt' },
]
</script>
