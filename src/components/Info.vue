<script setup>
import { useSearchStore } from "../store/SearchStore";

const searchStore = useSearchStore();
</script>

<template>
  <div v-if="searchStore.visible">
    <img src="../assets/fast.png" alt="Image" class="fast" />
    <img src="../assets/auto.png" alt="Image" class="auto" />
    <img src="../assets/road.png" alt="Image" class="road" />
    <img src="../assets/line.png" alt="Image" class="line" />
  </div>

  <div>
    <div class="card">
      <div
        class="card__items"
        :class="[!item.available ? 'opacity' : '']"
        v-for="item in searchStore.cities"
        :key="item"
      >
        <div class="card__content">
          <div class="card__content_left">
            <h3 class="type">
              {{ item.type }}
            </h3>
            <p class="available">
              {{ item.available ? "" : "Not availible in that city" }}
            </p>
            <p class="price">{{ item.price }}$</p>
          </div>
          <div class="card__content_right">
            <img :src="item.url" alt="Image" />
          </div>
        </div>
        <div class="card__check" v-if="item.available">
          <img src="../assets/check.png" alt="Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fast {
  position: absolute;
  top: 100px;
  right: 170px;
}
.auto {
  position: absolute;
  top: 200px;
  left: 100px;
  z-index: 1;
}
.road {
  position: absolute;
  top: 166px;
  right: 0px;
}
.line {
  position: absolute;
  bottom: 70px;
  right: 0px;
}

.card {
  margin: 130px 0 0 100px;
}
.card__items {
  display: flex;
  justify-content: space-between;
  width: 560px;
  border-radius: 22px;
  border: 1px solid #e9f0eb;
  background: #fff;
  margin-bottom: 20px;
}
.card__items:hover {
  box-shadow: 0px 0px 20px 0px rgba(120, 161, 187, 0.3);
}
.card__content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 170px;
  padding: 32px 45px;
}
.card__content_left {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.card__content_right {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card__check {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  background: linear-gradient(
    310deg,
    #65b3e4 33.89%,
    rgba(255, 255, 255, 0) 99%
  );
  border-radius: 0 22px 22px 0;
}
.type {
  color: #283044;
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
}
.available {
  margin-top: 5px;
  color: #283044;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.5;
}
.price {
  position: absolute;
  bottom: 0;
  color: #78a1bb;
  font-family: Roboto;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.opacity {
  opacity: 0.5;
}
</style>
