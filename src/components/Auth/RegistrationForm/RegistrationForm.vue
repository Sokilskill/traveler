<script setup>
import IButton from '@/components/IButton/IButton.vue'
import IInput from '@/components/IInput/IInput.vue'
</script>

<template>
  <form class="max-w-[500px] w-full p-10 bg-white rounded-2xl">
    <IInput class="mb-4" label="Повне ім'я" />
    <IInput
      class="mb-4"
      label="Електронна пошта"
      type="email"
      placeholder="email@gmail.com"
      disabled
    />
    <IInput label="Пароль" type="password" @input="(e) => console.log(e.target.value)" />

    <IButton class="mt-10 w-full" variant="gradient">Створити аккаунт</IButton>
  </form>
</template>
