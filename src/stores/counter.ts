import { ref, computed, type ComputedRef } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

interface CounterStore {
  count: Ref<number>
  increment: () => void
  doubleCount: ComputedRef
}

export const useCounterStore = defineStore('counter', (): CounterStore => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const increment = () => {
    count.value++
  }

  return { count, doubleCount, increment }
})
