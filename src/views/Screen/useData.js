import { onMounted, onUnmounted, ref } from 'vue'
import { getData } from '../../api'

let task = null

export function useData() {
  const ready = ref(false)
  const datas = ref({})

  onMounted(() => {
    setTimeout(async () => {
      ready.value = true
      datas.value = await getData()
    }, 1000)
    task = setInterval(async () => {
      datas.value = await getData()
    }, 5000)
  })

  onUnmounted(() => {
    if (task) {
      clearInterval(task)
    }
  })

  return {
    ready,
    datas
  }
}
