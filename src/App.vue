<script setup lang="ts">
import { onMounted, ref } from 'vue'
import OrderForm from './OrderForm.vue'
import QRgenerator from './QRgenerator.vue'
import { goods, type Order } from './const'
import Footer from './Footer.vue'
import Tab_order from './Tab_order.vue'

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
    {{ nowTab }}
    <Tab_order v-model="orderHistory" />
    <h2>注文</h2>
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
  height: calc(100dvh - 6em);
  max-width: 400px;
  margin: 3em auto;
  display: flex;
  flex-direction: column;
}
</style>
