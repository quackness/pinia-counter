<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/HomeView.vue";
import HomeView from "./components/HomeView.vue";

import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
</script>

<template>
  <header></header>

  <main>
    <button @click="authStore.logout" v-if="authStore.isAuthenticated">
      Log out
    </button>
    <button @click="authStore.login" v-else>Login</button>
    <HomeView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
