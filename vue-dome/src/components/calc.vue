<template>
  <div>
    <button @click="calc(-1)">-</button>
    <input @input="handleInput" type="text" :value="value">
    <button @click="calc(1)">+</button>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
    };
  },
  methods: {
    calc(count) {
      this.$emit('input',this.value + count)
    },
    handleInput(e){
      this.$emit('input',parseInt(e.target.value))
    }
  }
};
</script>





 <!--<template>
 <div>
     <button @click='add(-1)' >-</button>
     <input type="text" :value="num">
    <button @click="add(1)">+</button>
 </div>
 </template>

 <script>
export default {
  props: ["num"],
  data() {
    return;
  },
  methods: {
    calc(count) {
      this.value += count;
    }
  }
};
</script>
Add "scoped" attribute to limit CSS to this component only
<style scoped>
</style>
