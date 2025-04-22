<template>
  <section class="showcase">
    <div class="hero">
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref<string>('Ban list page')
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
