<script setup>
import { computed } from 'vue'

const props = defineProps({
  videoWidth: Number,
  videoHeight: Number,
  appendWidth: Number,
  idx: Number,
})

const traingleSide = computed(() => Math.ceil(props.videoWidth / 2 + props.appendWidth))
</script>

<template>
  <svg
    :style="{
      height: `${traingleSide}px`,
      width: `${traingleSide}px`,
      top: -traingleSide + videoHeight / 2,
      left: -appendWidth,
      rotate: `${45 * idx}deg`,
      transformOrigin: 'bottom right',
    }"
  >
    <polygon
      fill="#323232"
      stroke="black"
      stroke-width="2"
      :points="[
        [0, 0],
        [0, traingleSide],
        [traingleSide, traingleSide],
      ]"
    />
  </svg>
</template>
