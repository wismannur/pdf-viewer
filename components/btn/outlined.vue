<template>
  <v-btn
    v-bind="$attrs"
    variant="outlined"
    :class="[color, `rounded-${rounded}`, 'btn-outlined']"
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
</script>

<style lang="scss" scoped>
.btn-outlined {
  @apply tw-capitalize tw-font-semibold tw-border-2 tw-h-10;

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
    @apply tw-border-sky-500 #{!important};
    .btn-label {
      @apply tw-text-sky-500 #{!important};
    }
  }

  &.slate {
    @apply tw-border-slate-500 #{!important};
    .btn-label {
      @apply tw-text-slate-500;
    }
  }

  &.gray {
    @apply tw-border-gray-500 #{!important};
    .btn-label {
      @apply tw-text-gray-500;
    }
  }

  &.zinc {
    @apply tw-border-zinc-500 #{!important};
    .btn-label {
      @apply tw-text-zinc-500;
    }
  }

  &.neutral {
    @apply tw-border-neutral-500 #{!important};
    .btn-label {
      @apply tw-text-neutral-500;
    }
  }

  &.stone {
    @apply tw-border-stone-500 #{!important};
    .btn-label {
      @apply tw-text-stone-500;
    }
  }

  &.red {
    @apply tw-border-red-500 #{!important};
    .btn-label {
      @apply tw-text-red-500;
    }
  }

  &.orange {
    @apply tw-border-orange-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.amber {
    @apply tw-border-amber-500 #{!important};
    .btn-label {
      @apply tw-text-amber-500;
    }
  }

  &.yellow {
    @apply tw-border-yellow-500 #{!important};
    .btn-label {
      @apply tw-text-yellow-500;
    }
  }

  &.lime {
    @apply tw-border-lime-500 #{!important};
    .btn-label {
      @apply tw-text-white;
    }
  }

  &.green {
    @apply tw-border-green-500 #{!important};
    .btn-label {
      @apply tw-text-green-500;
    }
  }

  &.emerald {
    @apply tw-border-emerald-500 #{!important};
    .btn-label {
      @apply tw-text-emerald-500;
    }
  }

  &.teal {
    @apply tw-border-teal-500 #{!important};
    .btn-label {
      @apply tw-text-teal-500;
    }
  }

  &.cyan {
    @apply tw-border-cyan-500 #{!important};
    .btn-label {
      @apply tw-text-cyan-500;
    }
  }

  &.sky {
    @apply tw-border-sky-500 #{!important};
    .btn-label {
      @apply tw-text-sky-500;
    }
  }

  &.blue {
    @apply tw-border-blue-500 #{!important};
    .btn-label {
      @apply tw-text-blue-500;
    }
  }

  &.indigo {
    @apply tw-border-indigo-500 #{!important};
    .btn-label {
      @apply tw-text-indigo-500;
    }
  }

  &.violet {
    @apply tw-border-violet-500 #{!important};
    .btn-label {
      @apply tw-text-violet-500;
    }
  }

  &.purple {
    @apply tw-border-purple-500 #{!important};
    .btn-label {
      @apply tw-text-purple-500;
    }
  }

  &.fuchsia {
    @apply tw-border-fuchsia-500 #{!important};
    .btn-label {
      @apply tw-text-fuchsia-500;
    }
  }

  &.pink {
    @apply tw-border-pink-500 #{!important};
    .btn-label {
      @apply tw-text-pink-500;
    }
  }

  &.rose {
    @apply tw-border-rose-500 #{!important};
    .btn-label {
      @apply tw-text-rose-500;
    }
  }
}
</style>
