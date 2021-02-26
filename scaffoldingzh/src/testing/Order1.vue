<template>
  <div id="orders">
    <van-nav-bar 
      left-text="返回"
      left-arrow title="订单详情页"
      @click-left="onClickLeft">
    </van-nav-bar>
    <div id="order_detail">
      <div>
        <p>收货人:{{goodsDetails.username}}</p>
        <p>自提门店:{{goodsDetails.shopname}} </p>
        <p>门店地址:{{goodsDetails.address}}</p>
        <p>下单时间:{{goodsDetails.orderdate}} </p>
        <van-notice-bar
  wrapable
  :scrollable="false"
  text="购物中如有疑问，请联系门店解决，售后无忧。"
/>
      </div>
    </div>

     <div class="main-top">
              <div class="main-time">
                <p>2020/12/5</p>
                <p>待提货</p>
              </div>
              <div class="main-image">
                <div>
                   <!-- <div v-if="good.image != null">
                  <img v-lazy="good.image"/> -->
                   <!-- </div> -->
                </div>
              <div>
                <div class="main-title">
                  <div style="flex:1">
                    <p class="info">{{goodsDetails.content}}</p>
                  <p>{{goodsDetails.state}}</p>
                  </div>
                  <div class="main-title-price">
                    <p>{{goodsDetails.totalmoney}}</p>
                    <p>共1件</p>
                  </div>
                </div>
              </div>
              </div>
              <p class="total">合计实付：<span>¥</span><span>12.9</span></p>
              <div class="main-botton">
                <!-- <mt-button size="small">再次购买</mt-button> -->
                <mt-button size="small">申请售后</mt-button>
              </div>
            </div>
    <div id="order-bar">
      <van-submit-bar :price="3050" button-text="提交订单"/>   
    </div>
  </div>
</template>
<style>
#orders{
  height:667px;
  background-color: #f3f3f3;
}
  #order_detail p{
    font-size:16px;
    color: #666;
    background-color:white;
    padding:15px;
    border-bottom:1px solid #999;
  }
  #order-card{
    margin-top: 100px;
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
  margin-top: 60px;
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
   data(){
    return {
      // 接收服务器传来的数据
      goodsDetails:[]
    };
  },
  methods:{
    onClickLeft(){
      this.$router.push("/orders");
    }
  },
  mounted(){
    // 需要获取商品的id
    //  let a = this.$route.params.a;
     this.axios.get('/reviews').then(res=>{
      //接收响应
//      goodsDetails.forEach(good=>{
//           if(good.image!=null){
//             good.image = require('../assets/' + good.image)
//           }
//         })
     this.goodsDetails=res.data.result;
      
     
    }) 
  }
}
</script>