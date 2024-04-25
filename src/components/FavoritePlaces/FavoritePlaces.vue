<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'
import { computed, ref } from 'vue'
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

const disabledColor = computed(() => {
  if (counter.value <= 2) {
    return 'bg-red-200'
  } else if (counter.value <= 4) {
    return 'bg-red-400'
  } else if (counter.value <= 6) {
    return 'bg-red-500'
  } else if (counter.value <= 8) {
    return 'bg-red-700'
  }else {
    return 'bg-orange-950'
  }
})
</script>

<template>
  <div class="px-6">
    <h3 class="text-gray mb-4">Додані маркери</h3>
    <FavoritePlace :key="n" v-for="n in 4" />

    <p>{{ user.name }}</p>
    <div :class="disabledColor" >{{ disabledColor }}</div>
    <input placeholder="Change name" v-model="newUserName" @keyup.enter="updateName" />

    <p class="text-center text-2xl">Counter: {{ counter }}</p>

    <IButton
      :class="disabledColor"
      class="w-full mt-5"
      @click="increment"
      :disabled="counter === 10"
      >Додати</IButton
    >
    <IButton class="w-full mt-5" @click="decrement" :disabled="counter === 0">Відняти</IButton>

    <IButton class="w-full mt-10">Додати маркер</IButton>
  </div>
</template>
