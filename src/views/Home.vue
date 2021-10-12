<script setup>
import { ref } from "vue";
import { GlobalEvents } from "vue-global-events";

const slide = ref(0);
</script>

<template>
  <div class="flex flex-col justify-center h-full text-center">
    <div v-if="slide === 0">
      <h1 style="font-size: 7vw;">ANIMATION AND VUE.JS</h1>
      <p class="mb-6 font-light" style="font-size: 5vw;">
        @callumacrae
      </p>
    </div>
    <div v-if="slide === 1">
      <h1 style="font-size: 7.65vw;">Why animation?</h1>
    </div>
    <div v-else-if="slide === 2">
      <h1 style="font-size: 9.45vw;">ANIMATION DEMO</h1>
      <p class="mb-6 font-light" style="font-size: 5.2vw;">
        Click hamburger to toggle menu
      </p>
    </div>
  </div>

  <GlobalEvents @keyup.left="slide--" @keyup.right="slide++" />
</template>

<code>
<script setup>
import { ref } from "vue";
const menuOpen = ref(false);
</script>

<template>
  <transition name="menu-slide">
    <div v-show="menuOpen" class="menu">
      Menu contents here!
    </div>
  </transition>
</template>

<style scoped>
.menu-slide-enter-active {
  transition: transform 0.3s ease-out;
}

.menu-slide-leave-active {
  transition: transform 0.3s ease-in;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  transform: translateX(100%);
}
</style>
</code>
