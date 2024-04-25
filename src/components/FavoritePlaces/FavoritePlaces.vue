<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'
import { ref } from 'vue'

const user = ref({ name: 'Jack', age: 10 })

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

    <button @click="(()=> console.log('click3'))" @keydown.space.a="()=> console.log('click == a')">click me</button>

    <a href="/" class="block text-green-600" @click.prevent="()=> console.log('no refresh')" >link without refresh page</a>

    <IButton class="w-full mt-10">Додати маркер</IButton>
  </div>
</template>
