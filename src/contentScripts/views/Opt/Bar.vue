<script setup>
import { useSettingData } from '~/pinia/index'

const store = useSettingData()
// 主题
function toggleDark() {
  store.setting.isDarkMode = !store.setting.isDarkMode
}
watch(() => store.setting.isDarkMode, (val) => {
  if (val) {
    document.documentElement.classList.add('dark')
    document.documentElement.setAttribute('dark', '')
  }
  else {
    document.documentElement.classList.remove('dark')
    document.documentElement.removeAttribute('dark')
  }
}, { immediate: true })
// 路由
function handleRouter(path) {
  const url = window.location.href
  // 替换当前页面
  if (url.includes(path))
    return
  // TODO: 这里会导致页面刷新，需要优化
  window.location.href = `https://www.xiaohongshu.com/${path}`
}
</script>

<template>
  <div
    class="dock-wrap"
    fixed
    top-50
    right-10
    transform-translate-y-50
    z-10000
    rounded-full
    shadow-2xl
  >
    <div
      class="dock-content"
      p-2
    >
      <div class="dock-item">
        <a href="/explore">
          <div class="i-mingcute:home-4-line w-1em h-1em" />
        </a>
      </div>
      <div class="dock-item" @click="handleRouter('notification')">
        <div class="i-mingcute:notification-line w-1em h-1em" />
      </div>
      <div
        class="dock-item"
        @click="toggleDark"
      >
        <Transition name="fade">
          <div v-show="true" absolute>
            <line-md:sunny-outline-to-moon-loop-transition v-if="store.setting.isDarkMode" />
            <line-md:moon-alt-to-sunny-outline-loop-transition v-else />
          </div>
        </Transition>
        <Transition name="fade">
          <div v-show="true" absolute>
            <line-md:sunny-outline-to-moon-transition v-if="store.setting.isDarkMode" />
            <line-md:moon-to-sunny-outline-transition v-else />
          </div>
        </Transition>
      </div>
      <div class="dock-item">
        <mingcute:settings-3-line />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.dock-wrap {
  transition: background-color 0.3s;
  backdrop-filter: blur(10px);
}
.dock-content {
  width: 100%;
  height: 100%;
  transition: background-color 0.3s;
}
.divider {
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
}
.dock-item {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;

  backdrop-filter: blur(10px);
  transition: background-color 0.3s;
}
</style>
