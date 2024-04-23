<script setup>
import { defineProps } from 'vue'

const props = defineProps(['variant', 'red'])

const colorRed = props.red ? 'text-red-700' : 'text-white'
console.log('colorRed', colorRed)
const bgStyles =
  props.variant === 'gradient' ? 'bg-gradient-to-r from-[#FFA279] to-[#F3743D]' : 'bg-[#FFA279]'
</script>

<template>
  <button
    class="bg-[#FFA279] rounded-xl py-3 px-10 text-white font-bold -tracking-wider"
    :class="[colorRed, bgStyles]"
  >
    <slot></slot>
  </button>
</template>
