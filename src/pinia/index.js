import { defineStore } from 'pinia'
import { useStorageLocal } from '~/composables/useStorageLocal'

// 创建一个新的 store
export const useSettingData = defineStore(setting, () => {
  const setting = useStorageLocal('setting', {
    isDarkMode: false,
    theme: 'auto',
    language: 'zh-cn',
  })

  return {
    setting,
  }
})
