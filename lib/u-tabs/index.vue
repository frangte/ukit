<template>
  <TabGroup @change="changeTab">
    <TabList>
      <Tab
        v-for="(tab, idx) of tabs"
        :key="idx"
      >
        <slot name="header">
          {{ tab.title }}
        </slot>
      </Tab>
    </TabList>

    <TabPanels>
      <TabPanel
        v-for="(tab, idx) of tabs"
        :key="idx"
      >
        <slot name="content">
          <component :is="tab.component" />
        </slot>
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Object,
    validator(val) {
      return typeof val === 'object' || [null, undefined].includes(val)
    },
  },
  tabs: {
    type: Array,
    required: true,
  },
})

const emits = defineEmits(['update:modelValue', 'onChange'])

const _modelValue = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits('update:modelValue', val)
  },
})

const changeTab = (index) => {
  _modelValue.value = props.tabs[index]
}
</script>

<script>
export default {
  name: 'UTabs',
}
</script>
