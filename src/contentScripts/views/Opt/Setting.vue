<script setup>
import { useSettingData } from '~/pinia/index'
import ToggleSwitch from '~/components/Switch.vue'
import BSelect from '~/components/Select.vue'

const store = useSettingData()
function handleClose() {
  store.setting.showSettingPanel = false
}
</script>

<template>
  <!-- 使用tailwindcss 创建一个modal框 占据全屏点旁边能关掉 -->
  <div
    v-show="store.setting.showSettingPanel"
    class="fixed z-10 inset-0 overflow-y-auto transition-all duration-300"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="flex justify-center min-h-screen items-center">
      <div class="fixed w-full h-full" @click="handleClose" />

      <!-- Modal Content -->
      <div class="bb-glass panel-wrapper rounded-lg w-[70%] h-[85vh] px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
        <!-- header -->
        <div
          class="flex justify-between text-4xl"
        >
          <h2>设置</h2>
          <button @click="handleClose">
            <div class="i-line-md:menu-to-close-alt-transition w-1em h-1em" />
          </button>
        </div>
        <hr class="bb-hr">
        <!-- content -->
        <div class="text-2xl">
          <div>首页tab排序</div>
          <div class="flex justify-between border-b border-blue-200">
            <span>测试</span>
            <BSelect :options="[{ text: 'optin1', value: 1 }]" />
          </div>
          <div class="flex justify-between border-b border-blue-200">
            显示搜索栏
            <ToggleSwitch v-model="store.setting.showSearch" />
          </div>
          <div class="flex justify-between border-b border-blue-200">
            显示原侧边栏
            <ToggleSwitch v-model="store.setting.showOriginalSidebar" />
          </div>
          <div>元素大小调节</div>
        </div>
      </div>
    </div>
  </div>
</template>
