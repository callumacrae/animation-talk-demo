<script setup>
import { computed, defineProps } from "vue";
import chroma from "chroma-js";

const props = defineProps({ time: Number });

const bgColorScale = chroma.scale(["darkgreen", "magenta", "purple"]).domain([16, 18, 20]);
const bgColor = computed(() => {
  return bgColorScale(props.time);
});

const fgColorScale = chroma.scale(["green", "red", "#520752"]).domain([16, 18, 20]);
const fgColor = computed(() => {
  return fgColorScale(props.time);
});
</script>

<template>
  <path
    :fill="bgColor.hex()"
    d="M -600 550 C -520 470 -320 454 -280 454 C -140 454 -80 374 140 374 C 320 374 340 454 440 454 S 640 502 700 550"
  />
  <path
    :fill="fgColor.hex()"
    d="M -1020 550 C -924 486 -684 473.2 -636 473.2 C -468 473.2 -396 409.2 -182 405 C 20 416 66 509 217 486 S 468 511.6 540 550"
  />
  <path
    :fill="bgColor.hex()"
    d="M 900 550 C 988 454 1208 434.8 1252 434.8 C 1406 434.8 1472 338.8 1714 338.8 C 1912 338.8 1934 434.8 2044 434.8 S 2264 492.4 2330 550"
  />
  <path
    :fill="fgColor.hex()"
    d="M 1050 550 C 1059 521 1233 480 1330 509 C 1501 550 1703 306 1710 176 C 2062 423.28 2084 480.88 2194 480.88 S 2414 515.44 2480 550"
  />
</template>
