<template>
  <Story title="Input">
    <Variant title="Sizes">
      <div class="u-flex u-flex-col u-gap-2 u-p-2">
        <UInput
          v-model="text"
          label="Size Medium"
          size="sm"
        />
        <UInput
          v-model="text"
          label="Size Medium"
          size="md"
        />
        <UInput
          v-model="text"
          label="Size Medium"
          size="lg"
        />
      </div>
    </Variant>

    <Variant title="Variants">
      <div class="u-flex u-flex-col u-gap-2 u-p-2">
        <UInput
          v-model="text"
          label="Simple text input"
          size="md"
        />
        <UInput
          v-model="text"
          label="Error input"
          size="md"
          help-text="Message error"
          error
        />
      </div>
    </Variant>

    <Variant title="State">
      <div class="u-flex u-flex-col u-gap-2 u-p-2">
        <UInput
          v-model="text"
          label="Simple text input"
          size="md"
          :disabled="true"
        />
        <UInput
          label="With placeholder"
          size="md"
          placeholder="Change me"
        />
      </div>
    </Variant>
  </Story>
</template>

<script setup>
import UInput from './index.vue'

const text = ref('Change me')
</script>
