<template>
  <div>
    <!-- 头部开始 -->
    <div>
        <mt-header
      title="订单详情" style="background-color:gray">
      <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
      </mt-header>
    </div>
    <!-- 头部结束 -->

    <!-- 顶部导航栏开始 -->
    <div>
      <mt-navbar v-model="active">
        <!-- <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">待付款</mt-tab-item>
        <mt-tab-item id="3">待提货</mt-tab-item>
        <mt-tab-item id="4">待评价</mt-tab-item> -->
        <div class="navbar-first">
          <div><img src="../assets/images/check.png" alt=""></div>
          <p>提货成功</p>
           <div></div>
        </div>     
      </mt-navbar>
    </div>
    <!-- 顶部导航栏结束 -->

    <!-- 面板区域开始 -->
    <div class="main">
      <mt-tab-container>
    
        <mt-tab-container-item>
          <div class="main-first">
          <div>收货人<input type="text" placeholder=""></div>
          <div>自提门店<input type="text" placeholder=""></div>
          <p>购物中如有疑问，请联系门店解决，售后无忧</p>
          <div>门店地址<input type="text" placeholder=""></div>  
          </div>
          <div class="main-top">
              <div class="main-time">
                <p>2020/12/5</p>
                <p>待提货</p>
              </div>
              <div class="main-image">
                <div>
                <!-- <img src="../assets/images/fruits/fruit/1aa6963f05b79277.jpg" alt=""> -->
                </div>
              <div>
                <div class="main-title">
                  <div style="flex:1">
                    <p class="info">【爆款持续 酸甜可口 皮薄汁多】 福建红心柚3斤±0.3斤/个</p>
                  <p>已提货</p>
                  </div>
                  <div class="main-title-price">
                    <p>¥ 24.9/份</p>
                    <p>共1件</p>
                  </div>
                </div>
              </div>
              </div>
              <p class="total">合计实付：<span>¥</span><span>12.9</span></p>
              <div class="main-botton">
                <mt-button size="small">再次购买</mt-button>
                <mt-button size="small">立即评价</mt-button>
              </div>
            </div>
            <div class="main-end">
              <p>订单编号 PO201005-417624884162347</p>
              <p>下单时间 2020/10/05 08:57:29</p>
            </div>



         

          <!-- <div class="main-top"> -->
            <!-- 时间 提货状态开始 -->
             <!-- <div class="main-time">
              <p>2020/12/5</p>
              <p>待提货</p>
             </div> -->
             <!-- 时间 提货状态结束 -->
          <!-- 图片+文字 开始 -->
          <!-- <div class="row no-gutters">
             <div class="col-4">
               <div class="main-image">
                 <img src="../assets/images/fruits/fruit/1aa6963f05b79277.jpg" alt="">
               </div>
             </div>
             <div class="col-6">
               <div class="main-title">
                    <p>【爆款持续 酸甜可口 皮薄汁多】 福建红心柚3斤±0.3斤/个</p>
                  <p>已提货</p>
             </div>
             <div class="col-2">
               <div class="main-title-price">
                    <p>¥ 24.9/份</p>
                    <p>共1件</p>
                  </div>
             </div>
          </div> -->
          <!-- 图片+文字 结束 -->
          <!-- </div> -->
          <!-- </div> -->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 面板区域结束 -->

  </div>

</template>

<style scoped>
.main-first {
  margin-bottom: 15px;

}
.main-first>div+div {
  margin-bottom: 10px;
}
.main-first input {
    border: 0;
    /* margin-bottom: 6px; */
}
.main-first p{
  color: orange;
  font-size:10px;
   margin-left: 50px;
 
  background-color: indianred;
}
.main-first :nth-child(2) {
  margin-bottom: 5px;
}
.main-first>div {
  font-size: 15px;
  color: gray;
}
.navbar-first {
  display: flex;
  /* margin-bottom: 4px; */
}
.navbar-first p {
 line-height: 2;
 font-size: 20px;
 font-weight: bold; 

}
.navbar-first :nth-child(3){
  margin-bottom: 4px;
  background-color: gray;
}
.main-end{
  margin-top: 15px;
  background-color: gray;
}
.main-end p{
  margin-bottom: 10px;

  
}

.main {
  margin-top: 3px;
  margin-left: 5px;
  margin-right: 5px;
}
.main-top + .main-top {
  margin-top: 5px;
}
.main-top {
  background-color: lightblue;
  padding: 10px;
}
.main-time {
  line-height: 2;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
}
.main-time>p:nth-child(2){
  font-size: 15px;
}
.main-image {
  padding: 10px 0 10px 0;
  display: flex;
  justify-content: space-between;
}
.main-image img {
  width: 70px;
  height: 70px;
  margin-right: 15px;
}
.main-image p + p {
  margin-top: 5px;
  color: gray;
}
.main-title {
  display: flex;
  flex: 1;
  justify-content: space-between;
}
.main-title p:first-child{
  font-size: 15px;
}
.main-title p:last-child{
  font-size: 10px;
}

.info {
  width: 184px;
  height: 30px;
  /* width: 100%; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/* .main-title>div:first-child p:first-child{
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
} */
.main-title>div:last-child:last-child{
  /* font-size: 15px; */
  text-align: right;
}
.main-title-price {
  margin-left: 15px;
}
.total{
  text-align: right;
}
.main span{
  color: red;
}
.main span:first-child{
  font-size: 15px;
}
.main span:nth-child(2){
  font-size: 20px;
}
.main-botton{
  margin-top: 5px;
  text-align: right;
}
.main-botton button+button{
  margin-left: 5px;
}
</style>

<script>
export default {
  data() {
    return {
      active: "1",
    };
  },
};
</script>