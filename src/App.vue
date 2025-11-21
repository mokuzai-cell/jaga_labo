<script setup lang="ts">
import { onMounted, ref } from 'vue'
import OrderForm from './OrderForm.vue'
import QRgenerator from './QRgenerator.vue'
import { goods, type Order } from './const'
import Footer from './Footer.vue'
import Tab_main from './Tab_main.vue'
import Tab_order from './Tab_order.vue'
import Tab_history from './Tab_history.vue'
import Tab_us from './Tab_us.vue'

let orderHistory = ref<Order[]>([])

let nowTab = ref<'main' | 'order' | 'history' | 'us'>('main')

onMounted(() => {
  let oh = localStorage.getItem('orderHistory')
  if (oh && oh != '') {
    let oh2 = JSON.parse(oh)
    orderHistory = oh2
  }
})
</script>

<template>
  <header>じゃがバタ生成ラボ</header>
  <main>
    <Tab_main v-if="nowTab == 'main'" v-model="nowTab" />
    <Tab_order v-if="nowTab == 'order'" v-model="orderHistory" />
    <Tab_history v-if="nowTab == 'history'" v-model="orderHistory" />
    <Tab_us v-if="nowTab == 'us'" />
  </main>
  <Footer v-model="nowTab" />
</template>
<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  background-color: blue;
  text-align: center;
  color: white;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
main {
  height: calc(100dvh - 10em);
  max-width: 400px;
  margin: 3em auto;
}
</style>
