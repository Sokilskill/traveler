<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'
import { useModal } from '../../composables/useModal.js'
import EditPlaceModal from '../EditPlaceModal/EditPlaceModal.vue'
import { computed, ref } from 'vue'
import { useMutation } from '@/composables/useMutation'
import { deleteFavoritePlace, updateFavoritePlace } from '@/api/favorite-place'
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal.vue'

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

const emit = defineEmits(['place-clicked', 'create', 'updated'])

const idOfDeleteItem = ref(null)
const selectedId = ref(null)
const selectedItem = computed(() => props.items.find((place) => place.id === selectedId.value))

const { mutation: updatePlace, isLoading } = useMutation({
  mutationFn: (formData) => updateFavoritePlace(formData),
  onSuccess: () => {
    closeEditModal()
    emit('updated')
  }
})

const {
  mutation: deletePlace,
  isLoading: isDeleting,
  error: deleteError
} = useMutation({
  mutationFn: (formData) => deleteFavoritePlace(formData),
  onSuccess: () => {
    closeEditModal()
    emit('updated')
  }
})

const { isOpen: isEditModalOpen, openModal: openEditModal, closeModal: closeEditModal } = useModal()
const {
  isOpen: isConfirmationModalOpen,
  openModal: openConfirmationModal,
  closeModal: closeConfirmationModal
} = useModal()

const handleEditPlace = (id) => {
  selectedId.value = id
  openEditModal()
}

const handleSubmit = (formData) => {
  updatePlace(formData)
}

const handleOpenConfirmationModal = (id) => {
  idOfDeleteItem.value = id
  openConfirmationModal()
}
const handleDeletePlace = () => {
  deletePlace(idOfDeleteItem.value)
}
</script>

<template>
  <div class="px-6">
    <h3 class="text-gray mb-4">Додані маркери</h3>

    <div class="text-black" v-if="items.length === 0 && !isPlacesLoading">Список порожній</div>

    <FavoritePlace
      v-for="place in props.items"
      :key="place.id"
      :title="place.title"
      :description="place.description"
      :img="place.img"
      :is-active="place.id === props.activeId"
      @click="emit('place-clicked', place.id)"
      @edit="handleEditPlace(place.id)"
      @delete="handleOpenConfirmationModal(place.id)"
    />

    <EditPlaceModal
      :is-open="isEditModalOpen"
      :place="selectedItem"
      :is-loading="isLoading"
      @close="closeEditModal"
      @submit="handleSubmit"
    />

    <ConfirmationModal
      :is-open="isConfirmationModalOpen"
      :is-loading="isDeleting"
      :has-error="deleteError"
      @cancel="closeConfirmationModal"
      @confirm="handleDeletePlace"
      title="Ви дійсно хочете видалити улюблене місце?"
    />
    <IButton class="w-full mt-10" variant="gradient" @click="emit('create')">Додати маркер</IButton>
  </div>
</template>
