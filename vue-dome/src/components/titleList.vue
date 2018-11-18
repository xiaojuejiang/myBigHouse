<template>
  <div class="car-wep">
    <div class="carHeader">
      <slot name="header">
        <h1>头部</h1>
      </slot>
    </div>
    <div class="carBody">
      <slot>
        <p>标题栏1</p>
      <p>标题栏2</p>
      <p>标题栏3</p>
      <input type="text">
      <p>标题栏4</p>
      </slot>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .car-wep{
    width: 50%;
    margin: 10px auto;
    border: 1px solid #ccc;
  }
</style>
