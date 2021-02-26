<template>
<div>
    <!-- 顶部导航开始 -->
    <mt-header title="学前端，到学问">
        <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
        </router-link>
        <router-link slot="right" to="/register1">注册</router-link>
    </mt-header>
    <!-- 顶部导航开始 -->
    <!-- 表单区域开始 -->
    <div>
        <mt-field
        lable="用户名"
        placeholder="请输入用户名"
        type="text"
        v-model="username"
        @blur.native.capture="checkUsername"
        >
        </mt-field>
        <mt-field
        lable="密码"
        placeholder="请输入密码"
        type="password"
        v-model="password"
        @blur.native.capture="checkPassword"
        >
        </mt-field>
        <mt-button type="primary" size="large" @click="handle">快速登录</mt-button>
    </div>
    <!-- 表单区域结束 -->
</div>
</template>
<script>
export default {
    data(){
        return{
            username:"",
            password:""
        };
    },
    methods:{
        //单击免费注册按钮的时候校验表单
        handle(){
            if(this.checkUsername() && this.checkPassword()){
            }
        },
        //检测用户名
        checkUsername(){
            let username=this.username;
            let usernameReg=/^[0-9a-zA-Z]{6,12}$/;
            if(usernameReg.test(username)){
                return true;
            }else{
                this.$toast({
                    message:`用户名格式或内容错误`,
                    position:`top`,
                    duration:5000,
                });
                return false;
            }
        },
        //检测密码
        checkPassword(){
            let password=this.password;
            let passwordReg=/^[0-9A-Za-z\.\-_]{8,15}/;
            if(passwordReg.test(password)){
                return true;
            }else{
                this.$toast({
                    message:"密码错误",
                    position:"middle",
                    duration:5000,
                });
                return false;
            }
        }    
    },
};
</script>