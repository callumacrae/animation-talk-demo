<script setup>
import { ref, provide } from "vue";

const links = [
  { text: "Index page", to: "/" },
  { text: "CSS Animations", to: "/css-animations" },
];

const menuOpen = ref(false);
provide("menuOpen", menuOpen);
</script>

<template>
  <transition name="menu-slide">
    <div
      v-show="menuOpen"
      class="fixed top-0 right-0 h-screen px-8 py-10 w-96 bg-bgSidebar"
    >
      <h2 class="mb-6">Animation demos</h2>
      <p>
        These pages contain various demos of animation techniques in Vue.js:
      </p>

      <ul>
        <li v-for="link in links" :key="link.text">
          <router-link
            :to="link.to"
            class="block px-4 py-3 mb-2 font-bold no-underline text-secondary rounded-md hover:bg-hover"
            active-class="bg-active"
            @click="menuOpen = false"
          >
            {{ link.text }}
          </router-link>
        </li>
      </ul>
    </div>
  </transition>

  <button
    @click.prevent="menuOpen = !menuOpen"
    class="absolute right-3 top-3 hamburger"
    :class="{ 'hamburger--active': menuOpen }"
  >
    <svg class="w-10 h-8" viewBox="0 0 35 30">
      <path
        d="M 5 5 L 30 5"
        class="stroke-current bar-1 stroke-2"
        stroke-linecap="round"
      />
      <path
        d="M 5 15 L 30 15"
        class="stroke-current bar-2 stroke-2"
        stroke-linecap="round"
      />
      <path
        d="M 5 25 L 30 25"
        class="stroke-current bar-3 stroke-2"
        stroke-linecap="round"
      />
    </svg>
  </button>

  <!-- @todo remove overflow hidden before live -->
  <div class="w-4/5 h-screen py-16 mx-auto overflow-hidden"><router-view /></div>
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

.hamburger path {
  transition: opacity 0.3s, transform 0.3s;
}

.hamburger .bar-1 {
  transform-origin: 1px top;
}

.hamburger--active .bar-1 {
  transform: translateX(8px) rotate(45deg);
}

.hamburger--active .bar-2 {
  opacity: 0;
}

.hamburger .bar-3 {
  transform-origin: 1px bottom;
}

.hamburger--active .bar-3 {
  transform: translateX(8px) rotate(-45deg);
}
</style>
