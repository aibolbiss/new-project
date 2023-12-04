import { defineStore } from "pinia";

const url = "https://test-frontend.stage.mechta.market/delivery/check?search=";

export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    cities: [],
    visible: true,
    images: [
      { id: 1, url: "https://svgshare.com/i/10R8.svg" },
      { id: 2, url: "https://svgshare.com/i/10Rf.svg" },
      { id: 3, url: "https://svgshare.com/i/10QT.svg" },
    ],
  }),
  actions: {
    async getCities(search) {
      try {
        const response = await fetch(`${url}${search}`);
        const data = await response.json();
        this.cities = data;
        this.visible = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
