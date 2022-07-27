<template>
  <div id="app">
    <GlobalHeader />
    <router-view class="container" />
  </div>
</template>
<script>
import GlobalHeader from '@/components/GlobalHeader'
export default {
  name: 'App',
  components: {
    GlobalHeader,
  },
  created() {
    const _this = this
    _this.$store.dispatch('resize')
    window.addEventListener('resize', function () {
      _this.$store.dispatch('resize')
    })
  },
}
</script>
