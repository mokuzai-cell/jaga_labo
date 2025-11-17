<script setup lang="ts">
import { goods } from './const';
import { ref } from 'vue';

    const imgsrc:string|null=null;
    const typeCount=goods.types.length;
    const countmin=goods.minCount;
    const countmax=goods.maxCount;

    let type=ref(0);
    let count=ref(goods.minCount);

    function typeHandlar(pm: 1 | -1 ){
        let a=type.value+pm;
        if(a>=typeCount)return;
        if(a<0)return;

        type.value+=pm;
    }
    function countHandlar(pm:1 | -1){
        let a=count.value+pm;
        if(a>countmax)return;
        if(a<countmin)return;

        count.value+=pm;
    }
</script>
<template>
    <div>
        <img v-if="imgsrc" :src="imgsrc" class="formImg" />
        <p v-if="!imgsrc" class="formImg noimg">no image</p>
    </div>
    <div>
        <button class="pmBtn" @click="()=>typeHandlar(-1)">-</button>
        <span class="selectedSpan">{{ goods.types[type] }}</span>
        <button class="pmBtn" @click="()=>typeHandlar(1)">+</button>
    </div>
    <div>
        <button class="pmBtn" @click="()=>countHandlar(-1)">-</button>
        <span class="selectedSpan">{{ count }}</span>
        <button class="pmBtn" @click="()=>countHandlar(1)">+</button>
    </div>
</template>
<style scoped>
.formImg{
    width:50%;
    aspect-ratio: 3 / 2;
}
.noimg{
    background-color: #aaa;
    color:black;
}
</style>