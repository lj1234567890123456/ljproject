<template>
    <div>
        <p>用户名<input type="text" placeholder="请输入用户名" v-model="username"></p>
        <p>性别<input type="text" placeholder="请输入性别" v-model="sex"></p>
        <p><button @click="handle">确认添加</button></p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:'',
            sex:''
        }
    },
    methods:{
        handle(){
            let obj={
                name:this.username,
                sex:this.sex=='女'? true : false
            }
            //提交commit  用户信息并跳转
            this.$store.commit('addFriendMutation',obj);
            this.$router.push('/access1');
            // console.log(this.username),
            // console.log(this.sex),
            // console.log(obj);
        }
    }
}
</script>