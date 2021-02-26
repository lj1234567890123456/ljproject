<template>
  <div>
    <h1>访问Vuex的数据 -- 第一个页面</h1>    
    <p>姓名:{{this.$store.state.username}}</p>
    <p>年龄:{{this.$store.state.age}}</p>
    <p>性别:{{this.$store.state.sex ? '女' : '男'}}</p>
    <h1>我的朋友们</h1>
    <p v-for="(friend,index) of this.$store.state.friends" :key="index">
      
      姓名:{{friend.name}},
      性别：{{friend.sex ? '女' :'男'}}

    </p>
  </div>
</template>
<script>
export default {
  mounted(){
    console.log('姓名:' + this.$store.state.username);
    this.$store.state.friends.forEach((friend,index)=>{
        console.log('索引值为:' + index);
        console.log('姓名:' + friend.name);
        console.log('性别:' + (friend.sex ? '女' : '男'));
    });
  }
}
</script>


