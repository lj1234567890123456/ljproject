<template>
  <div>
    <!-- <mt-button type="default">默认</mt-button>
        <mt-button type="primary">主要</mt-button>
        <mt-button type="default">危险</mt-button>
        <mt-button type="danger">小的</mt-button>
        <mt-button size="small" type="primary">默认</mt-button>
        <mt-button size="normal" type="primary">大的</mt-button>
        <mt-button size="large" type="primary" plain>大的</mt-button> -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item><img src="../assets/images/css3.png"/></van-swipe-item>
      <van-swipe-item><img src="../assets/images/css3.png"/></van-swipe-item>
      <van-swipe-item><img src="../assets/images/css3.png"/></van-swipe-item>
    </van-swipe>
  </div>
</template>
<style scoped>
 .my-swipe .van-swipe-item {
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>









<script>
</script>