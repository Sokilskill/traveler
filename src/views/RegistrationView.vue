<script setup>
import RegistrationForm from '../components/Auth/RegistrationForm/RegistrationForm.vue'
import { useRouter } from 'vue-router'
import { useMutation } from '@/composables/useMutation'
import { authService } from '@/api/authService'

const router = useRouter()

const {
  isLoading,
  error,
  mutation: handleRegisterUser
} = useMutation({
  mutationFn: (data) => {
    authService.registerUser(data)
  },
  onSuccess: () => router.replace('/map')
})

// const isLoading = ref(false)

// const handleRegisterUser = async (userData) => {
//   isLoading.value = true
//   try {
//     await registerUser(userData)
//     router.replace('/map')
//   } catch (error) {
//     console.error(error)
//   } finally {
//     isLoading.value = false
//   }
// }
</script>

<template>
  <RegistrationForm @submit="handleRegisterUser" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500">{{ error.message }}</div>
</template>
