import { defineStore } from "pinia";

const url = "https://test-frontend.stage.mechta.market/delivery/check?search=";

export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    cities: [],
    visible: true,
  }),
  actions: {
    async getCities(search) {
      const response = await fetch(`${url}${search}`);
      const data = await response.json();
      this.cities = data;
      this.visible = false;
      console.log(data);
    },
  },
});
