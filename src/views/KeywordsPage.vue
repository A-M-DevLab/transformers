<template>
  <section class="showcase">
    <div class="hero">
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref<string>('Your keywords page! Yay!')
</script>

<style scoped>

</style>
