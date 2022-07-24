<template>
  <Story title="Input">
    <Variant title="Sizes">
      <div class="u-p-2">
        <UInput
          v-model="text"
          label="Simple text input"
          size="md"
          varian="error"
        />
      </div>
    </Variant>
  </Story>
</template>

<script setup>
import UInput from './index.vue'

const text = ref('Change me')
</script>
