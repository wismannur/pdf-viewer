<template>
  <div class="tw-flex tw-flex-row tw-items-center tw-mb-1">
    <span
      v-if="label"
      v-html="label"
      class="tw-text-sm xl:tw-text-base tw-text-gray-700 tw-font-medium"
    />
    <span v-if="required" v-html="'*'" class="tw-text-red-500 tw-ml-1" />
    <span
      v-if="labelNotes"
      v-html="labelNotes"
      class="tw-text-xs tw-italic tw-font-normal tw-text-gray-500 tw-ml-3"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "",
  },
  labelNotes: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: true,
  },
});
</script>
