import { defineStore } from 'pinia'
import { useStorageLocal } from '~/composables/useStorageLocal'

// 创建一个新的 store
export const useSettingData = defineStore(setting, () => {
  const setting = useStorageLocal('setting', {
    isDarkMode: false,
    theme: 'auto',
    language: 'zh-cn',
    // 设置面板
    showSettingPanel: false,
    showSearch: true,
    showOriginalSidebar: true, // 原始侧边栏
    // 主题颜色
    mainColor: '#1890ff',
  })

  return {
    setting,
  }
})
