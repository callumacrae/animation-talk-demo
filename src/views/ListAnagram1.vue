<script setup>
import { computed, ref } from "vue";

const text = ref("");

const splitText = computed(() =>
  text.value.split("").map((char, i) => ({ char, i }))
);
</script>

<template>
  <div class="text-center">
    <h1 class="mb-10">
      List transitions <span class="block">(enter and leave)</span>
    </h1>

    <input v-model="text" type="text" class="mb-10" @keyup.stop />

    <transition-group name="anagram" tag="p" class="text-6xl">
      <span
        v-for="{ char, i } in splitText"
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
.anagram-leave-active {
  transition: all 0.4s;
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

const text = ref("");

const splitText = computed(() =>
  text.value.split("").map((char, i) => ({ char, i }))
);
</script>

<template>
  <input v-model="text" type="text" />

  <transition-group name="anagram" tag="p">
    <span
      v-for="{ char, i } in splitText"
      class="inline-block whitespace-pre"
      :key="i"
    >
      {{ char }}
    </span>
  </transition-group>
</template>

<style scoped>
.anagram-enter-active, .anagram-leave-active {
  transition: all 0.4s;
}

.anagram-enter-from, .anagram-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
</code>
