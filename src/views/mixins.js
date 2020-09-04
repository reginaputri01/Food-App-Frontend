import axios from 'axios'
export default {
  data () {
    return {
      products: [],
      name: '',
      price: '',
      image: '',
      status: ''
    }
  },
  methods: {
    getData () {
      axios.get('http://localhost:8000/api/v1/products')
        .then((res) => {
          this.result = res.data.result
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
