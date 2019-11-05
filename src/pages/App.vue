<template>
  <transition :name="transitionName">  
    <router-view class="page" />
  </transition>
</template>

<script>
export default {
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left';
      } else {
        this.transitionName = 'slide-right';
      }
    }
  },
  methods: {}
};
</script>

<style>
.page{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: all .5s ease;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-100% 0);
}

</style>