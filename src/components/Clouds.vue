<script setup>
import { computed, defineProps, ref, watch } from "vue";
import chroma from "chroma-js";

const props = defineProps({ cloudCount: Number, time: Number });

const cloudColorScale = chroma.scale(["white", "pink"]).domain([12, 18]);
const cloudColor = computed(() => {
  return cloudColorScale(props.time);
});

const clouds = ref([
  { id: 0, x: 134, y: 170, scaleX: 1, scaleY: 1 },
  { id: 1, x: 500, y: 60, scaleX: -1.1, scaleY: 1.1 },
  { id: 2, x: 945, y: 105, scaleX: 1, scaleY: 1 },
  { id: 3, x: 1050, y: 300, scaleX: -1, scaleY: 1 },
  { id: 4, x: 1350, y: 205, scaleX: -1.1, scaleY: 1.2 },
]);

let maxId = 4;

function addCloud() {
  maxId++;
  clouds.value.push({
    id: maxId,
    x: 100 + Math.random() * 1400,
    y: 30 + Math.random() * 300,
    scaleX: (Math.random() < 0.5 ? -1 : 1) * (0.8 + Math.random() * 0.4),
    scaleY: 0.8 + Math.random() * 0.5,
  });
}

function removeCloud() {
  const i = Math.floor(clouds.value.length * Math.random());
  clouds.value.splice(i, 1);
}

watch(
  () => props.cloudCount,
  (cloudCount) => {
    if (cloudCount > clouds.value.length) {
      addCloud();
    } else if (cloudCount < clouds.value.length) {
      removeCloud();
    }
  }
);
</script>

<template>
  <transition-group name="cloud">
    <g v-for="c of clouds" :key="c.id">
      <path
        :fill="cloudColor.hex()"
        :transform="`translate(${c.x} ${c.y}) scale(${c.scaleX} ${c.scaleY})`"
        d="M 0 0 C 8 -11 28 -13.2 32 -13.2 C 46 -13.2 52 -24.2 74 -24.2 C 92 -24.2 94 -13.2 104 -13.2 S 124 -6.6 130 0"
      />
    </g>
  </transition-group>
</template>

<style scoped>
.cloud-enter-active {
  transition: all 3s ease-out;
}

.cloud-leave-active {
  transition: all 3s ease-in;
}

.cloud-enter-from {
  opacity: 0;
  transform: translateX(-200px);
}

.cloud-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
</style>
