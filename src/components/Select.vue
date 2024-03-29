<script>
import { ref, watch } from 'vue'

export default {
  name: 'BSelect',
  props: {
    modelValue: {
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const selected = ref(props.modelValue)

    watch(selected, (newValue) => {
      emit('update:modelValue', newValue)
    })

    return {
      selected,
    }
  },
}
</script>

<template>
  <div>
    <select v-model="selected" class="px-4 py-2 rounded-full border rounded bg-white text-black dark:bg-gray-800 dark:text-white">
      <option v-for="option in options" :key="option.value" :value="option.value" class="p-2 bg-blue-500 text-white hover:bg-blue-700">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.select {
  --bg-color: var(--theme-color, #fff);
  --text-color: var(--theme-text-color, #000);
}

.dark .select {
  --bg-color: var(--theme-dark-color, #000);
  --text-color: var(--theme-dark-text-color, #fff);
}
</style>
