<script setup>
import { onMounted, ref } from 'vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapSetting } from '../map/setting.js'
import FavoritePlaces from '../components/FavoritePlaces/FavoritePlaces.vue'
import MarkerIcon from '../components/icons/MarkerIcon.vue'
import { getFavoritePlaces } from '@/api/favorite-place/index.js'
import { useModal } from '../composables/useModal.js'
import CreateNewPlaceModal from '@/components/CreateNewPlaceModal/CreateNewPlaceModal.vue'
// const favoritePlaces = [
//   {
//     id: 1,
//     title: 'New place 1',
//     description: 'Super description 1',
//     img: '../src/assets/img/static-map.png',
//     lngLat: [30.523333, 50.490001]
//   },
//   {
//     id: 2,
//     title: 'New place 2',
//     description: 'Super description 2',
//     img: '../src/assets/img/static-map.png',
//     lngLat: [30.523333, 50.450001]
//   },
//   {
//     id: 3,
//     title: 'Lisnyky',
//     description: 'Super description 3 Lorem ',
//     img: '../src/assets/img/static-map.png',
//     lngLat: [30.523333, 50.320001]
//   }
// ]

const favoritePlaces = ref([])

const activeId = ref(null)
const map = ref(null)
const mapMarkerLngLat = ref(null)
const { isOpen, openModal, closeModal } = useModal()

const changeActiveId = (id) => {
  activeId.value = id
}

const changePlace = (id) => {
  const { lngLat } = favoritePlaces.value.find((place) => place.id === id)
  changeActiveId(id)
  map.value.flyTo({ center: lngLat, zoom: 12 })
}

const handleMapClick = ({ lngLat }) => {
  mapMarkerLngLat.value = [lngLat.lng, lngLat.lat]
}

onMounted(async () => {
  const { data } = await getFavoritePlaces()
  favoritePlaces.value = data
})
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-screen w-[400px]">
      <FavoritePlaces
        :items="favoritePlaces"
        :active-id="activeId"
        @place-clicked="changePlace"
        @create="openModal"
      />
      <CreateNewPlaceModal :is-open="isOpen" @close="closeModal" />
    </div>
    <div class="w-full h-full flex items-center justify-center text-2xl">
      <MapboxMap
        class="w-full h-full"
        :center="[30.523333, 50.450001]"
        :zoom="10"
        :access-token="mapSetting.apiToken"
        :map-style="mapSetting.style"
        @mb-click="handleMapClick"
        @mb-created="(mapInstance) => (map = mapInstance)"
      >
        <MapboxMarker v-if="mapMarkerLngLat" :lngLat="mapMarkerLngLat" anchor="bottom">
          <MarkerIcon class="h-8 w-8" />
        </MapboxMarker>

        <MapboxMarker
          v-for="place in favoritePlaces"
          :key="place.id"
          :lngLat="place.lngLat"
          anchor="bottom"
        >
          <button @click="changeActiveId(place.id)">
            <MarkerIcon class="h-8 w-8" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
