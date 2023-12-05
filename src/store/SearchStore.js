import { defineStore } from "pinia";

const url = "https://test-frontend.stage.mechta.market/delivery/check?search=";

export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    cities: [],
    visible: true,
    images: [
      { url: "https://svgshare.com/i/10R8.svg" },
      { url: "https://svgshare.com/i/10Rf.svg" },
      { url: "https://svgshare.com/i/10Q3.svg" },
    ],
  }),
  actions: {
    async getCities(search) {
      try {
        const response = await fetch(`${url}${search}`);
        const data = await response.json();
        this.cities = data;
        this.visible = false;

        this.cities = this.cities.map((item, index) => ({
          ...item,
          url: this.images[index].url,
        }));
      } catch (error) {
        console.log(error);
      }
    },
  },
});
