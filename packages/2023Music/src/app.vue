<script setup>
import MusicBoard from './components/MusicBoard.vue'

const data = [
  {
    album: {
      name: '这一切没有想象的那么糟',
      artist: '万晓利',
      cover: '/images/s1951498.jpg',
      albumLink: 'https://music.douban.com/subject/1945148/',
      artistLink: 'https://music.douban.com/musician/104586/',
    },
    lyrics:
      '暴风雨来临那一天\n迷途的羔羊还没回来\n铁匠铺传来了叮当叮当声\n这一切没有想像的那么糟',
    strongLyrics: [3],
    date: '2023-12-26',
  },
  {
    album: {
      name: 'Young Fresh Chin II',
      artist: '夏之禹',
      cover: '/images/s34525382.jpg',
      albumLink: 'https://music.douban.com/subject/36400683/',
      artistLink: 'https://music.douban.com/musician/134208/',
    },
    lyrics:
      '忍耐和坚持是这个民族最伟大的品性\n总会好的 总会好的\n失去了再多都不可怕只要你们敢想敢拼\n总会好的 总会好的\nUh 但我实在没有办法相信',
    strongLyrics: [4],
    date: '2023-11-23',
  },
  {
    album: {
      name: '没有鸟鸣，关上窗吧',
      artist: '声音碎片',
      cover: '/images/s32319187.jpg',
      albumLink: 'https://music.douban.com/subject/33446085/',
      artistLink: 'https://music.douban.com/musician/104502/',
    },
    lyrics:
      '再沒有什麽\n天長地久了\n一切都轟轟烈烈速朽\n眼看他起高樓\n看他宴賓客\n成王敗寇',
    date: '2023-10-26',
  },
  {
    album: {
      name: '20世纪的幻想 第三章',
      artist: '白皮书',
      cover: '/images/s34161767.jpg',
      albumLink: 'https://music.douban.com/subject/35816965/',
      artistLink: 'https://music.douban.com/musician/141989/',
    },
    lyrics:
      '舞台上的闹剧 到底除了去接受 还有什么可以选择\n年轻的人 举起你的手\n你们除了去接受 还能留下什么选择',
    strongLyrics: [2],
    date: '2023-10-09',
  },
  {
    album: {
      name: '春游',
      artist: '窦靖童',
      cover: '/images/s34537323.jpg',
      albumLink: 'https://music.douban.com/subject/36354802/',
      artistLink: 'https://music.douban.com/musician/129606/',
    },
    lyrics:
      '因為我害怕不被喜歡和接受\n害怕不被喜歡 不被接受\n包裹起來自我感動',
    strongLyrics: [2],
    date: '2023-06-20',
  },
  {
    album: {
      name: 'F',
      artist: '李BB',
      cover: '/images/s27282325.jpg',
      albumLink: 'https://music.douban.com/subject/25886444/',
      artistLink: 'https://music.douban.com/musician/143517/',
    },
    lyrics:
      '轰轰烈烈尔虞我诈的世界生物分解\n一阵眩晕过后再看不见地上的鲜血\n世界在变我操蛋的理想还不能实现\n世界在变我操蛋的理想还不能实现',
    strongLyrics: [2],
    date: '2023-06-04',
  },
  {
    album: {
      name: '瓦合',
      artist: '草东没有派对',
      cover: '/images/s34502310.jpg',
      albumLink: 'https://music.douban.com/subject/36337784/',
      artistLink: 'https://music.douban.com/musician/133281/',
    },
    lyrics:
      '拿着笔想写点东西\n以为是武器能伸张正义\n没人理也没关系\n至少我还有你\n',
    strongLyrics: [0, 1],
    date: '2023-05-16',
  },
  {
    album: {
      name: '未来的宝藏',
      artist: 'C.S.B.Q',
      cover: '/images/s33849503.jpg',
      albumLink: 'https://music.douban.com/subject/35394211/',
      artistLink: 'https://music.douban.com/subject_search?search_text=C.S.B.Q%E4%B9%90%E9%98%9F',
    },
    lyrics:
      '你把所有的明天 遗忘在温暖的夏天\n琉璃瓦护城河旁边 流淌着真理与信念\n让所有的过去 全部都消失在眼前\n过去的愤怒的少年 永远都到不了明天\n让所有的历史 全部都消逝在时间\n过去的残缺的真实 永远都到不了明天',
    strongLyrics: [1],
    date: '2023-04-13',
  },
  {
    album: {
      name: '状态',
      artist: '当代电影大师',
      cover: '/images/s33508245.jpg',
      albumLink: 'https://music.douban.com/subject/34870527/',
      artistLink: 'https://music.douban.com/subject_search?search_text=%E5%BD%93%E4%BB%A3%E7%94%B5%E5%BD%B1%E5%A4%A7%E5%B8%88',
    },
    lyrics:
      '世界永遠美麗 世界永遠美麗\n只要你不在意 有人正在死去\n世界永遠美麗 世界永遠美麗\n只要你不在意 只要你不在意',
    strongLyrics: [0, 1],
    date: '2023-03-05',
  },
  {
    album: {
      name: '醜奴兒',
      artist: '草东没有派对',
      cover: '/images/s28541447.jpg',
      albumLink: 'https://music.douban.com/subject/26753594/',
      artistLink: 'https://music.douban.com/musician/133281/',
    },
    lyrics:
      '請別舉起手槍 喔這裡沒有反抗的人\n不用再圍剿 喔這裡沒有反抗的人\n反抗的人\n反抗的人\n',
    strongLyrics: [0],
    date: '2023-02-06',
  },
  {
    album: {
      name: '冀西南林路行',
      artist: '万能青年旅店',
      cover: '/images/s33783178.jpg',
      albumLink: 'https://music.douban.com/subject/35292992/',
      artistLink: 'https://music.douban.com/musician/104585/',
    },
    lyrics:
      '西郊有密林 助君出重围\n西郊有密林 助君出重围\n人间明暗 人间明暗\n人间明暗 人间明暗',
    strongLyrics: [1],
    date: '2023-01-21',
  },
  {
    album: {
      name: '相见恨晚',
      artist: '腰乐队',
      cover: '/images/s272895.jpg',
      albumLink: 'https://music.douban.com/subject/25893150/',
      artistLink: 'https://music.douban.com/musician/107343/',
    },
    lyrics:
      '幽暗的最高頻道還在\n為全城遮盖下一百年的昂貴谜底\n他倚靠在令人害羞的禮品堆裡\n冉冉睡去',
    strongLyrics: [0],
    date: '2023-01-06',
  },
  {
    album: {
      name: '冀西南林路行',
      artist: '万能青年旅店',
      cover: '/images/s33783178.jpg',
      albumLink: 'https://music.douban.com/subject/35292992/',
      artistLink: 'https://music.douban.com/musician/104585/',
    },
    lyrics: '大雾重重\n时代喧哗造物忙\n火光忷忷\n指引盗寇入太行\n',
    strongLyrics: [2],
    date: '2023-01-16',
  },
  {
    album: {
      name: '这个世界会好吗',
      artist: '李BB',
      cover: '/images/s2745500.jpg',
      albumLink: 'https://music.douban.com/subject/27178897/',
      artistLink: 'https://www.fatpandac.com/404',
    },
    lyrics:
      '妈妈 这种失落会持久吗\n这个世界会好吗\n 忘记一些隐秘的委屈\n在回头观望的时候迷失了自己',
    strongLyrics: [1, 2],
    date: '2023-01-01',
  },
].reverse()
</script>

<template>
  <div class="px-5 md:px-10 lg:px-20 overflow-hidden">
    <div class="h-[30vh] relative line">
      <div class="ml-5 md:ml-9 flex h-full justify-center flex-col w-fit relative">
        <p class="text-2xl md:text-3xl leading-relaxed! font-bold text-black text-pretty">
          你们听摇滚吗？
        </p>
        <p class="text-2xl md:text-3xl leading-relaxed! font-bold text-black text-pretty">
          你们不听摇滚啊!!
        </p>
        <p class="text-3xl md:text-5xl leading-relaxed! font-bold text-black text-pretty">
          那我跟你们聊什么啊!!!
        </p>
      </div>
    </div>
    <MusicBoard
      v-for="item in data"
      :key="item.date"
      :album="item.album"
      :lyrics="item.lyrics"
      :strong-lyrics="item.strongLyrics"
      :date="item.date"
    />
  </div>
</template>

<style>
.line::before {
  content: "";
  position: absolute;
  height: 100%;
  left: calc(.75rem / 2 - 1px);
  border-left: 2px solid hsla(210, 18%, 87%, 1);
}
</style>
