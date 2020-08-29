<template>
  <div class="input-container">
    <h5>Create New Data</h5>
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="exampleInput">Name</label>
              <input type="text" v-model="name" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="exampleInput">Price</label>
              <input type="number" v-model="price" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="exampleInput">Image</label>
              <input type="file" @change="onFileSelected" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="exampleInput">Status</label>
              <input type="text" v-model="status" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="exampleInput">Category</label>
              <input type="text" v-model="idCategory" class="form-control" required>
            </div>
            <div class="btn-container">
              <router-link to="/products"><ButtonCancel /></router-link>
              <button type="submit" class="btn btn-primary" @click="handleAddProduct">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ButtonCancel from '../../../components/_base/ButtonCancel'
// import ButtonCreate from '../../../components/_base/ButtonCreate'
export default {
  name: 'Insert',
  components: {
    ButtonCancel
    // ButtonCreate
  },
  data () {
    return {
      name: '',
      price: '',
      status: '',
      idCategory: '',
      selectedFile: null
    }
  },
  methods: {
    onFileSelected (event) {
      console.log(event)
      this.selectedFile = event.target.files[0]
    },
    handleAddProduct (event) {
      const fd = new FormData()
      fd.append('image', this.selectedFile, this.selectedFile.name)
      event.preventDefault()
      const data = {
        name: this.name,
        price: this.price,
        status: this.status,
        idCategory: this.idCategory
      }
      this.addProducts(data)
        .then(() => {
          this.$router.push('/products')
        })
        .catch(() => {
          alert('saving error !')
        })
    },
    ...mapActions(['addProducts'])
  }
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
</style>
