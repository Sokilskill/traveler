<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'
import { useModal } from '../../composables/useModal.js'
import EditPlaceModal from '../EditPlaceModal/EditPlaceModal.vue'

const props = defineProps({
  items: {
    required: true,
    type: Array
  },
  activeId: {
    required: true,
    type: [String, null]
  }
})

const emit = defineEmits(['place-clicked', 'create'])

const { isOpen: isEditModalOpen, openModal: openEditModal, closeModal: closeEditModal } = useModal()
</script>

<template>
  <div class="px-6">
    <h3 class="text-gray mb-4">Додані маркери</h3>

    <div class="text-black" v-if="items.length === 0">Список порожній</div>

    <FavoritePlace
      v-for="place in props.items"
      :key="place.id"
      :title="place.title"
      :description="place.description"
      :img="place.img"
      :is-active="place.id === props.activeId"
      @click="emit('place-clicked', place.id)"
      @edit="openEditModal"
    />

    <EditPlaceModal :is-open="isEditModalOpen" @close="closeEditModal" />

    <IButton class="w-full mt-10" variant="gradient" @click="emit('create')">Додати маркер</IButton>
  </div>
</template>
