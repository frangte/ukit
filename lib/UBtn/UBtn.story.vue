<template>
  <Story title="Button">
    <Variant title="Sizes">
      <div class="uk-flex uk-justify-center uk-items-center uk-h-96 uk-w-96 uk-flex-col uk-gap-3">
        <UBtn size="xs" class="w-full">
          Size xs
        </UBtn>
        <UBtn size="md">
          Size md
        </UBtn>
        <UBtn size="md" block>
          Block
        </UBtn>
        <UBtn size="xl">
          Size xl
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
