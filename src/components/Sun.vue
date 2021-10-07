<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({ time: Number });

const rotation = computed(() => {
  return ((props.time - 14) / 4) * 50 - 50;
});
</script>

<template>
  <circle
    fill="yellow"
    r="150"
    cx="800"
    cy="550"
    transform-origin="100 600"
    :transform="`rotate(${rotation})`"
  />
</template>
