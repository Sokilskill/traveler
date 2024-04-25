<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: String,
  placeholder: String,
  type: {
    default: 'text',
    type: String
  }
})

defineOptions({
  inheritAttrs: false
})

const text = ref('')

const changeValue = (event) => {
  text.value = event.target.value
}
</script>

<template>
  <div class="w-full text-[#2C2C2C]">
    <label class="block">
      <span class="block text-xs px-3 mb-2">{{ props.label }}</span>
      <input
        class="w-full text-sm rounded-[4px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary"
        v-bind="{ ...$props, ...$attrs }"
        @input="changeValue"
      />

      <!--
        // додавання пропсів до елемента, а не до обгортки
        :type="props.type" 
        :placeholder="props.placeholder"
       
 // додавання пропсів до елемента можна використати v-bind додає всі пропси до цього елемента
 // але не будуть примінятися атрибути  
 v-bind="props" 
 
 //
 // додає пропси і атрибути
 v-bind="{...$props, ...$attrs}" 

        @input="changeValue"
      /> -->
    </label>
  </div>
</template>
