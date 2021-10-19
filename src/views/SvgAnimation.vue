<script setup>
import { computed, ref, watch } from "vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import chroma from "chroma-js";
import { gsap } from "gsap";

import Boat from "../components/Boat.vue";
import Clouds from "../components/Clouds.vue";
import FgMountains from "../components/FgMountains.vue";
import Mountains from "../components/Mountains.vue";
import Moon from "../components/Moon.vue";
import Sun from "../components/Sun.vue";
import Stars from "../components/Stars.vue";

const controlSection = ref(0);

const boatVisible = ref(true);
const cloudCount = ref(5);
const time = ref(18);

const waterColorScale = chroma
  .scale(["aqua", "darkblue", "#000042"])
  .domain([16, 18, 20]);
const waterColor = computed(() => {
  return waterColorScale(time.value);
});

const boatColorScale = chroma.scale(["orange", "#725010"]).domain([18, 20]);
const boatColor = computed(() => {
  return boatColorScale(time.value);
});
// This is simulating opacity, but we don't want to see mountain shadows through
// the boat so we can't actually use opacity
const boatShadowColor = computed(() => {
  return chroma.mix(waterColor.value, boatColor.value, 0.2);
});

function numToTime(num) {
  const h = Math.floor(num);
  const m = Math.round((num % 1) * 60);
  return `${h}:${m < 10 ? "0" + m : m}`;
}

const pageBgScale = chroma
  .scale(["deepskyblue", "#1f2937", "#0c1726"])
  .domain([16, 18, 20]);
watch(time, (newTime) => {
  document.body.style.backgroundColor = pageBgScale(newTime).hex();
});

function goToTime(newTime) {
  const duration = Math.abs(newTime - time.value) / 2;
  gsap.to(time, { value: newTime, duration, ease: "sine.inOut" });
}
</script>

<template>
  <div class="text-center">
    <h1 class="mb-10">SVG animations</h1>

    <svg viewBox="0 0 1600 900" class="w-full">
      <mask id="waterMask">
        <rect fill="white" x="0" y="550" width="1600" height="350" />
      </mask>

      <Stars :time="time" />

      <Moon :time="time" />

      <Sun :time="time" />
      <Mountains :time="time" />

      <Clouds :cloudCount="cloudCount" :time="time" />

      <rect :fill="waterColor.hex()" x="0" y="550" width="1600" height="350" />

      <g opacity="0.3" mask="url(#waterMask)">
        <g transform="translate(0 1100) scale(1 -1)">
          <Sun :time="time" />
          <Mountains :time="time" />
        </g>
      </g>

      <transition name="boat">
        <g v-if="boatVisible">
          <Boat :fill="boatColor.hex()" />
          <g transform="translate(0 1380) scale(1 -1)">
            <Boat :fill="boatShadowColor.hex()" />
          </g>
        </g>
      </transition>

      <FgMountains :time="time" />

      <g opacity="0.3" transform="translate(0 1573) scale(1 -1)">
        <FgMountains :time="time" :rightOnly="true" />
      </g>
    </svg>

    <p class="mt-5 opacity-50">
      Inspired by
      <a href="https://dribbble.com/shots/16236792-Serenity">
        Serenity by El B
      </a>
    </p>

    <div class="relative h-24 mt-5">
      <transition name="controls">
        <div
          v-if="controlSection === 0"
          class="absolute inset-x-0 top-0 space-x-4 controls--0"
        >
          <button class="button bg-bgMain" @click="boatVisible = !boatVisible">
            Toggle boat
          </button>
          <button class="button bg-bgMain" @click="cloudCount++">
            Add cloud
          </button>
          <button class="button bg-bgMain" @click="cloudCount--">
            Remove cloud
          </button>
          <button class="button bg-bgMain" @click="controlSection++">
            →
          </button>
        </div>

        <div
          v-else-if="controlSection === 1"
          class="absolute inset-x-0 top-0 flex items-end justify-center space-x-4 controls--1"
        >
          <button class="button bg-bgMain" @click="controlSection--">
            ←
          </button>
          <div class="w-72">
            <vue-slider
              v-model="time"
              :min="14"
              :max="20"
              :interval="1 / 60"
              :duration="0"
              :contained="true"
              tooltip="always"
              :tooltipFormatter="numToTime"
            />
          </div>
          <button class="button bg-bgMain" @click="goToTime(14)">Day</button>
          <button class="button bg-bgMain" @click="goToTime(18)">Dusk</button>
          <button class="button bg-bgMain" @click="goToTime(20)">Night</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.boat-enter-active {
  transition: transform 2s ease-out;
}

.boat-leave-active {
  transition: transform 3s ease-in;
}

.boat-enter-from {
  transform: translateX(-350px);
}

.boat-leave-to {
  transform: translateX(1400px);
}

.controls-enter-active,
.controls-leave-active {
  transition: transform 0.7s;
}

.controls--0.controls-enter-from,
.controls--0.controls-leave-to {
  transform: translateX(-100vw);
}

.controls--1.controls-enter-from,
.controls--1.controls-leave-to {
  transform: translateX(100vw);
}
</style>
