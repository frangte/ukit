<template>
  <Story title="Button">
    <Variant title="Sizes">
      <div class="uk-flex uk-justify-center uk-items-center uk-h-96 uk-w-96 uk-flex-col uk-gap-3">
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
      <div class="uk-flex uk-justify-center uk-items-center uk-h-96 uk-w-96 uk-flex-col uk-gap-3">
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
