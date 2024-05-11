<script setup>
import FormContainer from '../FormContainer.vue'
import IInput from '../../IInput/IInput.vue'
import IButton from '../../IButton/IButton.vue'
import { ref, toRaw, watch } from 'vue'

const emit = defineEmits(['submit'])
const userData = ref({
  email: '',
  password: ''
})

watch(
  userData.value,
  () => {
    console.log('user data changed')
    localStorage.setItem('name', JSON.stringify(userData.value))
  },
  { immediate: true }
)
</script>

<template>
  <FormContainer @submit.prevent="emit('submit', toRaw(userData))">
    <IInput class="mb-4" type="email" label="Електронна пошта" v-model="userData.email" />
    <IInput type="password" label="Пароль" v-model="userData.password" />
    <IButton class="mt-10 w-full" variant="gradient" type="submit">Увійти</IButton>
  </FormContainer>
</template>
