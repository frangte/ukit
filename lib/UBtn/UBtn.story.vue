<template>
  <Story title="Button">
    <Variant title="Default">
      <UBtn>Click Me</UBtn>
    </Variant>

    <Variant title="Not Default">
      <div class="uk-flex justify-center items-center h-96">
        <UBtn>Click Me</UBtn>
      </div>
    </Variant>
  </Story>
</template>

<script setup>
import UBtn from './index.vue'
</script>
