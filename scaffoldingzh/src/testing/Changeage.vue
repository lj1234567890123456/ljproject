<template>
  <div>
    <h1 style="font-size:50px;text-align:center">{{this.$store.state.age}}</h1> 
    <p style="text-align:center;">
    <button @click="age1">增加年龄</button>
    <button @click="age2">减少年龄</button>
    </p> 
    <p style="text-align:center;">
      <router-link to="access1">访问vuex数据的页面1</router-link>
      &nbsp;&nbsp;
      <router-link to="access2">访问vuex数据的页面2</router-link>
      &nbsp;&nbsp;  
      <router-link to="/addfriend">添加新朋友</router-link> 
      </p>  
  </div>
</template>
<script>
export default {
  methods:{
    age1(){
      //调用vuex中的Mutations
      // 提交Mutations
      this.$store.commit('ageIncrementMutation');
    },
    age2(){
      this.$store.commit('ageDecrementMutation')
    }
  }
}
</script>