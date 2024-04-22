<script setup>
// import HomepageView from './views/HomepageView.vue'
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
</script>

<template>
  <!-- <HomepageView /> -->

  <div class="bg-white h-screen w-[400px]">
    <FavoritePlaces>
      <template v-slot:list>Список</template>
      <template #largeList></template>
    </FavoritePlaces>
  </div>
</template>
