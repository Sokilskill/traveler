import { ref } from 'vue'

export const useMutation = ({ mutationFn, onSuccess, onError }) => {
  const data = ref()
  const isLoading = ref(false)
  const error = ref(null)

  const mutation = async (...arg) => {
    isLoading.value = true

    try {
      data.value = await mutationFn(...arg)
      error.value = null
      onSuccess?.(data)
    } catch (er) {
      error.value = er
      onError?.(error)
    } finally {
      isLoading.value = false
    }
  }

  return {
    data,
    isLoading,
    error,
    mutation
  }
}
