<script setup lang="ts">
import {ref} from "vue";
import axios from 'axios';
const serverUrl="http://localhost:3000";

let counter=ref(0);
function clickhandlar(){
  axios.get(serverUrl+"/api/count")
    .then(res=>{
      counter.value=res.data.count;
    })
    .catch(err=>console.log("error"));
}
</script>

<template>
  <h2>バックエンドからのメッセージ:</h2>
  <p>{{ counter }}</p>
  <button @click="clickhandlar">click</button>
</template>