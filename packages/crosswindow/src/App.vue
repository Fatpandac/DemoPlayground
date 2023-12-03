<script setup>
import { onDeactivated, onMounted, ref, watch } from "vue";
import { useDraggable, watchThrottled } from "@vueuse/core";

const bc = new BroadcastChannel("crosswindow");

const oldX = ref(window.screenX);
const oldY = ref(window.screenY);
const el = ref();
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
});

let interval = null;

onMounted(async () => {
  interval = setInterval(function () {
    oldX.value = window.screenX;
    oldY.value = window.screenY;
  }, 500);
});

onDeactivated(() => {
  clearInterval(interval);
});

watchThrottled([x, y], (value) => {
  const newValue = [oldX.value + value[0], oldY.value + value[1]];

  bc.postMessage(newValue);
});

bc.onmessage = (ev) => {
  const [passX, passY] = ev.data;

  x.value = passX - oldX.value;
  y.value = passY - oldY.value;
};
</script>

<template>
  <div
    class="h-screen w-screen flex justify-center items-center select-none overflow-hidden"
  >
    <span>{{ oldX }}</span>
    <span>{{ oldY }}</span>
    <span>[{{ x }}, {{ y }}]</span>
  </div>
  <div
    class="h-40 w-40 bg-blue-300 fixed cursor-grab"
    ref="el"
    :style="style"
  ></div>
</template>
