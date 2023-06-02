import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false);
  const user = reactive({});
  const fullname = computed(() => `${user.value.first_name} ${user.value.last_name}`);
  function logout() {
    this.$patch((state) => {
      (state.isAuthenticated = false), (state.user = {});
    })
  };

  async function login() {
    const res = await fetch("https://reqres.in/api/users/2")
    const { data } = await res.json()
    // console.log(data)
    this.user.value = data;
    this.isAuthenticated = true;
  }
  //use $state with a single item, and $patch with nested
  return { login, logout, user, isAuthenticated, fullname }
});