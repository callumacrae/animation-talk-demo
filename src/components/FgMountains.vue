<script setup>
import { computed, defineProps } from "vue";
import chroma from "chroma-js";

const props = defineProps({ time: Number, rightOnly: Boolean });

const bgColorScale = chroma.scale(["darkgreen", "purple"]).domain([12, 18]);
const bgColor = computed(() => {
  return bgColorScale(props.time);
});

const fgColorScale = chroma.scale(["green", "#520752"]).domain([12, 18]);
const fgColor = computed(() => {
  return fgColorScale(props.time);
});
</script>

<template>
  <path
    v-if="!props.rightOnly"
    :fill="fgColor.hex()"
    d="M -940 900 C -844 836 -604 823.2 -556 823.2 C -388 823.2 -316 759.2 -102 755 C 100 766 146 859 297 836 S 548 861.6 620 900"
  />
  <path
    v-if="!props.rightOnly"
    :fill="bgColor.hex()"
    d="M -900 900 C -820 788 -620 765.6 -580 765.6 C -440 765.6 -380 653.6 -182 766 C 21 677 40 765.6 140 765.6 S 340 832.8 360 900"
  />

  <path
    :fill="fgColor.hex()"
    d="M 2200 786.5 C 2144.2 730.7 2004.9 719.6 1633 728 C 1595 728 1577 686 1479 732 C 1384 773 1396 764 1361 769 S 1270 768 1243 786"
  />
  <path
    :fill="bgColor.hex()"
    d="M 2200 786.5 C 2144.2 730.7 2004.9 719.6 1977 719.6 C 1879.4 719.6 1837.6 663.8 1713.3 660.2 C 1596 669.8 1569.3 750.8 1481.6 730.7 S 1335.8 753 1294 786.5"
  />
</template>
