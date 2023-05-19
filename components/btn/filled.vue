<template>
  <v-btn
    v-bind="$attrs"
    variant="tonal"
    :class="[color, `rounded-${rounded}`, 'btn-filled']"
    @click="emit('click')"
  >
    <slot name="prepend-icon" />

    <span v-if="label" class="btn-label" v-html="label" />

    <slot name="append-icon" />
  </v-btn>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "primary",
  },
  rounded: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["click"]);
</script>

<style lang="scss" scoped>
.btn-filled {
  @apply tw-capitalize tw-font-semibold tw-h-10;

  &.rounded-md {
    @apply tw-rounded-md #{!important};
  }

  &.rounded-lg {
    @apply tw-rounded-lg #{!important};
  }

  &.rounded-xl {
    @apply tw-rounded-xl #{!important};
  }

  &.rounded-full {
    @apply tw-rounded-full #{!important};
  }

  &.primary {
    @apply tw-bg-sky-500 #{!important};
    .btn-label {
      @apply tw-text-white #{!important};
    }
  }

  &.slate {
    @apply tw-bg-slate-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.gray {
    @apply tw-bg-gray-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.zinc {
    @apply tw-bg-zinc-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.neutral {
    @apply tw-bg-neutral-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.stone {
    @apply tw-bg-stone-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.red {
    @apply tw-bg-red-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.orange {
    @apply tw-bg-orange-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.amber {
    @apply tw-bg-amber-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.yellow {
    @apply tw-bg-yellow-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.lime {
    @apply tw-bg-lime-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.green {
    @apply tw-bg-green-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.emerald {
    @apply tw-bg-emerald-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.teal {
    @apply tw-bg-teal-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.cyan {
    @apply tw-bg-cyan-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.sky {
    @apply tw-bg-sky-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.blue {
    @apply tw-bg-blue-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.indigo {
    @apply tw-bg-indigo-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.violet {
    @apply tw-bg-violet-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.purple {
    @apply tw-bg-purple-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.fuchsia {
    @apply tw-bg-fuchsia-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.pink {
    @apply tw-bg-pink-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.rose {
    @apply tw-bg-rose-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  :deep(.v-btn__overlay),
  :deep(.v-btn__underlay) {
    @apply tw-hidden #{!important};
  }
}
</style>
