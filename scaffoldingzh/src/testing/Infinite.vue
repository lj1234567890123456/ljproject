<template>
  <div>
    <div
      style="border: 1px solid #f00"
      infinite-scroll-distance="20"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
    >
      <p v-for="(v, k) of n" :key="k">{{ v }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      n: 40,
      // 标识当前的状态
      // 如果现在服务器正在处理请求，既使进行滚动范围也不再触发
      // 滚动函数,false表示没有禁用,true表示已禁用
      busy: false,
    };
  },
  methods: {
    loadMore() {
      this.$indicator.open({
        text:`加载中........`,
        spinnerType:"fading-circle"
      });
      this.busy = true;
      window.setTimeout(() => {
        this.n += 40;
        this.busy = false;
        this.$indicator.close();
      }, 5000);
    },
  },
};
</script>