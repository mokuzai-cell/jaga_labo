<script setup lang="ts">
import robologo from './assets/robokuri.jpg'
</script>

<template>
  <div>
    <img id="iconImg" :src="robologo" />

    <h3>紹介文</h3>
    <hr />
    <p>
      　私たちロボットクリエーターズはみんなで楽しく様々なプロジェクトに励んでいます。<br />
      　現在はVRで体験できる飲酒運転シュミレーターの作成やロボット相撲の大会に取り組んでいます。<br />
      　また、小学生たちに科学やロボットの面白さを伝えるため、近隣での科学教室のお手伝いなどもしています。
    </p>
    <h3>リンク・SNS</h3>
    <hr />
    <p>X： <a href="https://x.com/robot_cs">https://x.com/robot_cs</a></p>
    <p>
      公式サイト：
      <a href="https://robot-cs.github.io/robot-cs_lp/">https://robot-cs.github.io/robot-cs_lp/</a>
    </p>

    <p class="mg"></p>
  </div>
</template>
<style scoped>
div {
  text-align: center;
}
#iconImg {
  width: 85%;
  object-fit: contain;
}
.mg {
  height: 200px;
}
p {
  text-align: left;
}
</style>
