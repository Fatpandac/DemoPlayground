<script setup>
import { ref } from 'vue'
import { eventBus } from '../utils/eventBus'

const messages = ref([])
const { once: onceHello } = eventBus('eventBusHello')
const { on: onWorld } = eventBus('eventBusWorld')

onceHello(data => messages.value.push(data))
onWorld(data => messages.value.push(data))
</script>

<template>
  <div class="w-1/2 h-auto text-center">
    <p v-for="(message, index) in messages" :key="index" class="bg-pink-50 border-1 border-solid border-black m1">
      {{ message }}
    </p>
  </div>
</template>
