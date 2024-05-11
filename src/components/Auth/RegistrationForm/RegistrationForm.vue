<script setup>
import IButton from '@/components/IButton/IButton.vue'
import IInput from '@/components/IInput/IInput.vue'
import { ref } from 'vue'

const props = defineProps({
  isLoading: {
    default: false,
    type: Boolean
  }
})

const emit = defineEmits(['submit'])
const userData = ref({
  name: '',
  email: '',
  password: ''
})
</script>

<template>
  <form @submit.prevent="emit('submit', userData)">
    <IInput class="mb-4" label="Повне ім'я" v-model="userData.name" />
    <IInput
      class="mb-4"
      label="Електронна пошта"
      type="email"
      placeholder="email@gmail.com"
      v-model="userData.email"
    />
    <IInput label="Пароль" type="password" v-model="userData.password" />

    <IButton class="mt-10 w-full" variant="gradient" type="submit" :is-Loading="props.isLoading"
      >Створити аккаунт</IButton
    >
  </form>
</template>
