<template>
  <div>
    <h1>访问Vuex的数据 -- 第二个页面</h1>    
    <p>姓名:{{this.$store.state.username}}</p>
    <p>年龄:{{this.$store.state.age}}</p>
    <p>性别:{{this.$store.state.sex ? '女' : '男'}}</p>
  </div>
</template>