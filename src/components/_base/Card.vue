<template>
  <div class="card-container">
    <router-link to="/homeselect">
      <img :src="image" alt="...">
    </router-link>
    <div class="name">
      <h5>{{name}}</h5>
      <h6>Rp. {{price}}</h6>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Card',
  props: ['image', 'name', 'price', 'id'],
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
img {
  border-radius: 10px 10px 0 0;
  width: auto;
  height: 200px;
}
img:hover {
  opacity: 0.5;
}
.name {
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
