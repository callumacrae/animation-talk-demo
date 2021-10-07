<script setup>
import { computed, ref, defineProps, onMounted, onUnmounted } from "vue";

const props = defineProps({ time: Number });

const stars = [];

for (let i = 0; i < 250; i++) {
  stars.push({
    i: i,
    r: 3 + Math.random() * 2,
    cx: Math.random() * 3200,
    cy: Math.random() * 3200,
    h: Math.random() * 360,
  });
}

const opacity = computed(() => {
  if (props.time < 17.5) {
    return 0;
  }
  if (props.time > 19.5) {
    return 1;
  }

  return (props.time - 17.5) / 2;
});

const rotation = ref(0);

let frameId;
const frame = (time) => {
  frameId = requestAnimationFrame(frame);

  if (props.time < 17) {
    return;
  }

  rotation.value = time / 1e3;
};
onMounted(() => {
  frameId = requestAnimationFrame(frame);
});
onUnmounted(() => {
  cancelAnimationFrame(frameId);
});
</script>

<template>
  <g
    :opacity="opacity"
    :transform="`rotate(${rotation}) translate(-1600 -1600)`"
  >
    <circle
      v-for="star of stars"
      :key="star.i"
      :fill="`hsl(${star.h}, 100%, 90%)`"
      :r="star.r"
      :cx="star.cx"
      :cy="star.cy"
    />
  </g>
</template>
