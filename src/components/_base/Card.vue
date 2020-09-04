<template>
  <div class="card-container">
    <div class="container-image" @click="$emit('select-product')">
      <img :src="item.image" :class="active? 'active':''" alt="...">
    </div>
    <div class="desc">
      <h5>{{item.name}}</h5>
      <h6>Rp. {{item.price}}</h6>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Card',
  props: {
    item: {
      type: Object
    },
    active: {
      type: Boolean
    }
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  computed: {
    ...mapGetters({
      products: 'products'
    })
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped>
.card-container {
  width: 250px;
  height: auto;
  background-color: transparent;
  border: none;
}
.container-image{
  width: 100%;
  height: 200px;
  cursor: pointer;
}
.container-image img{
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.active{
  filter: brightness(0.4);
}
.desc {
  text-align: left;
}
h5 {
  margin: 0;
  margin-top: 5px;
  font-size: 20px;
  color: #000;
}
h6 {
  margin: 0;
  margin-top: 3px;
  font-weight: bold;
  font-size: 18px;
  color: #000;
}
</style>
