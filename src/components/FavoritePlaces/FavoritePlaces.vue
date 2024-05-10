<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'
</script>

<template>
  <div class="px-6">
    <h3 class="text-gray mb-4">Додані маркери</h3>

    <FavoritePlace :key="n" v-for="n in 4" />
    <IButton class="w-full mt-10" variant="gradient">Додати маркер</IButton>
  </div>
</template>
