import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: 'regina putri',
    user: {},
    token: localStorage.getItem('token') || null,
    products: [],
    id: '',
    name: '',
    price: '',
    image: '',
    status: '',
    idCategory: ''
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    setProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    interceptorsResponse () {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        console.log(error)
        return Promise.reject(error)
      })
    },
    interceptorsRequest (setex) {
      console.log('interse')
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${setex.state.token}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    register (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/v1/users/register', payload)
          .then((res) => {
            console.log(res)
            setex.commit('setUser', res.data.result)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    login (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/v1/users/login', payload)
          .then((res) => {
            console.log(res)
            setex.commit('setUser', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            alert('Email / password failed')
            reject(err)
          })
      })
    },
    // logout (setex) {
    //   axios.get('http://localhost:8000/api/v1/users')
    //     .then((res) => {
    //       setex.commit('setUser', res.data.result)
    //       localStorage.removeItem('token', res.data.result.token)
    //     })
    // },
    addProducts (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/v1/products', payload)
          .then((res) => {
            console.log(res)
            setex.commit('setProducts', res.data.result)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    getProducts (setex) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:8000/api/v1/products')
          .then((res) => {
            // console.log(res)
            setex.commit('setProducts', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    deleteProducts (setex, id) {
      return new Promise((resolve, reject) => {
        axios.delete(`http://localhost:8000/api/v1/products/${id}`)
          .then((res) => {
            // console.log(res)
            setex.commit('setProducts', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    updateProducts (setex) {
      return new Promise((resolve, reject) => {
        axios.patch(`http://localhost:8000/api/v1/products/${this.id}`, {
          name: this.name,
          price: this.price,
          image: this.image,
          status: this.status,
          idCategory: this.idCategory
        })
          .then((res) => {
            setex.commit('setProducts', res.data.result)
            resolve(res.data.result)
            this.$router.push('/products')
            alert('Update Data Success')
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    }
  },
  getters: {
    isLogin (state) {
      return state.token !== null
    },
    products (state) {
      return state.products
    }
  }
})
