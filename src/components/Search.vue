<template>
  <form @submit.prevent="selectCity" class="form">
    <input
      type="text"
      list="city"
      placeholder="Enter name of the city"
      v-model="inputValue"
      @input="selectCity"
      :class="[errorMessage ? 'input_red' : '']"
    />

    <datalist id="city">
      <option v-for="city in cities" :key="city">
        {{ city }}
      </option>
    </datalist>
    <button v-if="!errorMessage">
      <span>ENTER</span>
    </button>
    <button v-else class="btn_red" @click="remove">
      <span>X</span>
    </button>
  </form>
  <p class="error" v-if="errorMessage">
    We didn’t found such city. Please check spelling
  </p>
</template>

<script setup>
import { ref, computed } from "vue";
import { useSearchStore } from "../store/SearchStore";

const searchStore = useSearchStore();
const inputValue = ref("");
const errorMessage = ref(false);
const cities = ref(["nur-sultan", "almaty", "aktau"]);

const selectCity = () => {
  const selectValue = cities.value.find(
    (element) => element === inputValue.value
  );
  if (selectValue) {
    searchStore.getCities(selectValue);
    errorMessage.value = false;
  } else if (inputValue.value == "") {
    errorMessage.value = false;
  } else {
    errorMessage.value = true;
  }
};

// const selectCity = computed({
//   get: () => searchStore.city,
//   set: (newValue) => searchStore.getCities(newValue),
// });

const remove = () => {
  inputValue.value = "";
  errorMessage.value = false;
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
input:focus {
  outline: none;
}
.input_red {
  border: 1px solid red;
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
  left: 390px;
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
.btn_red {
  width: 55px;
  left: 505px;
  border-radius: 50px;
  background: linear-gradient(
    280deg,
    #ff4757 15.15%,
    rgba(255, 255, 255, 0) 171.55%
  );
}
.btn_red:hover {
  cursor: pointer;
  background: linear-gradient(
    280deg,
    #f0293a 15.15%,
    rgba(255, 255, 255, 0) 171.55%
  );
}
.error {
  margin-top: 15px;
  color: #ff4757;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
