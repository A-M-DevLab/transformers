<template>
  <Header></Header>
  <section class="showcase">

    <div class="overlay"></div>
      <video src="/media/Space.mp4" muted loop autoplay></video>

    </section> <router-view />
  <Footer></Footer>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
.showcase video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 10%;
  z-index: -2;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 50px);
  mix-blend-mode: overlay;
  filter: grayscale(10%);/* changed from saturate(-10%)  >>> tweak this as needed */
  background: #111;
  z-index: 1;
}
</style>
