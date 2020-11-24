<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/Toolbar';

export default {
  components: {
    ToolBar
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
