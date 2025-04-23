<template>
  <section class="showcase">
    <div class="hero">
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref<string>('Download some nerdy ass shit here')
</script>

<style scoped>

</style>
