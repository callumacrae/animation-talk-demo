<script setup>
import { ref } from "vue";

const active = ref(false);
</script>

<template>
  <div class="text-center">
    <h1>CSS Animations</h1>

    <button @click.prevent="active = !active" class="my-10 button">
      Toggle
    </button>

    <transition name="whoosh">
      <h2 v-show="active" class="text-8xl">Animated text</h2>
    </transition>
  </div>
</template>

<style scoped>
.whoosh-enter-active {
  animation: whoosh 0.7s;
}
.whoosh-leave-active {
  animation: whoosh 0.7s reverse;
}
@keyframes whoosh {
  0% {
    transform: translate(-300px, -30px) scale(0.01) rotate(-3deg);
    opacity: 0;
  }
  50% {
    transform: translate(80px, 50px) scale(1.2) rotate(4deg);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
</style>

<code>
<script setup>
import { ref } from "vue";
const active = ref(false);
</script>

<template>
  <transition name="whoosh">
    <h2 v-show="active">Animated text</h2>
  </transition>
</template>

<style scoped>
.whoosh-enter-active {
  animation: whoosh 0.7s;
}
.whoosh-leave-active {
  animation: whoosh 0.7s reverse;
}
@keyframes whoosh {
  0% {
    transform: translate(-300px, -30px) scale(0.01) rotate(-3deg);
    opacity: 0;
  }
  50% {
    transform: translate(80px, 50px) scale(1.2) rotate(4deg);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
</style>
</code>
