<script setup>
import { ref } from "vue";
import { gsap } from "gsap";

const number = ref(0);

function newNumber() {
  gsap.to(number, { value: Math.round(Math.random() * 10000), duration: 1 });
}
</script>

<template>
  <div class="mt-32 text-center">
    <h1 class="mb-12">State transitions</h1>
    <p class="mb-12 text-9xl">{{ number.toFixed(0) }}</p>
    <button @click.prevent="newNumber" class="button">New number</button>
  </div>
</template>

<code>
<script setup>
import { ref } from "vue";
import { gsap } from "gsap";

const number = ref(0);

function newNumber() {
  gsap.to(number, {
    value: Math.round(Math.random() * 10000), duration: 1
  });
}
</script>

<template>
  <div class="text-center">
    <h1>State transitions</h1>
    <p>{{ number.toFixed(0) }}</p>
    <button @click.prevent="newNumber">New number</button>
  </div>
</template>
</code>
