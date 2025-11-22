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

/*function typeHandlar(pm: 1 | -1) {
  let a = type.value + pm
  if (a >= typeCount) return
  if (a < 0) return

  type.value += pm
}
function resetType() {
  type.value = 0
}*/
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
function getmoney() {
  if (goods.money) {
    if (goods.money[type.value]) {
      return goods.money[type.value]
    }
  }
  return 0
}
</script>
<template>
  <div class="formWrapper">
    <div>
      <!--<img v-if="imgsrc" :src="imgsrc" class="formImg" />
      <p v-if="!imgsrc" class="formImg noimg">no image</p>-->
    </div>
    <div class="mini_wrapper">
      <!--<div class="wrap_title">
        <p>サイズ</p>
        <a @click="resetType">リセット</a>
      </div>
      <div class="wrap_value">
        <button class="pmBtn" @click="() => typeHandlar(-1)">-</button>
        <span class="selectedSpan">{{ goods.types[type] }}</span>
        <button class="pmBtn" @click="() => typeHandlar(1)">+</button>
      </div>-->
      <div class="wrap_title">
        <p>トッピング</p>
      </div>
      <div style="display: grid; width: 100%">
        <div class="wrap_value2" v-for="(t, idx) of goods.types">
          <input
            type="radio"
            name="typevalue"
            :id="'type' + idx"
            :value="idx"
            v-model="type"
            :checked="type == idx"
          />
          <label :for="'type' + idx">{{ t }}</label>
        </div>
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
    <p class="allmoney">合計：{{ (getmoney() ?? 0) * count }} 円</p>
    <button id="confirmBtn" @click="clickHandlar">決定</button>
  </div>
</template>
<style scoped>
.formWrapper {
  text-align: center;
  overflow-y: auto;
}
.wrap_title {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  p {
    font-size: 18px;
  }
  a {
    color: blue;
    cursor: pointer;
  }
}
.allmoney {
  font-size: 18px;
  margin-top: 40px;
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
    font-size: 18px;
  }
  button {
    display: inline-block;
    padding: 4px 8px;
    text-decoration: none;
    background: #668ad8; /*ボタン色*/
    color: #fff;
    border-bottom: solid 4px #627295;
    border-radius: 32px;
    font-size: 30px;
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
.wrap_value2 {
  display: flex;
  padding: 8px;
  input {
    flex-shrink: 0;
    margin-right: 45px;
    width: 18px;
  }
  label {
    flex-shrink: 1;
    text-align: left;
    font-size: 18px;
  }
}
#confirmBtn {
  display: inline-block;
  padding: 4px 8px;
  text-decoration: none;
  background: #668ad8; /*ボタン色*/
  color: #fff;
  border-bottom: solid 4px #627295;
  border-radius: 32px;
  font-size: 18px;
  margin: 0 32px;
  margin-top: 18px;
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
  width: 50%;
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
