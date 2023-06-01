import { defineStore, storeToRefs } from 'pinia';
import { useAuthStore } from './auth';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 10,
  }),
  getters: {
    countDigitLength: (state) => state.count.toString().length,
  },
  actions: {
    increment() {
      const authStore = useAuthStore();
      if (!authStore.isAuthenticated) return;
      this.count++;
    },
    decrement() {
      const authStore = useAuthStore();
      if (!authStore.isAuthenticated) return;
      this.count--;
    }

  }
});