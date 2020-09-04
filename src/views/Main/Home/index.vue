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
                <h6>{{countCart}}</h6>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="flex-column product-container">
            <div class="flex-row filter">
              <div class="dropdown">
                <a
                  class="btn btn-primary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Order By</a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" @click="OrderNewest">The latest</a>
                  <a class="dropdown-item" @click="OrderName">Name</a>
                  <a class="dropdown-item" @click="OrderPrice">Price</a>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group row">
                  <div class="col-sm-10 search">
                    <input type="text" class="form-control" id="inputSearch" placeholder="Search..." v-on:keyup.enter="setSearch">
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-row list-product">
              <div v-for="product in products" :key="product.id">
                <Card class="card" :active="checkProductActive(product.id)" :item="product" @select-product="addCart(product)"/>
              </div>
            </div>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                  <a class="page-link" aria-controls="my-table">Previous</a>
                </li>
                <li class="page-item"><a class="page-link">1</a></li>
                <li class="page-item"><a class="page-link">2</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="flex-column cart">
            <div class="item-cart">
              <Cart />
            </div>
            <div class="checkout">
              <div class="flex-row ppn">
                <h5>Total :</h5>
                <h5>Rp. 105.000*</h5>
              </div>
              <p>*Belum termasuk ppn</p>
              <div class="button-container">
                <button type="button" data-toggle="modal" data-target="#exampleModalCenter">Checkout</button>
                <button>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
// import mixins from '../../mixins'
import Navbar from '../../../components/_base/Navbar'
import Sidebar from '../../../components/_base/Sidebar'
import Card from '../../../components/_base/Card'
import Cart from '../../../components/_base/Cart'

export default {
  name: 'Home',
  // mixins: [mixins],
  components: {
    Navbar,
    Sidebar,
    Card,
    Cart
  },
  data () {
    return {
      cart: [],
      email: '',
      password: ''
    }
  },
  methods: {
    addToCart (item) {
      event.on('form-submitted', data => {
        this.list.push(data)
      })
    },
    clikBtn (val) {
      this.products = this.products.filter((item) => {
        return item.id !== val
      })
    },
    OrderName (e) {
      e.preventDefault()
      this.getProductsByName()
        .then((res) => {
          console.log(res)
          // this.products = res.data.result
        })
        .catch((err) => {
          console.log(err)
        })
    },
    OrderPrice (e) {
      e.preventDefault()
      this.getProductsByPrice()
        .then((res) => {
          console.log(res)
          // this.products = res.data.result
        })
        .catch((err) => {
          console.log(err)
        })
    },
    OrderNewest (e) {
      e.preventDefault()
      this.getProductsByNewest()
        .then((res) => {
          console.log(res)
          // this.products = res.data.result
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setSearch (e) {
      // console.log(e.target.value)
      this.handleSearch(e.target.value)
      // const url = `?search=${e.target.value}`
      // this.getProducts(url)
    },
    checkProductActive (id) {
      return this.getCart.find(item => {
        return item.id === id
      })
    },
    ...mapActions(['getProducts', 'getProductsByName', 'getProductsByPrice', 'getProductsByNewest', 'handleSearch']),
    ...mapMutations(['addCart'])
  },
  computed: {
    ...mapGetters({
      products: 'products',
      countCart: 'countCart',
      getCart: 'getCart'
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
  width: 67%;
  height: auto;
  padding: 15px;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.15);
  background-color: rgba(190, 195, 202, 0.3);
  display:block;
  padding:5px;
  margin-top:5px;
  width: 67%;
  height: 560px;
  overflow: auto;
}
.dropdown-item {
  cursor: pointer;
}
.filter {
  margin-left: 10px;
  margin-bottom: 20px;
}
.list-product {
  flex-wrap: wrap;
}
.card {
  margin: 9px;
}
.cart {
  width: 33%;
}
.item-cart {
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 370px;
  text-align: center;
  padding: 20px;
  display: block;
  overflow: auto;
}
.checkout {
  padding: 0px 20px;
  margin-top: 15px;
}
.ppn {
  display: flex;
  justify-content: space-between;
}
.button-container {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
button {
  border: none;
  height: 40px;
  margin: 3px;
  color: #fff;
  font-size: medium;
  font-weight: 600;
  cursor: pointer;
}
button:first-of-type {
  background: #57CAD5;
}
button:last-of-type {
  background: #F24F8A;
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
  .cart {
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
