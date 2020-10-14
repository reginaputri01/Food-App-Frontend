<template>
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="head-container">
                      <div class="title">
                        <div class="checkout">Checkout</div>
                        <div class="receipt">Receipt no: #010410919</div>
                      </div>
                      <div class="cashier-name">Cashier : Pevita Pearce</div>
                    </div>
                </div>
                <div class="modal-body">
                  <div class="main">
                    <div class="content p-2">
                      <div class="item mb-2" v-for="cart in getCart" :key="cart.id">
                          <div>{{cart.name}} {{cart.count}}x</div>
                          <div class="harga">Rp. {{cart.price}}</div>
                      </div>
                      <div class="item">
                          <div>Ppn 10%</div>
                          <div class="harga">Rp. {{totalPrice / 10}}</div>
                      </div>
                      <!-- <div class="price" v-for="cart in getCart" :key="cart.id">
                        <div class="price">Rp. {{cart.price * cart.count}}</div>
                      </div> -->
                      <div class="row mt-3">
                        <div class="price">Total Rp. {{totalPrice + (totalPrice / 10)}}</div>
                      </div>
                    </div>
                  <div class="method-payment">Payment : Cash</div>
                </div>
                </div>
                <div class="column p-3 text-center">
                  <button type="button" class="btn btn-primary mb-2" @click="postOrder()">Print</button>
                  <div class="mb-2">Or</div>
                  <button type="button" class="btn btn-secondary">Send Email</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  name: 'ModalCheckout',
  data: () => ({
    dataModal: {
      id: null,
      invoice: 'Reginaput',
      cashier: 'Pevita Pearce',
      orders: '',
      amount: ''
    }
  }),
  props: ['products'],
  methods: {
    postOrder (data) {
      axios
        .post(`${process.env.VUE_APP_ENDPOINT}/api/v1/histories`, { orders: this.getCart.name, amount: this.getCart.totalPrice })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {
    ...mapGetters({
      getCart: 'getCart',
      totalPrice: 'totalPrice',
      histories: 'histories'
    })
  }
}
</script>

<style scoped>
.head-container {
  width: 100%;
}
.title {
  display: flex;
  justify-content: space-between;
}
.title .checkout {
  font-weight: 550;
  font-size: 22px;
}
.title .receipt {
  font-weight: 500;
}
.title .cashier-name {
  font-size: 12px;
  height: 50px;
  font-weight: 600;
}
.harga {
  width: 20%;
}
.item {
  display: flex;
  justify-content: space-between;
  font-weight: normal;
  font-size: 17px;
}
.price {
  width: 100%;
  padding-right: 25px;
  text-align: right;
  font-size: 18px;
  font-weight: bold;
}
button {
  width: 100%;
  border: none;
}
button:first-of-type {
  background: #F24F8A;
}
button:last-of-type {
  background: #57CAD5;
}
</style>
