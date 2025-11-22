<script setup lang="ts">
import { ref } from 'vue'
import type { Order } from './const'
import { goods } from './const'
import trash from './assets/trash.svg'
import QRgenerator from './QRgenerator.vue'

let orderHistory = defineModel<Order[]>()
let showorder = ref<Order | null>(null)
let isshowQR = ref<boolean>(false)
let orderedPopRef = ref<HTMLDivElement | null>(null)

function order2Time(order: Order) {
  let t = new Date(order.time)
  const month = t.getMonth() + 1
  const day = t.getDate()
  const hours = t.getHours()
  const minutes = t.getMinutes()

  const padToTwoDigits = (num: number) => String(num).padStart(2, '0')

  const formattedDate =
    `${padToTwoDigits(month)}/${padToTwoDigits(day)} ` +
    `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)}`

  return formattedDate
}
function trashHandler() {
  if (confirm('注文履歴をすべて削除しますか？\nこの操作は取り消せません')) {
    localStorage.removeItem('orderHistory')
    alert('消去しました。')
    if (orderHistory.value) {
      while (orderHistory.value.length > 0) {
        orderHistory.value.pop()
      }
    }
  }
}
function showPopover(idx: number) {
  if (orderHistory.value && orderHistory.value[idx]) showorder.value = orderHistory.value[idx]
  isshowQR.value = false
  if (orderedPopRef.value) orderedPopRef.value.showPopover()
}
</script>

<template>
  <h2 style="text-align: center">注文履歴</h2>
  <div v-for="(order, idx) in orderHistory" class="historyWrapper" @click="() => showPopover(idx)">
    <div class="historymini">
      <p class="ID">#{{ idx }}</p>
      <p class="historyTime" :key="idx">
        注文日時：<span>{{ order2Time(order) }}</span>
      </p>
    </div>
    <div class="historymini">
      <p class="historyType">
        大きさ：<span>{{ goods.types[order.type] }}</span>
      </p>
      <p class="historyCount">
        個数：<span>{{ order.count }}</span>
      </p>
    </div>
  </div>
  <div style="height: 200px"></div>
  <img :src="trash" class="trashBtn" @click="trashHandler" />
  <div id="orderedPopup" popover="auto" ref="orderedPopRef">
    <div v-if="showorder">
      <QRgenerator
        v-if="isshowQR"
        :value="showorder ? showorder.id : ''"
        class="QR"
        style="width: 200px"
      /><br />
      <button
        @click="
          () => {
            isshowQR = !isshowQR
          }
        "
      >
        QRコードを{{ isshowQR ? '非表示にする' : '表示する' }}
      </button>
      <p>{{ showorder.id }}</p>
      <p>日時：{{ showorder.time }}</p>
      <p>大きさ：{{ showorder.type }}</p>
      <p>個数：{{ showorder.count }}</p>
      <p>合計金額：{{ showorder.allMoney }}</p>
      <button popovertarget="orderedPopup" popovertargetaction="hide" id="tojiru">閉じる</button>
    </div>
  </div>
  <p v-show="orderHistory && orderHistory.length == 0" style="text-align: center">
    まだ注文履歴がありません。
  </p>
</template>
<style scoped>
.historyWrapper {
  padding: 8px 16px;
  margin: 32px 0;
  color: #5d627b;
  background: white;
  border-left: solid 5px #5d627b;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
}
.historyWrapper:active {
  box-shadow: none;
}
.trashBtn {
  width: 40px;
  height: 40px;
  position: absolute;
  right: 5px;
  top: 45px;
  padding: 10px;
  background-color: #e07474;
  border-radius: 30px;
  box-shadow:
    inset 0 2px 0 rgba(255, 255, 255, 0.5),
    0 2px 2px rgba(0, 0, 0, 0.19);
}
.trashBtn:active {
  background-color: #e58888;
  box-shadow: none;
}
.historyWrapper {
  p {
    span {
      color: black;
      font-size: 18px;
    }
  }
}
.historymini {
  display: flex;
  align-items: baseline;
  justify-content: space-around;
}
.ID {
  font-size: 30px;
  margin-right: 30px;
}
#orderedPopup {
  width: 80%;
  height: 75%;
  transform: translateY(-5%);
  text-align: center;
}
.QR {
  width: 200px;
}
button {
  display: inline-block;
  padding: 8px 8px;
  text-decoration: none;
  background: #668ad8; /*ボタン色*/
  color: #fff;
  border-bottom: solid 4px #627295;
  border-radius: 32px;
  font-size: 16px;
  margin: 0 32px;
  margin-top: 8px;
  border: none;
}
button:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px); /*下に動く*/
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2); /*影を小さく*/
  border-bottom: none;
}
#tojiru {
  width: 80%;
}
</style>
