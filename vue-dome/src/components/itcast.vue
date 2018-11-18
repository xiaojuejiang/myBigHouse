<template >
  <div class="tab">
    <div class="tab-header">
      <button v-for="items in tabPane" @click="handleClick(items)" :key="items.label" :class="{'tab-btn':true,active:items.name===activeName}">
        {{ items.label }}
      </button>
    </div>
    <div class="tab-body">
      <slot></slot>
    </div>
  </div>
</template>
<script >
export default {
  props: ["value"],
  data() {
    return {
      tabPane: []
    };
  },
  methods: {
    handleClick(tab) {
      this.$emit("input", tab.name);
    }
  },
  mounted() {
    console.log(this.$children);
    this.tabPane = this.$children;
  },
  computed: {
    activeName() {
      return this.value;
    }
  }
};
</script>
<style scoped >
.tab {
  padding: 10px 20px;
}
.tab-btn {
    padding: 0 20px;
    height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    position: relative;
}
.tab-header {
  height: 50px;
  border-bottom: 2px solid #ccc;
}
.active {

  color: red;
}
</style>
