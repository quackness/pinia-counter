import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: true,
    user: {}
  }),
  getters: {
    fullname: (state) => `${state.user.first_name} ${state.user.last_name}`,
  },
  actions: {
    logout() {
      this.$patch((state) => {
        (state.isAuthenticated = false), (state.user = {});
      });
    },
    async login() {
      const res = await fetch("https://reqres.in/api/users/2?delay=2")
      const { data } = await res.json()
      // console.log(data)
      this.user = data;
      this.isAuthenticated = true;
    }
    //use $state with a single item, and $patch with nested
  }
});