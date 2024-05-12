<script setup>
import { login } from '@/api/user'
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue'
import { useMutation } from '@/composables/useMutation'
import { useRouter } from 'vue-router'

const router = useRouter()

const {
  isLoading,
  error,
  mutation: handleLogin
} = useMutation({
  mutationFn: login,
  onSuccess: () => router.replace('/map')
})

// const handleLogin = async (userData) => {
//   isLoading.value = true
//   try {
//     await login(userData)
//     router.replace('/map')
//   } catch (error) {
//     console.log(error)
//   } finally {
//     isLoading.value = false
//   }
// }
</script>

<template>
  <LoginForm @submit="handleLogin" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500">{{ error.message }}</div>
</template>
