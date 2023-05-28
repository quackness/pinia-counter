import { defineStore, storeToRefs } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 10,
  }),
  getters: {
    countDigitLength: (store) => store.count.toString().length,
  }
});