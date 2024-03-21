<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

// onMounted(() => {
//   const dom = document.getElementById('link-guide')
//   const doms = document.getElementsByClassName('dropdown-nav')
//   dom.style.display = 'none'
//   for (let i = 0; i < doms.length; i++)
//     doms[i].style.display = 'none'
// })
</script>

<template>
  <div class="flex flex-col rounded-full bg-white dark:bg-black dark:text-white shadow-lg fixed right-10 top-[20%] z-[100]">
    <div class="flex flex-col items-center justify-center space-y-4 p-4">
      <button class="w-12 h-12 rounded-full bg-blue-500 text-white">
        发现
      </button>
      <button class="w-12 h-12 rounded-full reds-button-new-text">
        通知
      </button>
      <button @click="toggleDark()">
        切换
      </button>
    </div>
  </div>
</template>
