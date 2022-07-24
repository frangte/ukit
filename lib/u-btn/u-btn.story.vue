<template>
  <Story title="Button">
    <Variant title="Sizes">
      <div class="u-flex u-flex-col u-gap-2 u-p-2">
        <UBtn size="sm" class="w-full">
          Size sm
        </UBtn>
        <UBtn size="md">
          Size md
        </UBtn>
        <UBtn size="lg">
          Size xl
        </UBtn>
        <UBtn block>
          Block Button
        </UBtn>
      </div>
    </Variant>

    <Variant title="Variants">
      <div class="u-flex u-flex-col u-gap-2 u-p-2">
        <UBtn varian="primary">
          Primary
        </UBtn>
        <UBtn varian="success">
          Success | Green
        </UBtn>
        <UBtn varian="error">
          Error | Red
        </UBtn>
        <UBtn varian="warning">
          Warning | Yellow
        </UBtn>
      </div>
    </Variant>
  </Story>
</template>

<script setup>
import UBtn from './index.vue'
</script>
