<script setup lang="ts">
import OrderForm from './OrderForm.vue'
import QRgenerator from './QRgenerator.vue'
import type { Order } from './const'
import { ref } from 'vue'

let orderId = ref('')
let allMoney = ref(0)
let orderPopRef = ref<HTMLDivElement | null>(null)
let pPopRef = ref<HTMLDivElement | null>(null)
let orderHistory = defineModel<Order[]>()
let qrwidth = ref(100)

function confirmHandler(order: Order) {
  allMoney.value = order.allMoney
  orderId.value = order.id
  historyPush(order)
  if (orderPopRef.value) orderPopRef.value.showPopover()
  let width = orderPopRef.value ? orderPopRef.value.clientWidth : 0
  let height = orderPopRef.value ? orderPopRef.value.clientHeight : 0
  let height2 = pPopRef.value ? pPopRef.value.clientHeight : 0
  qrwidth.value = Math.min(width, height - height2) * 0.8
}
function historyPush(neworder: Order) {
  orderHistory.value && orderHistory.value.push(neworder)
  localStorage.setItem('orderHistory', JSON.stringify(orderHistory.value))
}
</script>
<template>
  <h2>商品の注文</h2>
  <OrderForm @confirmHandlar="confirmHandler" />
  <div style="height: 300px"></div>
  <div id="orderPopup" popover="manual" ref="orderPopRef">
    <QRgenerator :value="orderId" class="qr" :style="'width:' + qrwidth + 'px'" />
    <div ref="pPopRef">
      <p>{{ orderId }}</p>
      <p>合計金額：{{ allMoney }}　円</p>

      <p>レジに上のQRコードをかざし、お会計をお願いします。</p>
      <button id="confirmBtn" popovertarget="orderPopup" popovertargetaction="hide">閉じる</button>
    </div>
  </div>
</template>
<style scoped>
#orderPopup {
  width: 80%;
  height: 75%;
  transform: translateY(-5%);
  text-align: center;
  p {
    margin-top: 0;
  }
}
.qr {
  width: 200px;
}
h2 {
  text-align: center;
}
#confirmBtn {
  display: inline-block;
  padding: 4px 8px;
  text-decoration: none;
  background: #668ad8; /*ボタン色*/
  color: #fff;
  border-bottom: solid 4px #627295;
  border-radius: 32px;
  font-size: 15px;
  padding: 8px 0;
  margin: 0 32px;
  margin-top: 8px;
  width: 80%;
  border: none;
}
#confirmBtn:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px); /*下に動く*/
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2); /*影を小さく*/
  border-bottom: none;
}
</style>
