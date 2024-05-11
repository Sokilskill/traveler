<script setup>
import IInput from '../../IInput/IInput.vue'
import IButton from '../../IButton/IButton.vue'
import { ref } from 'vue'

const props = defineProps({
  isLoading: {
    default: false,
    type: Boolean
  }
})

const emit = defineEmits(['submit'])
const userData = ref({
  email: '',
  password: ''
})
</script>

<template>
  <form @submit.prevent="emit('submit', userData)">
    <IInput class="mb-4" type="email" label="Електронна пошта" v-model="userData.email" />
    <IInput type="password" label="Пароль" v-model="userData.password" />
    <IButton class="mt-10 w-full" variant="gradient" type="submit" :is-loading="props.isLoading"
      >Увійти</IButton
    >
  </form>
</template>
