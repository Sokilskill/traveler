<script setup>
import FormContainer from '../FormContainer.vue'
import IInput from '../../IInput/IInput.vue'
import IButton from '../../IButton/IButton.vue'
import { reactive, toRaw, watch } from 'vue'

const emit = defineEmits(['submit'])
const userData = reactive({
  email: '',
  password: ''
})

watch(
  userData,
  () => {
    console.log('user data changed')
  },
  { immediate: true }
)
</script>

<template>
  <FormContainer @submit.prevent="emit('submit', toRaw(userData))">
    <IInput class="mb-4" type="email" placeholder="Електронна пошта" v-model="userData.email" />
    <IInput type="password" placeholder="Пароль" v-model="userData.password" />
    <IButton class="mt-10 w-full" variant="gradient" type="submit">Увійти</IButton>
  </FormContainer>
</template>
