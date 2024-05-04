<script setup>
import IModal from '../IModal/IModal.vue'
import IInput from '../IInput/IInput.vue'
import InputImage from '../InputImage/InputImage.vue'
import IButton from '../IButton/IButton.vue'
import { computed, reactive } from 'vue'
import MarkerIcon from '../icons/MarkerIcon.vue'

const emit = defineEmits(['close', 'submit'])
const props = defineProps({
  isOpen: {
    default: false,
    type: Boolean
  }
})

const formData = reactive({
  title: '',
  description: '',
  img: ''
})

const handleUpload = (url) => {
  formData.img = url
}

const uploadText = computed(() => {
  return formData.img ? 'Натисніть тут, щоб змінити фото' : 'Натисніть тут, щоб додати фото'
})
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <form @submit.prevent="emit('submit', formData)" class="mw=[420px]">
      <div class="flex gap-1 justify-center font-bold text-center mb-10">
        <MarkerIcon /> Додати маркер
      </div>
      <IInput label="Локація" class="mb-4" v-model="formData.title" />
      <IInput label="Опис" type="textarea" class="mb-2" v-model="formData.description" />
      <div class="flex gap-2 items-center mb-10">
        <img v-if="formData.img" :src="formData.img" alt="img" class="w-10 h-10 object-cover" />
        <InputImage @uploaded="handleUpload">{{ uploadText }}</InputImage>
      </div>

      <IButton class="w-full" variant="gradient">Додати</IButton>
    </form>
  </IModal>
</template>
