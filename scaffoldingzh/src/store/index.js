import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
// 注册成为vue插件
Vue.use(Vuex)
//构造函数
export default new Vuex.Store({
//状态： 各个组件中共享的数据
  state: {
    //标识用户是否已经登录
    //||第一个条件为true，不在执行第二个
    isLogined:localStorage.getItem('isLogined') || 0,
    //储存用户登录的信息
    info:JSON.parse(localStorage.getItem('info')) || {},
    ////////////////////////
    username:'frank',
    age:23,
    // true表示女 false表示男
    sex:true,
    friends:[
      {
        name:'tom',
        sex:false
      },
      {
      name:'rose',
      sex:true
      }
    ]
  },
  mutations: {
    loginMutation(state,payload){
      state.isLogined=1;
      //将获取到的用户信息储存到info中去
      state.info=payload;
    },
     //用户注销
      logoutMutation(state){
        // localStorage.clear();
        state.isLogined=0;
        state.info={};
      },
    ////////////////////////////////////////////
    //增加年龄的方法
    ageIncrementMutation(state ){
      state.age ++;
    },
    ageDecrementMutation(state){
      state.age --;
    },
    //添加用户的方法
    //payload可为任意的数据类型
    //payload，载荷
    addFriendMutation(state,payload){
      state.friends.push(payload);
    }

  },
  //可进行异步操作（可发送异步请求）
  actions: {
    // context参数代表的是store内的state，mutation，getter等
    // 而且context会自动注入到当前的action方法中，也就代表在分发action
    // 时该参数不需要传递参数值
    getServerData(context){
      // console.log(`用户信息已经获取`);
      axios.get('/user').then(res=>{
        //接收响应
        context.commit('addFriendMutation',res.data);


      });
    }
  },
  modules: {
  }
})
