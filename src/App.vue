<script setup>
import { ref } from 'vue'
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
// import HomepageView from './views/HomepageView.vue'
// import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
import CreateNewPlaceModal from './components/CreateNewPlaceModal/CreateNewPlaceModal.vue'

const isOpen = ref(false)
const closeModal = () => {
  isOpen.value = false
}
const openModal = () => {
  isOpen.value = true
}
</script>

<template>
  <!-- <HomepageView /> -->

  <!-- <div class="bg-white h-screen w-[400px]">
    <FavoritePlaces />
  </div> -->
  <button class="text-red-500 bg-amber-400 px-5 rounded-lg" @click="openModal">Open modal</button>
  <RegistrationForm @submit="(e) => console.log(e)" />
  <LoginForm @submit="console.log" />
  <CreateNewPlaceModal :is-open="isOpen" @close="closeModal" @submit="console.log" />
</template>
