<script setup>
import { computed, defineProps } from "vue";
import chroma from "chroma-js";

const props = defineProps({ time: Number });

const colorScale = chroma.scale(["white", "yellow"]).domain([8, 18]);
const color = computed(() => {
  return colorScale(props.time);
});

const rotation = computed(() => {
  return ((props.time - 12) / 6) * 50 - 50;
});
</script>

<template>
  <circle
    :fill="color.hex()"
    r="150"
    cx="800"
    cy="550"
    transform-origin="100 600"
    :transform="`rotate(${rotation})`"
  />
</template>
