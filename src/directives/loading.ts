import { createApp } from 'vue'
import LoadingMask from '@/components/LoadingMask.vue'
const maskDiv = document.createElement('div')
document.body.appendChild(maskDiv)
const mask: any = createApp(LoadingMask).mount(maskDiv)
console.log(mask, 'mask')
interface binding {
  value: boolean
}
export default {
  created(_el: HTMLElement, binding: binding) {
    mask.show = binding.value
  },
  mounted() {},
  updated(_el: HTMLElement, binding: binding) {
    mask.show = binding.value
  },
}
