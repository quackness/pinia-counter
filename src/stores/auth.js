import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: {
      name: 'Karolina',
      email: 'test@gmail.com'
    }
  })
});