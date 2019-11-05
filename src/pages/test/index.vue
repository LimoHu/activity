<template>
  <div>
    <button @click="test">测试</button>
  </div>
</template>

<script>
export default {
  mounted () {
    window.refresh = this.refresh;
  },
  methods: {
    /** h5调用安卓方法 */
    test() {
      window.moxiu.intentTo('test', '1111');
      console.log(123);
      return "123";
    },
    /** 安卓回调 */
    refresh() {
      return "安卓回调成功";
      console.log(111);
    }
  }
}
</script>

<style>

</style>