<template>
    <div class="card-container">
      <div>
        <vue-numeric-input  v-model="value" :min="1" :max="10" :step="2"></vue-numeric-input>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CardCart',
  data () {
    return {
      value: 1
    }
  }
}
</script>

<style scoped>
.card-container{
  width: 100%;
  height: 90px;
  margin-bottom: 15px;
  background-color: blueviolet;
}
</style>
