import { watch } from 'less'
import { useSettingData } from '~/pinia/index'

const store = useSettingData()

const dom = ref(document.getElementsByClassName('mask-paper')[0])

watch(() => store.setting.showSearch, (value) => {
  if (dom.value)
    dom.value.style.display = value ? 'block' : 'none'
})

// 根据store中的show配置, 生成css样式, 隐藏某些元素
