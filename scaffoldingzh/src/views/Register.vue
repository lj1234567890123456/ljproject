<template>
  <div>
    <div>
      <!-- 顶部导航开始 -->
      <mt-header title="学前端，到学问">
        <router-link to="/" slot="left">    
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="/login" slot="right">登录</router-link>
      </mt-header>
      <!-- 顶部导航结束 -->
      <!-- 表单区域开始 -->
    </div>
    <div>
        <mt-field
        type="text"
        lable="用户名"
        placeholder="请输入用户名" 
        v-model="username"
        :state="usernameState"
        @blur.native.capture="checkUsername"
        >
        </mt-field>
        <mt-field
        type="password"
        lable="密码"
        placeholder="请输入密码"
        v-model="password"     
         @blur.native.capture="checkPassword"
        >
        </mt-field>
        <mt-field
        type="password"
        lable="确认密码"
        placeholder="请再次输入密码"
        v-model="conpassword" 
        @blur.native.capture="checkConpassword"
        >
        </mt-field>
        <mt-button type="primary" size="large" @click="handle">免费注册</mt-button>
    </div>
    <!-- 表单区域结束 -->
  </div>
</template>
<script>
export default {
    data(){
        return {
          //用户名，密码确认密码的变量 
            username:'',
            password:'',
            conpassword:'',
            // 用户名，密码及确认密码的状态
            usernameState:''
        };
    },
    methods:{
         //单击免费注册按钮的时候校验表单
        handle(){
          //会引发短路现象
          // 第一个条件为false不再执行第二个
          if(this.checkUsername() && this.checkPassword() && this.checkConpassword()){
            this.axios.post('/register','username=' + this.username + '&password=' + this.password  
            ).then(res=>{
              //接收响应
              if(res.data.code==201){
                // 注册失败
                this.$messagebox(`提示信息`,`用户已经存在`);
              }
              // 注册成功
              if(res.data.code==200){
                this.$router.push('/');
              }
            });    
         } 
         },
        // 检测用户名
        checkUsername() {
          let username=this.username;
          let usernameReg=/^[0-9a-zA-Z]{6,12}$/;
          if(usernameReg.test(username)) {
            // 修改用户名状态
            this.usernameState='success';
            return true;
          }else{
            this.$toast({
              message:`用户名格式或内容错误`,
              position:`top`,
              duration:5000,
            });
            this.usernameState='error';
            return false;
          }
        },
        //检测密码
        checkPassword(){
          let password=this.password;
         let passwordReg = /^[0-9A-Za-z\.\-_]{8,15}$/;
         if(passwordReg.test(password)){
           return true;
         }else{
           this.$toast({
             message:`密码错误`,
             position:`middle`,
             duration:5000,
           });
           return false;
         }  
       },
      // 检测两次密码是否一致
      checkConpassword(){
        let password=this.password;
        let conpassword=this.conpassword
        if(password==conpassword){
          return true;
        }else{
          this.$toast({
            message:`两次密码不一致`,
            position:`middle`,
            duration:4000,
          });
          return false;
        }
      },
          //   // 校验用户名
          //  let usernameRegExp = /^[0-9A-Za-z]{6,12}$/;
          //  if(usernameRegExp.test(this.username)){
          //      console.log(`用户名正确`)
          //  }else{
          //     this.$toast({
          //         message:`用户名错误`,
          //         position:`middle`,
          //         duration:3000
          //     });
          //     return false;
          //       // console.log(`用户名错误`)
          //  }
          //       //校验密码
          //   let passwordRegExp = /^[0-9A-Za-z]{8,12}$/;
          //   if(passwordRegExp.test(this.password)){
          //       console.log(`密码正确`)
          //   }else{
          //        this.$toast({
          //         message:`密码错误`,
          //         position:`middle`,
          //         duration:3000
          //     });
          //     return false;
          //   }  
          //   //校验两次密码是否一致
          //   if(this.password==this.conpassword){
          //       console.log(`两次密码一致`)
          //   }else{
          //       this.$toast({
          //         message:`两次密码不一致`,
          //         position:`middle`,
          //         duration:3000
          //     });
          //   }       
    },
};
</script>