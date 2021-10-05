<script setup>
import { computed, ref } from "vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import chroma from "chroma-js";

import Boat from "../components/Boat.vue";
import Clouds from "../components/Clouds.vue";
import FgMountains from "../components/FgMountains.vue";
import Mountains from "../components/Mountains.vue";
import Sun from "../components/Sun.vue";

const boatVisible = ref(true);
const cloudCount = ref(5);
const time = ref(18);

const waterColorScale = chroma.scale(["#cfffff", "darkblue"]).domain([12, 18]);
const waterColor = computed(() => {
  return waterColorScale(time.value);
});
// This is simulating opacity, but we don't want to see mountain shadows through
// the boat so we can't actually use opacity
const boatShadowColor = computed(() => {
  return chroma.mix(waterColor.value, "orange", 0.2);
});

function numToTime(num) {
  const h = Math.floor(num);
  const m = Math.round((num % 1) * 60);
  return `${h}:${m < 10 ? "0" + m : m}`;
}
</script>

<template>
  <div class="text-center">
    <h1 class="mb-10">SVG animations</h1>
    <svg viewBox="0 0 1600 900" class="w-full">
      <mask id="waterMask">
        <rect fill="white" x="0" y="550" width="1600" height="350" />
      </mask>

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
          <Boat />
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

    <div class="mt-10 mb-14 space-x-4">
      <button class="button" @click="boatVisible = !boatVisible">
        Toggle boat
      </button>
      <button class="button" @click="cloudCount++">
        Add cloud
      </button>
      <button class="button" @click="cloudCount--">
        Remove cloud
      </button>
    </div>

    <vue-slider
      v-model="time"
      :min="12"
      :max="20"
      :interval="1 / 60"
      tooltip="always"
      :tooltipFormatter="numToTime"
    />
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
</style>
