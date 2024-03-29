<script setup lang="ts">
import 'uno.css'
import useShow from '../use/useShow'
import Bar from './Opt/Bar.vue'
import Setting from './Opt/Setting.vue'

import { useSettingData } from '~/pinia/index'

const store = useSettingData()
useShow()
</script>

<template>
  <div :class="store.setting.isDarkMode ? 'dark' : ''">
    <Bar />
    <Setting />
  </div>
</template>
