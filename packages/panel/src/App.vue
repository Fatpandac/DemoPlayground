<template>
  <div class="w-screen h-screen overflow-hidden">
    <div
      class="top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-2/3 border-gray-50 rounded-md border-3 border-solid shadow-black fixed z-20 bg-img-dot aspect-video"
    />
    <div
      class="rounded-full -translate-x-[50%] -translate-y-[50%] bg-blue-500 fixed z-10"
      v-for="(item, index) of moveList"
      :style="{
        top: `${item[1]}px`,
        left: `${item[0]}px`,
        width: `${50 - index}px`,
        height: `${50 - index}px`,
      }"
    ></div>
  </div>
</template>

<script setup>
import { useMouse } from "@vueuse/core";
import { ref, watch } from "vue";

const moveList = ref([]);

const { x, y } = useMouse();

watch([x, y], (newValue) => {
  moveList.value = [newValue, ...moveList.value].slice(0, 20);
});
</script>

