<template>
  <Story title="Modal">
    <div class="u-flex u-flex-col u-gap-2 u-p-2 u-w-64">
      <UBtn @click="show = true">
        Show modal
      </UBtn>

      <UModal v-model="show" :click-out-side="false">
        <template #title>
          Modal Title
        </template>

        <template #default>
          <div class="u-w-98">
            <div class="u-text-gray-500">
              Modal content
            </div>
            <div class="u-text-gray-500 u-text-xs">
              Một con ngựa đau cả tàu bỏ cỏ
            </div>
          </div>
        </template>

        <template #actions="{ closeModal }">
          <div class="u-flex u-gap-2 u-justify-end">
            <UBtn
              size="sm"
              varian="error"
              @click="closeModal"
            >
              Close
            </UBtn>
          </div>
        </template>
      </UModal>
    </div>
  </Story>
</template>

<script setup>
import UBtn from '../u-btn/index.vue'
import UModal from './index.vue'
const show = ref(false)
</script>
