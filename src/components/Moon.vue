<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({ time: Number });

const opacity = computed(() => {
  if (props.time < 19) {
    return 0;
  }

  return props.time - 19;
});
</script>

<template>
  <path
    fill="#2b8b51"
    :opacity="opacity"
    d="M 640 435 A 180 180 90 1 1 550 165 A 144 144 90 1 0 640 435"
  />
</template>
