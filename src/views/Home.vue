<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul>
      <li v-for="product in products" :key="product.id">{{product.name}} || {{product.price}}</li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
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
