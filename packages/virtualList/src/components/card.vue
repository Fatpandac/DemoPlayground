<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div>
    {{ props.item.value }}
  </div>
</template>
