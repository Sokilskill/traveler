<script setup>
import { MapboxMap } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapSetting } from './map/setting'
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'

const favoritePlaces = [
  {
    id: 1,
    title: 'New place 1',
    description: 'Super description 1',
    img: '../src/assets/img/static-map.png',
    lngLat: [30.523333, 50.490001]
  },
  {
    id: 2,
    title: 'New place 2',
    description: 'Super description 2',
    img: '../src/assets/img/static-map.png',
    lngLat: [30.523333, 50.450001]
  },
  {
    id: 3,
    title: 'Lisnyky',
    description: 'Super description 3 Lorem ',
    img: '../src/assets/img/static-map.png',
    lngLat: [30.523333, 50.320001]
  }
]
</script>

<template>
  <!-- <HomepageView /> -->
  <main class="flex h-screen">
    <div class="bg-white h-screen w-[400px]">
      <FavoritePlaces :items="favoritePlaces" />
    </div>
    <div class="w-full h-full flex items-center justify-center text-2xl">
      <MapboxMap
        class="w-full h-full"
        :center="[30.523333, 50.450001]"
        :zoom="10"
        :access-token="mapSetting.apiToken"
        :map-style="mapSetting.style"
      >
      </MapboxMap>
    </div>
  </main>
</template>
