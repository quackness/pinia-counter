<script setup>
import Counter from "@/components/Counter.vue";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
const authStore = useAuthStore();
// const { isAuthenticated, fullname } = storeToRefs(authStore);
</script>

<template>
  <main>
    <div v-if="authStore.isAuthenticated">
      User name is: {{ authStore.fullname }}
    </div>
    <Counter />
  </main>
</template>
