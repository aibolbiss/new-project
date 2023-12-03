<template>
  <div class="list">
    <h3>Most popular cities</h3>
    <div class="list__items">
      <ul>
        <li>Nur-Sultan</li>
        <li>Almaty</li>
        <li>Shymkent</li>
        <li>Atyrau</li>
        <li>Aktau</li>
      </ul>
      <ul>
        <li>Zhana Turmis</li>
        <li>Karaganda</li>
        <li>Kentau</li>
        <li>Aitei</li>
        <li>Pavlodar</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.list {
  margin-top: 80px;
}
h3 {
  color: #283044;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.list__items {
  display: flex;
  margin-top: 42px;
}
.list__items ul {
  margin-right: 75px;
}
.list__items ul li {
  width: 224px;
  padding: 0 0 10px 20px;
  margin-bottom: 20px;
  list-style-type: none;
  color: rgba(40, 48, 68, 0.5);
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-bottom: 1px solid #e9f0eb;
}
</style>
