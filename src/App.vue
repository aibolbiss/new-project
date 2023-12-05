<script setup>
import Header from "./components/Header.vue";
import Post from "./components/Post.vue";
import Search from "./components/Search.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import Info from "./components/Info.vue";
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
      <Info />
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
</style>
