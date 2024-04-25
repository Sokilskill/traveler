<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'
import IInput from '../IInput/IInput.vue'
</script>

<template>
  <div class="px-6">
    <h3 class="text-gray mb-4">Додані маркери</h3>

    <div class="py-5">
      <IInput label="Some label" />
    </div>

    <FavoritePlace :key="n" v-for="n in 4" />
    <IButton class="w-full mt-10">Додати маркер</IButton>
  </div>
</template>
