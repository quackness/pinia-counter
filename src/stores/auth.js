import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: true,
    user: {
      name: 'Karolina',
      email: 'test@gmail.com'
    }
  })
});