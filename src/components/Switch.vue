<script>
import { ref, watchEffect } from 'vue'

export default {
  name: 'ToggleSwitch',
  props: {
    modelValue: Boolean,
    themeColor: {
      type: String,
      default: '#409EFF',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const value = ref(props.modelValue)

    watchEffect(() => {
      value.value = props.modelValue
    })

    const toggle = () => {
      value.value = !value.value
      emit('update:modelValue', value.value)
    }

    return {
      value,
      themeColor: props.themeColor,
      toggle,
    }
  },
}
</script>

<template>
  <div class="switch" :style="{ backgroundColor: value ? themeColor : '#ccc' }" @click="toggle">
    <div class="switch-button" :style="{ transform: value ? 'translateX(100%)' : 'none' }" />
  </div>
</template>

<style scoped>
.switch {
  width: 50px;
  height: 25px;
  border-radius: 12.5px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;
}

.switch-button {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background-color: #fff;
  transition: transform 0.3s ease;
}
</style>
