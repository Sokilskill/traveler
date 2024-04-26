<script setup>
import IButton from '@/components/IButton/IButton.vue'
import IInput from '@/components/IInput/IInput.vue'
import { reactive, ref, toRaw } from 'vue'

const emit = defineEmits(['submit'])
const userData = reactive({
  name: '',
  email: '',
  password: ''
})

// const userData = ref({
//   name: '',
//   email: '',
//   password: ''
// })
</script>

<template>
  <!-- @submit.prevent="emit('submit', userData)"  якщо використовувати reactive поверне Proxy 
        @submit.prevent="emit('submit', toRaw(userData))"  якщо потрібно повертати об'єкт треба додати toRaw
  -->

  <form
    @submit.prevent="emit('submit', toRaw(userData))"
    class="max-w-[500px] w-full p-10 bg-white rounded-2xl"
  >
    <IInput class="mb-4" label="Повне ім'я" v-model="userData.name" />
    <IInput
      class="mb-4"
      label="Електронна пошта"
      type="email"
      placeholder="email@gmail.com"
      v-model="userData.email"
    />
    <IInput label="Пароль" type="password" v-model="userData.password" />

    <IButton class="mt-10 w-full" variant="gradient" type="submit">Створити аккаунт</IButton>
  </form>
</template>
