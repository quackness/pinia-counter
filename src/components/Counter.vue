<template>
  <div>
    <br />
    <button @click="increment">+</button>
    Count Value: {{ store.count }}
    <button @click="decrement">-</button>
  </div>
</template>
<script setup>
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
function increment() {
  store.count++;
}
function decrement() {
  store.count--;
}
</script>
