<template>
  <div class="home">
    <div class="flex-row">
      <Sidebar />
      <div class="flex-column body">
        <div class="flex-row head">
          <Navbar />
          <div class="flex-row cart-header">
            <h5>Cart</h5>
            <div class="item">
                <h6>0</h6>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="flex-row product-container">
            <div v-for="item in products" :key="item.id">
                <Card class="card" :image="item.image" :name="item.name" :price="item.price" :id="item.id"/>
            </div>
          </div>
          <div class="item-cart">
            <img src="../../../assets/food-and-restaurant.png" alt="cart-empty">
            <h4>Your cart is empty</h4>
            <p>Please add some items from the menu</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Navbar from '../../../components/_base/Navbar'
import Sidebar from '../../../components/_base/Sidebar'
import Card from '../../../components/_base/Card'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    Card
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    clikBtn (val) {
      this.products = this.products.filter((item) => {
        return item.id !== val
      })
    },
    handleLogin () {
      const data = {
        email: this.email,
        password: this.password
      }
      this.login(data)
        .then((res) => {

        })
    },
    ...mapActions(['login', 'getProducts'])
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
.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.cart-header {
  padding-top: 20px;
  justify-content: center;
  width: 30%;
  height: 70px;
}
.cart-header h5 {
  font-size: x-large;
  font-weight: bold;
}
.item {
  width: 20px;
  height: 20px;
  background-color: #57CAD5;
  color: #fff;
  border-radius: 20px;
  margin-left: 5px;
  margin-top: 5px;
}
.item h6 {
  text-align: center;
}
.body {
  width: 100%;
}
.head {
  box-shadow: 3px 1px 5px rgba(0, 0, 0, 0.15);
}
.content {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
}
.product-container {
  flex-wrap: wrap;
  width: 67%;
  height: auto;
  padding: 15px;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.15);
  background-color: rgba(190, 195, 202, 0.3);
}
.card {
  margin: 9px;
}
.item-cart {
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  width: 33%;
  text-align: center;
}
.item-cart img {
  width: 230px;
  height: 230px;
}
.item-cart h4 {
  margin: 0;
  font-weight: bold;
}
.item-cart p {
  margin: 0;
  color: #CECECE;
}
@media screen and (min-width: 200px) and (max-width: 960px) {
  .cart-header h5{
    font-size: large;
  }
  .item {
    margin-top: 0;
  }
  .content {
    display: flex;
    flex-direction: column;
    height: auto;
  }
  .product-container {
    width: 99%;
    height: auto;
  }
  .item-cart {
    width: 99%;
    padding-bottom: 20px;
    height: auto;
  }
  .item-cart img {
    width: 200px;
    height: 200px;
  }
}
</style>
