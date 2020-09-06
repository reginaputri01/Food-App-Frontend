import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    minCount: 0,
    user: {},
    token: localStorage.getItem('token') || null,
    products: [],
    paginations: null,
    carts: []
  },
  mutations: {
    setMinus (state) {
      state.count--
    },
    setPlush (state) {
      state.count++
    },
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setProductsByName (state, payload) {
      state.products = payload
    },
    setProductsByPrice (state, payload) {
      state.products = payload
    },
    setProductsByNewest (state, payload) {
      state.products = payload
    },
    setPaginations (state, payload) {
      state.paginations = payload
    },
    addCart (state, payload) {
      const isCart = state.carts.find((item) => {
        return item.id === payload.id
      })
      console.log(isCart)
      if (!isCart) {
        const item = payload
        item.count = 1
        state.carts.push(item)
      } else {
        console.log(payload.id)
        state.carts = state.carts.filter((item) => {
          return item.id !== payload.id
        })
      }
    }
  },
  actions: {
    interceptorsResponse (context) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        console.log(error.response.data.result.message)
        if (error.response.status === 401) {
          console.log(error.response)
          if (error.response.data.result.message === 'invalid token') {
            context.commit('setToken', null)
            localStorage.removeItem('token')
            router.push('/login')
            alert('maaf anda tidak boleh merubah token dengan sendirinya')
          } else if (error.response.data.result.message === 'token expired') {
            context.commit('setToken', null)
            localStorage.removeItem('token')
            router.push('/login')
            alert('maaf session habis silahkan login kembali')
          }
        }
        return Promise.reject(error)
      })
    },
    interceptorsRequest (context) {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${context.state.token}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    register (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/v1/users/register', payload)
          .then((res) => {
            console.log(res)
            context.commit('setUser', res.data.result)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/v1/users/login', payload)
          .then((res) => {
            console.log(res)
            context.commit('setUser', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            axios.defaults.headers.common.Authorization = `Bearer ${context.state.token}`
            resolve(res.data.result[0])
          })
          .catch((err) => {
            alert('Email / password failed')
            reject(err)
          })
      })
    },
    insertProduct (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/v1/products', payload)
          .then((res) => {
            console.log(res)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    editProduct (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch('http://localhost:8000/api/v1/products/' + payload.id, payload.data)
          .then((res) => {
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    deleteProduct (context, id) {
      return new Promise((resolve, reject) => {
        axios.delete('http://localhost:8000/api/v1/products/' + id)
          .then((res) => {
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getProducts (context) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:8000/api/v1/products')
          .then((res) => {
            // console.log(res)
            context.commit('setProducts', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    getProductsByName (context) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:8000/api/v1/products?sort=name')
          .then((res) => {
            // console.log(res)
            context.commit('setProductsByName', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getProductsByPrice (context) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:8000/api/v1/products?sort=price')
          .then((res) => {
            // console.log(res)
            context.commit('setProductsByPrice', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getProductsByNewest (context) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:8000/api/v1/products?sort=createdAt')
          .then((res) => {
            // console.log(res)
            context.commit('setProductsByNewest', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    handleSearch (context, key) {
      return new Promise((resolve, reject) => {
        axios.get(`http://localhost:8000/api/v1/products?search=${key}`)
          .then((res) => {
            resolve(res.data.result)
            context.commit('setProducts', res.data.result)
            // context.commit('setPaginations', res.data.paginations)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    }
  },
  getters: {
    getCount (state) {
      return state.count
    },
    isRegister (state) {
      return state.token == null
    },
    isLogin (state) {
      return state.token !== null
    },
    products (state) {
      return state.products
    },
    getCart (state) {
      return state.carts
    },
    countCart (state) {
      return state.carts.length
    }
  }
})
