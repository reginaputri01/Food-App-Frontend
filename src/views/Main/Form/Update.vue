<template>
<div class="input-container">
    <h5>Data ke-{{$route.params.id}}</h5>
    <div class="col-md-12">
        <div class="card">
            <div class="card-body">
                <form @submit.prevent="updateData()">
                    <div class="form-group">
                        <label for="exampleInput">Name</label>
                        <input type="text" v-model="name" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="exampleInput">Price</label>
                        <input type="number" v-model="price" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="exampleInput">Image</label>
                        <input type="text" v-model="image" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="exampleInput">Status</label>
                        <input type="text" v-model="status" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="exampleInput">Category</label>
                        <input type="text" v-model="idCategory" class="form-control">
                    </div>
                    <div class="btn-container">
                      <router-link to="/products"><ButtonCancel /></router-link>
                      <ButtonUpdate class="btn-update" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ButtonCancel from '../../../components/_base/ButtonCancel'
import ButtonUpdate from '../../../components/_base/ButtonUpdate'
import axios from 'axios'
export default {
  name: 'Update',
  components: {
    ButtonCancel,
    ButtonUpdate
  },
  data () {
    return {
      products: [],
      id: '',
      name: '',
      price: '',
      image: '',
      status: '',
      idCategory: ''
    }
  },
  methods: {
    updateData () {
      axios.patch(`http://localhost:8000/api/v1/products/${this.id}`, {
        name: this.name,
        price: this.price,
        image: this.image,
        status: this.status,
        idCategory: this.idCategory
      })
        .then((res) => {
          console.log(res)
          this.$router.push('/products')
          alert('Update Data Success')
        }).catch((err) => {
          console.log(err)
        })
    }
  }
  // mounted () {
  //   axios.get(`process.env.VUE_APP_API_URL/${this.$route.params.id}`)
  //     .then((res) => {
  //       console.log(res.data.result[0])
  //       const result = res.data.result[0]
  //       this.id = result.id
  //       this.name = result.name
  //       this.price = result.price
  //       this.image = result.image
  //       this.status = result.status
  //       this.idCategory = result.idCategory
  //     })
  // }
}
</script>
<style scoped>
.input-container {
    width: 100%;
    text-align: left;
}
.input-container h5 {
  margin: 20px;
  font-weight: bold;
}
.input-container input {
    margin-bottom: 15px;
}
.btn-container {
  display: flex;
  flex-direction: row;
}
.btn-update {
  margin-top: 10px;
}
</style>
