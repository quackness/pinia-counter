<script setup>
import Counter from "@/components/Counter.vue";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
</script>

<template>
  <main>
    <div v-if="authStore.isAuthenticated">
      User name is: {{ authStore.user.name }}
    </div>
    <Counter />
  </main>
</template>
