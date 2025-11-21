<script setup lang="ts">
import { goods, type Order } from './const'
import { ref } from 'vue'

const emit = defineEmits<{
  confirmHandlar: [order: Order]
}>()

const imgsrc: string | null = null
const typeCount = goods.types.length
const countmin = goods.minCount
const countmax = goods.maxCount

let type = ref(0)
let count = ref(goods.minCount)

function typeHandlar(pm: 1 | -1) {
  let a = type.value + pm
  if (a >= typeCount) return
  if (a < 0) return

  type.value += pm
}
function resetType() {
  type.value = 0
}
function countHandlar(pm: 1 | -1) {
  let a = count.value + pm
  if (a > countmax) return
  if (a < countmin) return

  count.value += pm
}
function resetCount() {
  count.value = goods.minCount
}
function calcurateMoney() {
  let onemoney = goods.money[type.value] ?? 0
  return onemoney * count.value
}
function makeId(time: number): string {
  let t = ''
  t += time.toString()
  t += type.value.toString()
  t += count.value.toString().padStart(2, '0')
  t += calcurateMoney().toString().padStart(4, '0')

  return t
}
function clickHandlar() {
  if (confirm('注文を確定します。\nよろしいですか？')) {
    emit('confirmHandlar', makeOrder())
  } else {
    alert('キャンセルしました。')
  }
}
function makeOrder() {
  let time = Date.now()
  let order: Order = {
    id: makeId(time),
    time: time,
    type: type.value,
    count: count.value,
    allMoney: calcurateMoney(),
  }
  return order
}
</script>
<template>
  <div>
    <img v-if="imgsrc" :src="imgsrc" class="formImg" />
    <p v-if="!imgsrc" class="formImg noimg">no image</p>
  </div>
  <div>
    <div class="wrap_title">
      <p>サイズ</p>
      <a @click="resetType">リセット</a>
    </div>
    <button class="pmBtn" @click="() => typeHandlar(-1)">-</button>
    <span class="selectedSpan">{{ goods.types[type] }}</span>
    <button class="pmBtn" @click="() => typeHandlar(1)">+</button>
  </div>
  <div>
    <div class="wrap_title">
      <p>個数</p>
      <a @click="resetCount">リセット</a>
    </div>
    <button class="pmBtn" @click="() => countHandlar(-1)">-</button>
    <span class="selectedSpan">{{ count }}</span>
    <button class="pmBtn" @click="() => countHandlar(1)">+</button>
  </div>
  <button id="confirmBtn" @click="clickHandlar">決定</button>
</template>
<style scoped>
.formImg {
  width: 50%;
  aspect-ratio: 3 / 2;
}
.noimg {
  background-color: #aaa;
  color: black;
}
.wrap_title {
  display: flex;
}
</style>
