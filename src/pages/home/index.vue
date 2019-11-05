<template>
  <div class="home">
    <div class="activity">
      <div class="title">
        <img src="../../assets/img/huodong.png" alt />
        <span>活动活动</span>
      </div>
      <div class="big" @click="toActivityPage('/tiger')"><img src="../../assets/img/tiger.png" alt=""></div>
      <div class="list">
        <img class="small" src="../../assets/img/egg.jpg" @click="toActivityPage('/egg')"/>
        <img class="small" />
        <img class="small" />
        <div class="more">
          <img src="../../assets/img/more.png" alt="">
        </div>
      </div>
    </div>
    <div class="dynamic">
      <p class="title">
        <img src="../../assets/img/donghua.png" alt />
        <span>多样的样式</span>
      </p>
      <div class="list">
        <img v-for="index in 8" :key="index">
        <div class="more">
          <img src="../../assets/img/more.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  methods: {
    toActivityPage (path) {
      this.$router.push(path)
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  .title {
    font-size: 16px;
    & * {
      vertical-align: middle;
      font-weight: bold;
    }
    img {
      width: 30px;
      height: auto;
    }
  }
  .activity {
    margin-top: 20px;
    padding: 0 10px;
    .title {
      color: #ffc300;
    }
    .big {
      width: 100%;
      height: 120px;
      line-height: 120px;
      background: #f5f5f5;
      border-radius: 5px;
      margin-top: 10px;
      text-align: center;
      font-weight: bold;
      padding: 10px;
      box-sizing: border-box;
      img{
        height: 100%;
      }
    }
    .list {
      display: flex;
      justify-content: space-around;
      .small {
        flex: 1;
        height: 60px;
        margin: 10px 10px 0 0;
        background: rgb(255, 228, 181);
        border-radius: 5px;
      }
      .more{
        width: 60px;
        background: #f5f5f5;
        border-radius: 5px;
        margin-top: 10px;
        padding: 10px;
        box-sizing: border-box;
        img{
          width: 100%
        }
      }

    }
  }
  .dynamic {
    margin-top: 20px;
    padding: 0 10px;
    .title {
      color: #1296db;
    }
    .list{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      img{
        width: 30%;
        height: 80px;
        margin-top: 10px;
        background: rgb(255, 228, 181);
        border-radius: 5px;
      }
      .more{
        width: 30%;
        height: 80px;
        line-height: 80px;
        background: #f5f5f5;
        border-radius: 5px;
        margin-top: 10px;
        padding: 10px;
        box-sizing: border-box;
        text-align: center;
        img{
          margin-top: 0;
          width: 40px;
          height: auto;
          background: none;
          border-radius: 0;
        }
      }
    }
  }
}
</style>