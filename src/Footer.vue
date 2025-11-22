<script setup lang="ts">
let nowTab = defineModel<'main' | 'order' | 'history' | 'us'>()

function changeHandler(tab: 'main' | 'order' | 'history' | 'us') {
  nowTab.value = tab
  localStorage.setItem('tab', tab)
}
</script>

<template>
  <footer>
    <button
      id="tab_main"
      @click="() => changeHandler('main')"
      :class="nowTab === 'main' ? 'checked' : ''"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <!--<!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->-->
        <path
          d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z"
        />
      </svg>
      <p :class="nowTab === 'main' ? 'ac' : ''" class="tabp">ホーム</p>
    </button>
    <button
      id="tab_order"
      @click="() => changeHandler('order')"
      :class="nowTab === 'order' ? 'checked' : ''"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <!--<!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->-->
        <path
          d="M127.9 78.4C127.1 70.2 120.2 64 112 64C103.8 64 96.9 70.2 96 78.3L81.9 213.7C80.6 219.7 80 225.8 80 231.9C80 277.8 115.1 315.5 160 319.6L160 544C160 561.7 174.3 576 192 576C209.7 576 224 561.7 224 544L224 319.6C268.9 315.5 304 277.8 304 231.9C304 225.8 303.4 219.7 302.1 213.7L287.9 78.3C287.1 70.2 280.2 64 272 64C263.8 64 256.9 70.2 256.1 78.4L242.5 213.9C241.9 219.6 237.1 224 231.4 224C225.6 224 220.8 219.6 220.2 213.8L207.9 78.6C207.2 70.3 200.3 64 192 64C183.7 64 176.8 70.3 176.1 78.6L163.8 213.8C163.3 219.6 158.4 224 152.6 224C146.8 224 142 219.6 141.5 213.9L127.9 78.4zM512 64C496 64 384 96 384 240L384 352C384 387.3 412.7 416 448 416L480 416L480 544C480 561.7 494.3 576 512 576C529.7 576 544 561.7 544 544L544 96C544 78.3 529.7 64 512 64z"
        />
      </svg>
      <p :class="nowTab === 'order' ? 'ac' : ''" class="tabp">注文</p>
    </button>
    <button
      id="tab_history"
      @click="() => changeHandler('history')"
      :class="nowTab === 'history' ? 'checked' : ''"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <!--<!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->-->
        <path
          d="M320 128C426 128 512 214 512 320C512 426 426 512 320 512C254.8 512 197.1 479.5 162.4 429.7C152.3 415.2 132.3 411.7 117.8 421.8C103.3 431.9 99.8 451.9 109.9 466.4C156.1 532.6 233 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C234.3 64 158.5 106.1 112 170.7L112 144C112 126.3 97.7 112 80 112C62.3 112 48 126.3 48 144L48 256C48 273.7 62.3 288 80 288L104.6 288C105.1 288 105.6 288 106.1 288L192.1 288C209.8 288 224.1 273.7 224.1 256C224.1 238.3 209.8 224 192.1 224L153.8 224C186.9 166.6 249 128 320 128zM344 216C344 202.7 333.3 192 320 192C306.7 192 296 202.7 296 216L296 320C296 326.4 298.5 332.5 303 337L375 409C384.4 418.4 399.6 418.4 408.9 409C418.2 399.6 418.3 384.4 408.9 375.1L343.9 310.1L343.9 216z"
        />
      </svg>
      <p :class="nowTab === 'history' ? 'ac' : ''" class="tabp">注文履歴</p>
    </button>
    <button
      id="tab_us"
      @click="() => changeHandler('us')"
      :class="nowTab === 'us' ? 'checked' : ''"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <!--<!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->-->
        <path
          d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"
        />
      </svg>
      <p :class="nowTab === 'us' ? 'ac' : ''" class="tabp">団体</p>
    </button>
  </footer>
</template>
<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100dvw;
  background-color: #799deb;
  text-align: center;
}
input {
  display: none;
}
.checked svg {
  animation: big ease-in-out 0.5s forwards;
}
@keyframes big {
  0% {
    width: 80%;
    fill: white;
  }
  100% {
    width: 100%;
    fill: #294583;
  }
}
@keyframes small {
  0% {
    width: 100%;
    fill: #294583;
  }
  100% {
    width: 80%;
    fill: white;
  }
}
button {
  background-color: transparent;
  border: none;
  width: 35%;
  max-width: 80px;
  aspect-ratio: 1 / 1;
  svg {
    transform: translateY(0.5em);
    object-fit: contain;
    animation: small 0.5s ease-in-out forwards;
  }
}
.tabp {
  margin: 0;
}
.ac {
  font-weight: bold;
}
</style>
