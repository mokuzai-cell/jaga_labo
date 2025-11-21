<script setup lang="ts">
import VueQrcode from 'vue-qrcode'

const props = defineProps({ value: String, class: { type: String, required: false } })
</script>

<template>
  <VueQrcode
    v-if="props.value && props.value.length > 0"
    :value="props.value ?? ''"
    type="image/webp"
    :color="{ dark: '#000000', light: '#ffffff' }"
  />
</template>
<style scoped></style>
