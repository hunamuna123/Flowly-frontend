import { defineStore } from 'pinia';

export const useApiStore = defineStore('apiUrl', {
  state: () => ({
    url: 'http://localhost:5000/',
  }),
});
