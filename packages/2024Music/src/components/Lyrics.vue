<script setup>
import { computed } from 'vue'
import Line from './Line.vue'

const props = defineProps({
  lyrics: String,
  strongLyrics: {
    type: Array,
    default: () => [],
  },
  onActive: Function,
})

const lyrics = computed(() => props.lyrics?.split('\n'))
const lyricsLastIndex = computed(() => lyrics.value.length - 1)
</script>

<template>
  <div class="h-screen flex flex-col justify-center">
    <Line
      v-for="(lyric, index) in lyrics"
      :key="lyric"
      :lyric="lyric"
      :is-first="index === 0"
      :is-last="index === lyricsLastIndex"
      :on-center="onActive"
    />
  </div>
</template>
