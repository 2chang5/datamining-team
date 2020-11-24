<template>
  <div>
    <!--결과 버튼 및 결과 표시부분-->
    <button v-on:click="passEvent">결과 보기</button>
    <div class="finish">결과:{{ myClass }}</div>
  </div>
</template>

<script>
export default {
  props:['myClass'],
  methods: {
    passEvent: function() {
      this.$emit('pass');
    }
  }
}
</script>

<style scoped>
  .finish {
    margin: 20px;
    font-size: 20px;
  }
</style> 