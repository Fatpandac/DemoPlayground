<script setup>
defineProps({
  album: {
    name: String,
    artist: String,
    cover: String,
    albumLink: String,
    artistLink: String,
  },
  lyrics: String,
  date: String,
  strongLyrics: {
    type: Array,
    default: () => [],
  },
  show: Boolean,
})
</script>

<template>
  <div class="flex pt-2 pb-12 line relative flex-col sm:flex-row">
    <div class="w-full sm:w-1/2 max-w-md">
      <div class="sticky top-0">
        <div class="w-3 h-3 rounded-full bg-gray-700 mr-2 mt-[2px] absolute" />
        <div class="ml-5 md:ml-9">
          <p class="text-lg font-bold text-gray-600 mb-4 leading-none">
            {{ date }}
          </p>
          <img
            class="w-full aspect-square rounded-lg shadow-black shadow-sm"
            referrerpolicy="no-referrer"
            loading="lazy"
            :src="album.cover"
          >
          <a
            class="text-2xl mt-2 text-gray-700 line-clamp-1 no-underline hover:text-gray-900"
            :href="album.albumLink"
          >
            {{ album.name }}
          </a>
          <a
            class="text-lg text-gray-600 no-underline hover:text-gray-800"
            :href="album.artistLink"
          >
            {{ album.artist }}
          </a>
        </div>
      </div>
    </div>
    <div
      class="ml-5 md:ml-9 items-start justify-center flex flex-col border-b-gray-300 border-b-1 border-b-solid py-10 md:my-0 sm:w-full"
    >
      <p
        v-for="(lyric, index) in lyrics.split('\n')"
        :key="lyric"
        class="text-3xl leading-relaxed! lg:text-4xl font-bold text-black text-pretty"
        :class="strongLyrics.includes(index) ? 'opacity-100' : 'opacity-30'"
      >
        {{ lyric }}
      </p>
    </div>
  </div>
</template>

<style>
.line::before {
  content: "";
  position: absolute;
  height: 100%;
  top: 0px;
  left: calc(0.75rem / 2 - 1px);
  border-left: 2px solid hsla(210, 18%, 87%, 1);
}

.line:last-child::before {
  height: 10px;
}
</style>
