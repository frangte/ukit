<template>
  <Story title="Button">
    <Variant title="Default">
      <div class="uk-flex uk-justify-center uk-items-center uk-h-96 uk-flex-col uk-gap-3">
        <UBtn size="xs" :block="true">
          Click Me
        </UBtn>
        <UBtn size="sm">
          Click Me
        </UBtn>
        <UBtn size="md">
          Click Me
        </UBtn>
        <UBtn size="lg">
          Click Me
        </UBtn>
        <UBtn size="xl">
          Click Me
        </UBtn>
      </div>
    </Variant>
  </Story>
</template>

<script setup>
import UBtn from './index.vue'
</script>
