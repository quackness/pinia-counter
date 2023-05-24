<script setup>
import { useCounterStore } from "@/stores/counter";
import Counter from "@/components/Counter.vue";
const store = useCounterStore();
</script>

<template>
  <main>
    Home {{ store.count }}
    <Counter :count="store.count" />
  </main>
</template>
