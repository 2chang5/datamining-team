<template>
  <div class="header">
      <router-link to="/lense">Lense</router-link>  |  
      <router-link to="/weather">Weather</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    color: white;
    background-color: #f1c40f;
    display: flex;
    padding: 8px;
    border-radius: 3px;
}
.header .router-link-exact-active {
    color: #16a085;
}
.header .router-link-active {
    color: black;
}
.header a{
    color: white;
}
</style>