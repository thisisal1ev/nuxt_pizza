import { defineStore } from 'pinia'

interface State {
  activeId: number
}

export const useCategoryStore = defineStore('categoryStore', {
  state: (): State => ({
    activeId: 0,
  }),
actions: {
    setActiveId(id: number) {
      this.activeId = id
    },
  },
})
