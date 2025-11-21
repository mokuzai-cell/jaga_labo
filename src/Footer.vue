<script setup lang="ts">
import main_icon from './assets/main_icon.svg'
import order_icon from './assets/order_icon.svg'
import history_icon from './assets/history_icon.svg'
import us_icon from './assets/us_icon.svg'
let nowTab = defineModel<'main' | 'order' | 'history' | 'us'>()

function changeHandler(tab: 'main' | 'order' | 'history' | 'us') {
  nowTab.value = tab
}
</script>

<template>
  <footer>
    <button
      id="tab_main"
      @click="() => changeHandler('main')"
      :class="nowTab === 'main' ? 'checked' : ''"
    >
      <img :src="main_icon" />
    </button>
    <button
      id="tab_order"
      @click="() => changeHandler('order')"
      :class="nowTab === 'order' ? 'checked' : ''"
    >
      <img :src="order_icon" />
    </button>
    <button
      id="tab_history"
      @click="() => changeHandler('history')"
      :class="nowTab === 'history' ? 'checked' : ''"
    >
      <img :src="history_icon" />
    </button>
    <button
      id="tab_us"
      @click="() => changeHandler('us')"
      :class="nowTab === 'us' ? 'checked' : ''"
    >
      <img :src="us_icon" />
    </button>
  </footer>
</template>
<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100dvw;
  background-color: #0000ff;
  text-align: center;
}
input {
  display: none;
}
.checked img {
  animation: big ease-in-out 0.5s forwards;
}
@keyframes big {
  0% {
    width: 80%;
  }
  100% {
    width: 100%;
  }
}
@keyframes small {
  0% {
    width: 100%;
  }
  100% {
    width: 80%;
  }
}
button {
  background-color: transparent;
  border: none;
  width: 35%;
  max-width: 80px;
  aspect-ratio: 1 / 1;
  img {
    object-fit: contain;
    color: white;
    animation: small 0.5s ease-in-out forwards;
  }
}
</style>
