<script setup lang="ts">
import OrderForm from './OrderForm.vue'
import QRgenerator from './QRgenerator.vue'
import type { Order } from './const'
import { ref } from 'vue'

let orderId = ref('')
let allMoney = ref(0)
let orderPopRef = ref<HTMLDivElement | null>(null)
let orderHistory = defineModel<Order[]>()

function confirmHandler(order: Order) {
  allMoney.value = order.allMoney
  orderId.value = order.id
  if (orderPopRef.value) orderPopRef.value.showPopover()
  historyPush(order)
}
function historyPush(neworder: Order) {
  orderHistory.value && orderHistory.value.push(neworder)
  localStorage.setItem('orderHistory', JSON.stringify(orderHistory))
}
function order2json(order: Order) {}
</script>
<template>
  <OrderForm @confirmHandlar="confirmHandler" />
  <div id="orderPopup" popover="manual" ref="orderPopRef">
    <QRgenerator :value="orderId" class="qr" />
    <p>{{ orderId }}</p>
    <p>合計金額：{{ allMoney }}</p>

    <p>レジに上のQRコードをかざし、お会計をお願いします。</p>
    <button popovertarget="orderPopup" popovertargetaction="hide">閉じる</button>
  </div>
</template>
<style scoped>
#orderPopup {
  width: 80%;
  height: 75%;
  text-align: center;
}
.qr {
  width: 80%;
}
</style>
