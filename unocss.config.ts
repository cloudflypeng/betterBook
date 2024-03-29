import { defineConfig } from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'
import presetWind from '@unocss/preset-wind'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetWind(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  shortcuts: {
    'panel-bg': 'bg-[rgba(255,255,255,0.5)] dark:bg-[rgba(0,0,0,0.5)] ',
    'panel-border': 'border border-gray-200 dark:border-gray-700',
    'panel-shadow': 'shadow-sm dark:shadow',
    'panel-text': 'text-gray-900 dark:text-gray-100',
    'panel-title': 'text-lg font-semibold',
    'panel-wrapper': 'p-2 rounded-lg panel-bg panel-border panel-shadow',
  },
})
