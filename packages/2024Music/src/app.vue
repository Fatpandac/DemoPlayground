<script setup>
import { ref } from 'vue'
import Lyrics from './components/Lyrics.vue'

const data = [
  {
    album: {
      name: '小林不动产',
      artist: '林家谦',
      cover: '/images/s34895610.jpg',
      albumLink: 'https://music.douban.com/subject/36942259/',
      artistLink: 'https://www.douban.com/personage/36053463/',
    },
    lyrics:
      '期待 開心的事 越易碰上\n 不變應變方向\n純良地 簡單生活 就是信仰\n空氣也變善良',
  },
  {
    album: {
      name: '名字',
      artist: '李荣浩',
      cover: '/images/s34982294.jpg',
      albumLink: 'https://music.douban.com/subject/37080410/',
      artistLink: 'https://www.douban.com/personage/27492662/',
    },
    lyrics:
      '故事的開頭 到故事的最後\n從紅著臉微笑著 到紅著眼淚流\n曾經熟悉的名字 今後列為失蹤人口',
  },
  {
    album: {
      name: '小霞3.0',
      artist: '小霞',
      cover: '/images/s34737799.jpg',
      albumLink: 'https://music.douban.com/subject/36660948/',
      artistLink: 'https://www.douban.com/personage/27492513/',
    },
    lyrics:
      '我和他的故事 美的如此動人\n包括我自己 也經常讀到彷彿在未來\n誰會告訴我呀 為何天空那麼大\n一望即無邊 又無法到盡頭',
  },
  {
    album: {
      name: '艳火',
      artist: '张悬',
      cover: '/images/s33033575.jpg',
      albumLink: 'https://music.douban.com/subject/36660948/',
      artistLink: 'https://www.douban.com/personage/27492513/',
    },
    lyrics:
      '於是你不斷地愛我\n我能如何便如何\n在遙遠的路上即使塵埃看今夜豔火\n我等你在前方回頭 而我不回頭 你要不要我\n你要不要我',
  },
  {
    album: {
      name: 'Survival Rules 2024',
      artist: '傻子与白痴',
      cover: '/images/s34721615.jpg',
      albumLink: 'https://music.douban.com/subject/36681770/',
      artistLink: 'https://www.douban.com/personage/35845301/',
    },
    lyrics:
      'Love, it\'s easy\nForgiveness is easy\nGive in is easy\nLong day, faded\nLong day is fading',
  },
  {
    album: {
      name: 'Welcome to the Jungle',
      artist: 'Guns N\' Roses',
      cover: '/images/s4717274.jpg',
      albumLink: 'https://music.douban.com/subject/1401794/',
      artistLink: 'https://www.douban.com/personage/35846400/',
    },
    lyrics:
      'Welcome to the jungle, it gets worse here everyday\nYou learn to live like an animal in the jungle where we play\nIf you got a hunger for what you see, you\'ll take it eventually\nYou can have anything you want, but you better not take it from me',
  },
  {
    album: {
      name: '御花园',
      artist: '苏打绿',
      cover: '/images/s34945228.jpg',
      albumLink: 'https://music.douban.com/subject/36945018/',
      artistLink: 'https://www.douban.com/personage/35848229/',
    },
    lyrics:
      '窮奢極欲的內心化做 蜜糖一樣的嘴唇\n玉液瓊漿的生活演成 奉獻犧牲的亢奮\n公正無私的法律變身 嚇鳥用的稻草人\n生靈塗炭的結局是否 是種巧合的緣份',
  },
  {
    album: {
      name: '一个短篇',
      artist: '腰乐队',
      cover: '/images/s27289592.jpg',
      albumLink: 'https://music.douban.com/subject/25893150/',
      artistLink: 'https://www.douban.com/personage/35841958/',
    },
    lyrics:
      '幽暗的最高頻道還在\n為全城遮蓋下一百年的昂貴謎底\n他倚靠在令人害羞的禮品堆裡\n冉冉睡去',
  },
  {
    album: {
      name: '继续',
      artist: '崔健',
      cover: '/images/s33979820.jpg',
      albumLink: 'https://music.douban.com/subject/35398647/',
      artistLink: 'https://www.douban.com/personage/27230348/',
    },
    lyrics:
      '身体站起来 要带脑袋出去\n推翻这墙体 呼吸空气\n大棒子落下 击打我如雨\n你随我站起 身体颤栗\n仅仅是站立 在出生的土地\n天空压下来 考验我的耐力\n你的身体弯曲 为我哭泣\n 你的心却要我 继续',
  },
  {
    album: {
      name: 'F',
      artist: '李志',
      cover: '/images/s27282325.jpg',
      albumLink: 'https://music.douban.com/subject/25886444/',
      artistLink: 'https://music.douban.com/musician/143517/',
    },
    lyrics:
      '轰轰烈烈尔虞我诈的世界生物分解\n一阵眩晕过后再看不见地上的鲜血\n世界在变我操蛋的理想还不能实现\n世界在变我操蛋的理想还不能实现',
  },
]

const currentAlbum = ref(data[0])
</script>

<template>
  <div class="flex flex-col sm:flex-row sm:justify-center sm:w-[calc(100vw - 5rem)] sm:gap-10">
    <div class="w-screen h-fit bg-white pt-5 pb-3 sm:w-1/4 sm:flex sm:h-screen sm:justify-center sm:items-center sm:pt-0 sm:pb-0 sticky top-0 flur">
      <div class="flex flex-col items-center sm:w-full">
        <img :src="currentAlbum.album.cover" class="w-[50vw] sm:w-full rounded-md shadow-sm aspect-square overflow-hidden">
        <div class="flex flex-col items-start w-[50vwjkkk] sm:w-full">
          <a class="text-xl sm:text-2xl mt-2 text-gray-700 line-clamp-1 no-underline hover:text-gray-900" :href="currentAlbum.album.albumLink">
            {{ currentAlbum.album.name }}
          </a>
          <a class="text-md sm:text-lg text-gray-600 no-underline hover:text-gray-800" :href="currentAlbum.album.artistLink">
            {{ currentAlbum.album.artist }}
          </a>
        </div>
      </div>
    </div>
    <div class="px-6 pb-18 sm:w-3/7 sm:pt-35 sm:pb-10 z-[-1]">
      <Lyrics
        v-for="(item, index) in data" :key="item.album.name" :lyrics="item.lyrics"
        :on-active="() => (currentAlbum = data[index])"
      />
    </div>
  </div>
</template>

<style scoped>
.flur {
  box-shadow: 0px 11px 20px 13px white;
}
</style>
