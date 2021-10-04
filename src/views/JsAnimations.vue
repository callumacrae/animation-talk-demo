<script setup>
import { gsap } from "gsap";
import { defineProps, ref } from "vue";

const props = defineProps({ initial: Boolean });

const active = ref(props.initial);

function handleEnter(el, done) {
  gsap
    .timeline({ defaults: { ease: "sine" }, onComplete: done })
    .fromTo(
      el.querySelector(".bg-hover"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 }
    )
    .fromTo(
      el.querySelector("h2"),
      { x: -120, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6 },
      "<+=0.2"
    )
    .fromTo(
      el.querySelector("p"),
      { x: 120, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6 },
      "<+=0.1"
    );
}

function handleLeave(el, done) {
  gsap
    .timeline({ defaults: { ease: "sine.in" }, onComplete: done })
    .to(el.querySelector(".bg-hover"), { y: -50, opacity: 0, duration: 0.9 })
    .to(el.querySelector("p"), { x: -120, opacity: 0, duration: 0.6 }, "<")
    .to(
      el.querySelector("h2"),
      { x: 120, opacity: 0, duration: 0.6 },
      "<+=0.1"
    );
}
</script>

<template>
  <div class="text-center">
    <h1 class="mb-10">
      JavaScript Animations
      <span v-if="props.initial" class="block">
        (with <code>appear</code> attr)
      </span>
    </h1>

    <button class="mb-10 button" @click.prevent="active = !active">
      Toggle
    </button>

    <transition @enter="handleEnter" @leave="handleLeave" :css="false" appear>
      <div v-show="active">
        <div class="relative inline-block px-8 py-6">
          <div class="absolute inset-0 rounded-lg bg-hover"></div>
          <h2 class="mb-3 text-7xl">Animated text</h2>
          <p class="mb-0 text-6xl">Animated subtext</p>
        </div>
      </div>
    </transition>
  </div>
</template>
