<template>
  <svg :class="`svg-icon icon-${name}`" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="less" scoped>
.svg-icon {
  display: block;
}
</style>
