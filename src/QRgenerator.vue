<script setup lang="ts">
import VueQrcode from "vue-qrcode";

const props=defineProps({value:[Number,null]});

</script>

<template>
    <VueQrcode :value="props.value"/>
</template>
<style scoped>

</style>