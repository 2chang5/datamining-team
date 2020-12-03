<template>
  <div id="app">
    <shopping></shopping>
  </div>
</template>

<script>

import Shopping from './views/shopping.vue'

export default {
  components: {
    Shopping
  },
}
</script>

<style>
body {
  text-align: center;
  background-color: aliceblue;
  padding: 0;
  margin: 0;
  font-family: 'Ubuntu', sans-serif;
}
input {
  border-style: groove;
  width:200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
