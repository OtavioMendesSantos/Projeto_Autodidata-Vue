<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";

const randomNumbers = ref(
  Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1)
);
</script>

<template>
  <div v-for="number in randomNumbers" :key="number">
    <HelloWorld :times="number" />
  </div>
</template>

<style scoped></style>
