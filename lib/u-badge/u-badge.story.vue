<template>
  <Story title="Badge">
    <Variant title="Sizes">
      <div class="u-flex u-flex-col u-gap-2 u-p-2">
        <UBadge size="sm">
          Size sm
        </UBadge>
        <UBadge size="md">
          Size md
        </UBadge>
        <UBadge size="lg">
          Size lg
        </UBadge>
      </div>
    </Variant>

    <Variant title="Variants">
      <div class="u-flex u-flex-col u-gap-2 u-p-2">
        <UBadge color="blue">
          Blue
        </UBadge>
        <UBadge color="red">
          Short
        </UBadge>
        <UBadge color="green">
          Long
        </UBadge>
        <UBadge color="yellow">
          Yellow
        </UBadge>
      </div>
    </Variant>
  </Story>
</template>

<script setup>
import UBadge from './index.vue'
</script>
