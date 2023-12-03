<template>
  <form @submit.prevent="searchStore.getCities(searchCity)" class="form">
    <input
      type="text"
      list="city"
      placeholder="Enter name of the city"
      v-model="searchCity"
      @input="selectCity"
    />
    <datalist id="city">
      <option v-for="city in cities" :key="city">
        {{ city }}
      </option>
    </datalist>
    <button>
      <span>ENTER</span>
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useSearchStore } from "../store/SearchStore";

const searchStore = useSearchStore();
const searchCity = ref("");
const cities = ref(["nur-sultan", "almaty", "aktau"]);

const selectCity = (e) => {
  const city = e.target.value;
  if (city) {
    searchStore.getCities(city);
  }
};
</script>

<style scoped>
.form {
  margin-top: 80px;
}
input {
  width: 523px;
  position: absolute;
  padding: 19px 0 16px 36px;
  border-radius: 50px;
  border: 1px solid #e9f0eb;
}
input::placeholder {
  color: #d9e4dc;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
button {
  position: relative;
  top: 1px;
  left: 389px;
  height: 50px;
  width: 170px;
  border: none;
  border-radius: 50px;
  background: linear-gradient(
    280deg,
    #65b3e4 15.15%,
    rgba(120, 161, 187, 0) 171.55%
  );
}
button:hover {
  cursor: pointer;
  background: linear-gradient(
    280deg,
    #4487b1 15.15%,
    rgba(120, 161, 187, 0) 171.55%
  );
}
button span {
  color: #fff;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
