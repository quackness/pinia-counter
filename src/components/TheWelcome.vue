<script setup>
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
console.log("store", store);
</script>

<template>Home</template>
