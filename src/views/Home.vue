<template>
  <div class="flex flex-col items-center justify-center h-full">
    <h1 style="font-size: 9.45vw;">
      ANIMATION DEMO
    </h1>
    <p class="mb-6 font-light" style="font-size: 5.2vw;">
      Click hamburger to toggle menu
    </p>
  </div>
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
