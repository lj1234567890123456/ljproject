<template>
    <div>
        <button @click="handle">单击我获取服务器的数据，并且添加到vuex中</button>
    </div>
</template>
<script>
export default {
    methods:{
        handle(){
            this.$store.dispatch('getServerData');
            this.$router.push('/access1');
        }
    }
}
</script>