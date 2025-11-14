<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const message = ref('まだデータがありません');

onMounted(() => {
  // ステップ2で起動したバックエンドのAPIにアクセス
  axios.get('http://localhost:3000/api/message')
    .then(response => {
      message.value = response.data.message;
    })
    .catch(error => {
      console.error('エラー:', error);
      message.value = 'データの取得に失敗しました';
    });
});
</script>

<template>
  <h1>Vue + Node.js (pnpm) 連携テスト</h1>
  <h2>バックエンドからのメッセージ:</h2>
  <p>{{ message }}</p>
</template>