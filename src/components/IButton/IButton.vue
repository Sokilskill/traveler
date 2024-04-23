<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  variant: {
    required: false,
    type: String
  },
  red: {
    default: 'text-white',
    required: false,
    type: String,
    validator: (value) => {
      return ['1', 'red', 'text-white', 'true'].includes(value)
    }
  }
})

const colorRed =
  props.red === '1' || props.red === 'red' || props.red === 'true' ? 'text-red-700' : 'text-white'
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
