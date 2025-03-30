import { defineStore } from 'pinia';

export const useApiStore = defineStore('apiUrl', {
  state: () => ({
    url: 'http://95.174.95.88:5003/',
  }),
});
