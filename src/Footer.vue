<script setup lang="ts">
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
      main
    </button>
    <button
      id="tab_order"
      @click="() => changeHandler('order')"
      :class="nowTab === 'order' ? 'checked' : ''"
    >
      order
    </button>
    <button
      id="tab_history"
      @click="() => changeHandler('history')"
      :class="nowTab === 'history' ? 'checked' : ''"
    >
      history
    </button>
    <button
      id="tab_us"
      @click="() => changeHandler('us')"
      :class="nowTab === 'us' ? 'checked' : ''"
    >
      us
    </button>
  </footer>
</template>
<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100dvw;
  background-color: blue;
  text-align: center;
  height: 3em;
  margin-bottom: 3em;
}
input {
  display: none;
}
.checked {
  color: white;
}
</style>
