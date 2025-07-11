<script setup>
import { computed, ref, watch } from 'vue'
import { useResizeObserver, useScroll } from '@vueuse/core'
import Card from './components/card.vue'

const list = ref(
  Array.from({ length: 100 }, (_, i) => ({ value: i + 1, index: i })),
)
const listRef = ref(null)
const itemRef = ref(null)
const { y, arrivedState } = useScroll(listRef)

const itemHeight = computed(() => {
  if (!itemRef.value || !itemRef.value[0])
    return 50
  return itemRef.value[0].clientHeight
})

const showCount = ref(10)
useResizeObserver(listRef, () => {
  showCount.value = calcItemCount()
})

watch(arrivedState, () => {
  list.value.push(
    ...Array.from({ length: 10 }, (_, i) => ({
      value: list.value.length + i + 1,
      index: list.value.length + i,
    })),
  )
})

function calcItemCount() {
  if (!listRef.value || !itemRef.value || !itemHeight.value)
    return 0

  const visibleHeight = listRef.value.clientHeight
  return Math.ceil(visibleHeight / (itemHeight.value + 4)) + 1
}

const showItems = computed(() => {
  const startIndex = Math.max(0, Math.floor(y.value / (itemHeight.value + 4)))
  const endIndex = Math.min(
    list.value.length - 1,
    startIndex + showCount.value - 1,
  )

  return list.value.slice(startIndex, endIndex + 1)
})

const paddingHeight = computed(() => {
  if (showItems.value[0].index === 0)
    return { height: '0px' }

  return {
    height: `${showItems.value[0].index * itemHeight.value - 10}px`,
  }
})

const listType = ref('transform')

function transformPos(item) {
  return {
    transform: `translateY(${item.index * 4}px)`,
  }
}

function topPos(item) {
  return {
    top: `${item.index * (itemHeight.value + 4) + 16}px`,
    width: 'calc(100% - 64px)',
  }
}
</script>

<template>
  <div
    class="w-screen h-screen overflow-hidden flex flex-col justify-center items-center"
  >
    <h1 class="text-2xl mb-4">
      Virtual List
    </h1>
    <div class="mb-4 flex items-center gap-4">
      <label class="flex items-center gap-2">
        <input
          v-model="listType"
          type="radio"
          name="list-type"
          value="transform"
          checked
        >
        Use Transform
      </label>
      <label class="flex items-center gap-2">
        <input v-model="listType" type="radio" name="list-type" value="top">
        Use Top
      </label>
    </div>
    <div
      ref="listRef"
      class="w-96 h-96 min-w-[200px] bg-gray-100 rounded-lg shadow-lg p-4 overflow-y-auto relative scrollbar resize"
    >
      <div :style="paddingHeight" />
      <div
        v-for="(item, key) in showItems"
        ref="itemRef"
        :key="key"
        class="bg-white p-4 rounded shadow"
        :class="{
          absolute: listType === 'top',
        }"
        :style="listType === 'transform' ? transformPos(item) : topPos(item)"
      >
        <Card :item="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 0px;
}
.scrollbar::-webkit-scrollbar-thumb {
  background: transparent;
}
.scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>
