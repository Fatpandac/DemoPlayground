<script setup>
import { eventBus } from './utils/eventBus'
import MessageBoardLeft from './components/MessageBoardLeft.vue'
import MessageBoardRight from './components/MessageBoardRight.vue'

const { emit: emitHello } = eventBus('eventBusHello')
const { emit: emitWorld } = eventBus('eventBusWorld')
</script>

<template>
  <div class="h-screen w-screen flex flex-col justify-center items-center">
    <div class="flex justify-center items-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-0 m-10 select-none"
        @click="emitHello('Hello')"
      >
        Send Hello
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-0 m-10 select-none"
        @click="emitWorld('World')"
      >
        Send World
      </button>
    </div>

    <div
      class="w-2/3 border-gray-200 rounded-md border-3 border-solid shadow-black aspect-video box-content relative overflow-hidden flex-row justify-center flex items-start"
    >
      <MessageBoardLeft />
      <MessageBoardRight />
    </div>
  </div>
</template>
