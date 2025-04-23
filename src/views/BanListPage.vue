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
 h1 {
   font-size: 50px;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #D3D3D3;
   font-weight: bold;
 }
</style>
