<script setup>
import { onMounted, ref } from 'vue'
import { useAnimate, useElementSize } from '@vueuse/core'
import Traingle from './components/traingle.vue'

const FIX_VIDEO_BLACK_WIDTH = 6

const video = ref(null)
const videoBox = ref(null)
const { width: videoWidth, height: videoHeight } = useElementSize(videoBox)

const tList = ref([])

function openCameraAnimate() {
  const options = {
    fill: 'forwards',
    duration: 800,
    easing: 'ease-in-out',
  }

  tList.value.map(item =>
    useAnimate(
      item,
      {
        // 使得三角形形成一个类似圆形的开口并移出
        transform: `translate( 
          ${Math.tan(Math.PI / 8) * videoWidth.value}px, 
          -${videoWidth.value}px)`,
      },
      options,
    ),
  )
  useAnimate(video, { filter: 'brightness(1)' }, options)
}

onMounted(() => {
  // 调用摄像头
  navigator.mediaDevices
    .getUserMedia({
      video: {
        height: videoHeight.value,
        width: videoWidth.value + FIX_VIDEO_BLACK_WIDTH,
      },
    })
    .then((stream) => {
      video.value.srcObject = stream
    })
    .catch((error) => {
      console.error('访问摄像头失败:', error)
    })
  // 摄像头内容加载好后显示并播放动画
  video.value.onloadedmetadata = () => {
    video.value.play()
    openCameraAnimate()
  }
})
</script>

<template>
  <div class="h-screen w-screen flex justify-center items-center">
    <div
      ref="videoBox"
      class="w-2/3 border-gray-200 rounded-md border-3 border-solid
      shadow-black aspect-video box-content relative overflow-hidden"
    >
      <div
        class="relative"
        :style="{
          width: `${videoWidth}px`,
          height: `${videoHeight}px`,
        }"
      >
        <video
          ref="video"
          class="rounded-md w-full h-full"
          style="filter: brightness(0.1)"
        />
      </div>
      <Traingle
        v-for="(_item, index) in Array(8)"
        ref="tList"
        :key="index"
        class="absolute"
        :idx="index"
        :video-height="videoHeight"
        :video-width="videoWidth"
        :append-width="150"
      />
    </div>
  </div>
</template>
