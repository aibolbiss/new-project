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
      <img src="./assets/fast.png" alt="Image" class="fast" />
      <img src="./assets/auto.png" alt="Image" class="auto" />
      <img src="./assets/road.png" alt="Image" class="road" />
      <img src="./assets/line.png" alt="Image" class="line" />
      <div>
        {{ searchStore.cities }}
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
</style>
