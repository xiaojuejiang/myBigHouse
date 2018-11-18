<template >
  <div v-show="name===$parent.activeName">
    <slot></slot>
  </div>
</template>
<script >
  export default {
    props:['label','name'],
    data() {
      return {}
    }
  }
</script>
<style scoped >

</style>
