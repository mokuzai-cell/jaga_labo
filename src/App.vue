<script setup lang="ts">
import {ref} from "vue";
import QRgenerator from "./QRgenerator.vue";
import OrderForm from "./OrderForm.vue";

let counter=ref(0);
function clickhandlar(){

}
</script>

<template>
  <header>
  </header>
  <main>
    <h2>注文</h2>
    <div id="orderForm">
      <OrderForm />
    </div>
    <div id="orderPopup" popover="manual">

    </div>
  </main>
  <footer>

  </footer>
</template>