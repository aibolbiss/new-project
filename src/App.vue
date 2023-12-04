<script setup>
import Header from "./components/Header.vue";
import Post from "./components/Post.vue";
import Search from "./components/Search.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import { useSearchStore } from "./store/SearchStore";

const searchStore = useSearchStore();
</script>

<template>
  <div class="main">
    <div class="content">
      <Header />
      <Post />
      <Search />
      <List />
      <Footer />
    </div>
    <div class="info">
      <div v-if="searchStore.visible">
        <img src="./assets/fast.png" alt="Image" class="fast" />
        <img src="./assets/auto.png" alt="Image" class="auto" />
        <img src="./assets/road.png" alt="Image" class="road" />
        <img src="./assets/line.png" alt="Image" class="line" />
      </div>

      <div>
        <div class="card">
          <div
            class="card__items"
            v-for="item in searchStore.cities"
            :key="item"
          >
            <h3 class="type">
              {{ item.type }}
            </h3>
            <p class="available">
              {{ item.available ? "" : "Not availible in that city" }}
            </p>
            <p class="price">{{ item.price }}$</p>
          </div>
        </div>

        <!-- <div v-for="image in searchStore.images" :key="image.id">
          <img :src="image.url" alt="Image" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
}
.content {
  margin: 0 auto;
}
.info {
  position: relative;
  width: 50%;
  background: #f7f7f7;
  border-radius: 40px 0px 0px 40px;
}
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
  margin: 150px 0 0 100px;
}
.card__items {
  padding: 32px 0 32px 45px;
  width: 523px;
  height: 150px;
  border-radius: 22px;
  border: 1px solid #e9f0eb;
  background: #fff;
  margin-bottom: 20px;
  background: linear-gradient(
    310deg,
    #65b3e4 23.89%,
    rgba(255, 255, 255, 0) 81.27%
  );
  box-shadow: 0px 0px 20px 0px rgba(120, 161, 187, 0.3);
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
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.5;
}
.price {
  color: #78a1bb;
  font-family: Roboto;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
