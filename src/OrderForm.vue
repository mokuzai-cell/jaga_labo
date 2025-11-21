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
  <div class="formWrapper">
    <div>
      <img v-if="imgsrc" :src="imgsrc" class="formImg" />
      <p v-if="!imgsrc" class="formImg noimg">no image</p>
    </div>
    <div class="mini_wrapper">
      <div class="wrap_title">
        <p>サイズ</p>
        <a @click="resetType">リセット</a>
      </div>
      <div class="wrap_value">
        <button class="pmBtn" @click="() => typeHandlar(-1)">-</button>
        <span class="selectedSpan">{{ goods.types[type] }}</span>
        <button class="pmBtn" @click="() => typeHandlar(1)">+</button>
      </div>
    </div>
    <div class="mini_wrapper">
      <div class="wrap_title">
        <p>個数</p>
        <a @click="resetCount">リセット</a>
      </div>
      <div class="wrap_value">
        <button class="pmBtn" @click="() => countHandlar(-1)">-</button>
        <span class="selectedSpan">{{ count }}</span>
        <button class="pmBtn" @click="() => countHandlar(1)">+</button>
      </div>
    </div>
    <button id="confirmBtn" @click="clickHandlar">決定</button>
  </div>
</template>
<style scoped>
.formWrapper {
  text-align: center;
}
.wrap_title {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  p {
    font-size: 1.2em;
  }
  a {
    color: blue;
    cursor: pointer;
  }
}
a:hover {
  color: aqua;
  text-decoration: underline;
}
.wrap_value {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 1.5em;
  }
  button {
    display: inline-block;
    padding: 0.25em 0.5em;
    text-decoration: none;
    background: #668ad8; /*ボタン色*/
    color: #fff;
    border-bottom: solid 4px #627295;
    border-radius: 32px;
    font-size: 2em;
    margin: 0 32px;
    border: none;
  }
  button:active {
    -webkit-transform: translateY(4px);
    transform: translateY(4px); /*下に動く*/
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2); /*影を小さく*/
    border-bottom: none;
  }
}
#confirmBtn {
  display: inline-block;
  padding: 0.25em 0.5em;
  text-decoration: none;
  background: #668ad8; /*ボタン色*/
  color: #fff;
  border-bottom: solid 4px #627295;
  border-radius: 32px;
  font-size: 1.5em;
  margin: 0 32px;
  margin-top: 1.5em;
  width: 80%;
  border: none;
}
#confirmBtn:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px); /*下に動く*/
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2); /*影を小さく*/
  border-bottom: none;
}
.formImg {
  width: 75%;
  aspect-ratio: 3 / 2;
  margin: 0 auto;
}
.noimg {
  background-color: #aaa;
  color: black;
}
.wrap_title {
  display: flex;
}
</style>
