<template>
    <div>
        <ul class="list-unstyled">
            <li class="media"  v-for="item in getCart" :key="item.id">
                <div class="container-img">
                    <img :src="item.image" class="mr-3">
                </div>
                <div class="media-body">
                    <h5 class="mt-0 mb-1">{{item.name}}</h5>
                    <div class="cart-body">
                        <div class="count-box row">
                            <button @click="setMin(item)">-</button>
                            <!-- <p name="count" minValue="0" disabled>{{getCount}}</p> -->
                            <p name="count" minValue="0" disabled>{{item.count}}</p>
                            <button @click="setPlus(item)">+</button>
                        </div>
                        <h6>Rp. {{item.price * item.count}}</h6>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {
      itemCheckout: []
    }
  },
  methods: {
    setPlus (item) {
      console.log(item)
      //   item.count += 1
      //   this.$store.commit('setPlush', id)
      this.plusCountItem(item.id)
      this.setTotalPrice(item.price)
    //   console.log(id)
    },
    setMin (id) {
    //   this.$store.commit('setMinus', id)
    },
    ...mapActions(['plusCountItem', 'getCheckout']),
    ...mapMutations(['setTotalPrice'])
  },
  mounted () {
  },
  computed: {
    ...mapGetters(['getCart', 'getCount'])
  }
}
</script>

<style scoped>
.count-box input{
    width: 30px;
    font-size: 12px;
}
.cart-body{
    display: flex;
    justify-content: space-between;
}
.container-img{
    width: 80px;
    height: 70px;
    margin-right: 10px;
}
.container-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}
.media{
    margin-bottom: 20px;
}
.media-body h5 {
    text-align: left;
    margin-left: 5px;
    margin-bottom: 15px;
}
.count-box {
    border: 1px solid #82DE3A;
    border-radius: 3px;
    width: 100px;
    height: 33px;
    margin-left: 8px;
    margin-top: 5px;
}
.count-box button {
    width: 32px;
    height: 30px;
    border: none;
    background-color: rgba(130, 222, 58, 0.2);
    margin-bottom: 10px;
    color: #82DE3A;
    font-size: 20px;
}
.count-box p {
    margin-bottom: 30px;
    width: 34px;
    height: 30px;
    border: none;
    color: #82DE3A;
    background-color: white;
    font-size: 20px;
}
</style>
