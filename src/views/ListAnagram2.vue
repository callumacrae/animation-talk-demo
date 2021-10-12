<script setup>
import { computed, ref } from "vue";
import shuffle from "lodash/fp/shuffle";

const text = ref("");

const splitText = computed(() =>
  text.value.split("").map((char, i) => ({ char, i }))
);

const shuffledText = ref([]);

function handleInput() {
  shuffledText.value = splitText.value;
}

function shuffleText() {
  shuffledText.value = shuffle(splitText.value);
}
</script>

<template>
  <div class="text-center">
    <h1 class="mb-10">List transitions <span class="block">(move)</span></h1>

    <form @submit.prevent="shuffleText" @input="handleInput">
      <input v-model="text" type="text" class="mb-10" @keyup.stop />
    </form>

    <transition-group name="anagram" tag="p" class="text-6xl">
      <span
        v-for="{ char, i } in shuffledText"
        class="inline-block whitespace-pre"
        :key="i"
      >
        {{ char }}
      </span>
    </transition-group>
  </div>
</template>

<style scoped>
.anagram-enter-active,
.anagram-leave-active,
.anagram-move {
  transition: all 0.4s;
}

.anagram-leave-active {
  position: absolute;
}

.anagram-enter-from,
.anagram-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>

<code>
<script setup>
import { computed, ref } from "vue";
import shuffle from "lodash/fp/shuffle";

const text = ref("");

const splitText = computed(() =>
  text.value.split("").map((char, i) => ({ char, i }))
);

const shuffledText = ref([]);

function handleInput() {
  shuffledText.value = splitText.value;
}

function shuffleText() {
  shuffledText.value = shuffle(splitText.value);
}
</script>

<template>
  <form @submit.prevent="shuffleText" @input="handleInput">
    <input v-model="text" type="text" />
  </form>

  <transition-group name="anagram" tag="p">
    <span
      v-for="{ char, i } in shuffledText"
      class="inline-block whitespace-pre"
      :key="i"
    >
      {{ char }}
    </span>
  </transition-group>
</template>

<style scoped>
.anagram-enter-active,
.anagram-leave-active,
.anagram-move {
  transition: all 0.4s;
}

.anagram-leave-active {
  position: absolute;
}

.anagram-enter-from,
.anagram-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
</code>
