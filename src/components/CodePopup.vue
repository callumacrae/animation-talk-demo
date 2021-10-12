<script setup>
import { computed, inject, nextTick, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Prism from "prismjs";
import "prismjs/themes/prism-twilight.css";

Prism.manual = true;

const route = useRoute();
const code = computed(() => {
  return route.matched[0].components.default.code?.trim();
});

const codeOpen = inject("codeOpen");
const codeEl = ref(null);

watch(codeOpen, () => {
  if (codeOpen.value && code.value) {
    nextTick(() => Prism.highlightElement(codeEl.value));
  }
});
</script>

<template>
  <transition name="fade">
    <div
      v-if="codeOpen && code"
      class="fixed inset-0 z-50 flex items-center justify-center bg-bgSidebar bg-opacity-80 backdrop-blur-sm"
      @click="codeOpen = false"
    >
      <pre class="w-11/12 max-w-3xl" style="max-height: 90%;" @click.stop>
<code ref="codeEl" class="language-html">{{ code }}</code></pre>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
