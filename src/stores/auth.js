import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: true,
    user: {
      name: 'Karolina',
      email: 'test@gmail.com'
    }
  }),
  actions: {
    logout() {
      this.$patch((state) => {
        (state.isAuthenticated = false), (state.user = {});
      });
    },
    login() {
      this.$reset();
    }
    //use $state with a single item, and $patch with nested
  }
});