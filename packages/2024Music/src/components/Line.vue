<script setup>
import { useElementBounding } from '@vueuse/core'
import { computed, ref, watch } from 'vue'

const props = defineProps({
  lyric: String,
  isFirst: Boolean,
  isLast: Boolean,
  onCenter: Function,
})

const lyricRef = ref(null)

const { top } = useElementBounding(lyricRef)
const strongPos = computed(() => {
  const isMobile = window.innerWidth < 640
  return isMobile ? 0 : 0
})

const isCenter = computed(() => {
  const lineStrongRangeTop = window.innerHeight / 2 + strongPos.value - 30
  const lineStrongRangeBottom = window.innerHeight / 2 + strongPos.value + 30
  return lineStrongRangeTop < top.value && top.value < lineStrongRangeBottom
})

watch(isCenter, () => {
  if (props.isFirst && isCenter)
    props.onCenter()
  if (props.isLast && isCenter)
    props.onCenter()
})
</script>

<template>
  <p
    ref="lyricRef" class="text-3xl leading-relaxed! lg:text-4xl font-bold text-black text-pretty my-0"
    :class="isCenter ? 'line-animate-fadeIn' : 'line-animate-fadeOut'"
  >
    {{ lyric }}
  </p>
</template>

<style scoped>
.line-animate-fadeIn {
  animation: fadeIn 0.3s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0.3;
  }

  to {
    opacity: 1;
  }
}

.line-animate-fadeOut {
  animation: fadeOut 0.3s forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0.3;
  }
}
</style>
