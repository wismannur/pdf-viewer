<template>
  <div
    :class="[
      'tw-flex tw-w-full',
      classField,
      inline ? 'tw-flex-row' : 'tw-flex-col',
    ]"
  >
    <LazyCommonLabelRequired
      v-if="label"
      :label="label"
      :required="required"
      :label-notes="labelNotes"
    />
    <v-text-field
      v-bind="$attrs"
      v-model="valInputText"
      label=""
      variant="outlined"
      density="compact"
      hide-details="auto"
      color="#0c4d8c"
      class="input-rounded !tw-w-full"
      @keypress="handleKeyPress"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  // START === props for label ==============================================================================
  label: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  labelNotes: {
    type: String,
    default: "",
  },
  // END === props for label ================================================================================

  // START === props for text field ==============================================================================
  modelValue: {
    type: String,
    default: "",
  },
  errorMessages: {
    type: [Array, String],
    default: () => [],
  },
  classField: {
    type: String,
    default: "",
  },
  maxlength: {
    type: [String, Number],
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  inline: {
    type: Boolean,
    default: false,
  },
  // END === props for text field ================================================================================
});

const valInputText = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const handleKeyPress = (evt: KeyboardEvent) => {
  if (props.maxlength) {
    if (valInputText.value.length >= Number(props.maxlength))
      evt.preventDefault();
  }

  // handle when input-text type is number
  if (props.type === "number") {
    // for handle space
    if (evt.code === "Space") return evt.preventDefault();
    // for handle Digit0 or 0
    if (Number(evt.key) === 0) return;

    // for handle all key or code except number
    const char = String.fromCharCode(Number(evt.key));
    const check = !/[0-9]/.test(char);
    if (!Number(evt.key) || !check) return evt.preventDefault();
  }
};
</script>
