<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'

const props = defineProps({
  items: {
    required: true,
    type: Array
  },
  activeId: {
    required: true,
    type: [Number, null]
  }
})
</script>

<template>
  <div class="px-6">
    <h3 class="text-gray mb-4">Додані маркери</h3>

    <FavoritePlace
      v-for="place in props.items"
      :key="place.id"
      :title="place.title"
      :description="place.description"
      :img="place.img"
      :is-active="place.id === props.activeId"
    />
    <IButton class="w-full mt-10" variant="gradient">Додати маркер</IButton>
  </div>
</template>
