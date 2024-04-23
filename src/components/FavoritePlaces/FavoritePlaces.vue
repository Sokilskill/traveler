<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'
import { ref } from 'vue'
const counter = ref(0) // { value: 0 }
const user = ref({ name: 'Jack', age: 10 })

const increment = () => {
  counter.value += 1
}
const decrement = () => {
  counter.value -= 1
}

const newUserName = ref('')

const updateName = () => {
  user.value.name = newUserName.value
  newUserName.value = ''
}
</script>

<template>
  <div class="px-6">
    <h3 class="text-gray mb-4">Додані маркери</h3>
    <FavoritePlace :key="n" v-for="n in 4" />

    <p>{{ user.name }}</p>
    <input placeholder="Change name" v-model="newUserName" @keyup.enter="updateName" />

    <p class="text-center text-2xl" v-if="counter !== 10">Counter: {{ counter }}</p>

    <IButton
      variant="gradient"
      red="red"
      class="w-full mt-5"
      @click="increment"
      :disabled="counter === 10"
      >Додати</IButton
    >
    <IButton class="w-full mt-5" @click="decrement" :disabled="counter === 0">Відняти</IButton>

    <IButton class="w-full mt-10">Додати маркер</IButton>
  </div>
</template>
