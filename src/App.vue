<script setup>
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
// import HomepageView from './views/HomepageView.vue'
// import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
</script>

<template>
  <!-- <HomepageView /> -->

  <!-- <div class="bg-white h-screen w-[400px]">
    <FavoritePlaces />
  </div> -->

  <RegistrationForm @submit="(e) => console.log(e)" />
  <LoginForm @submit="console.log" />
</template>
