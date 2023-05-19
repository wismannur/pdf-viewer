<template>
  <div class="tw-flex tw-flex-row tw-items-center">
    <v-progress-circular indeterminate color="#004c94" />
    <span
      v-if="message"
      class="tw-text-gray-700 tw-ml-3 tw-text-sm md:tw-text-base"
    >
      {{ message }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  message: {
    type: String,
    default: "",
  },
});
</script>
