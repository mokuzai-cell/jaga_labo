<script setup lang="ts">
import jagamain from './assets/jagamain.jpg'

let nowTab = defineModel<'main' | 'order' | 'history' | 'us'>()

function changeTab(newTab: 'main' | 'order' | 'history' | 'us') {
  nowTab.value = newTab
  localStorage.setItem('tab', newTab)
}
</script>

<template>
  <img id="mainImg" :src="jagamain" />
  <h2>じゃがバタ生成ラボへようこそ！</h2>
  <div class="buttons">
    <button @click="() => changeTab('order')">注文する</button><br />
    <button @click="() => changeTab('history')">注文履歴の確認</button><br />
    <button @click="() => changeTab('us')">ロボクリについて</button>
  </div>
</template>
<style scoped>
#mainImg {
  width: 100%;
  max-height: 40%;
  object-fit: contain;
}
h2 {
  text-align: center;
}
.buttons {
  text-align: center;
  width: 100%;
}
button {
  display: inline-block;
  padding: 1em 1em;
  text-decoration: none;
  background: #668ad8; /*ボタン色*/
  color: #fff;
  border-bottom: solid 4px #627295;
  border-radius: 12px;
  width: 80%;
  margin: 3% auto;
  font-size: large;
  border: none;
}
button:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px); /*下に動く*/
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2); /*影を小さく*/
  border-bottom: none;
}
</style>
