<template>
    <div class="table-container">
        <div class="table-responsive-sm">
            <table class="table">
                <thead>
                  <tr class="row">
                      <th class="col-1 col-sm-1 tes">No</th>
                      <th class="col-4 col-sm-3">Image</th>
                      <th class="col-2 col-sm-2">Name Product</th>
                      <th class="col-3 col-sm-2">Price</th>
                      <th class="col-5 col-sm-2">Category</th>
                      <th class="col-6 col-sm-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                    <tr class="row" v-for="product in products" :key="product.id">
                        <td class="col-1 col-sm-1">{{product.id}}</td>
                        <td class="col-4 col-sm-3"><img :src="product.image" alt="..."></td>
                        <td class="col-2 col-sm-2">{{product.name}}</td>
                        <td class="col-3 col-sm-2">{{product.price}}</td>
                        <td class="col-5 col-sm-2">{{product.nameCategory}}</td>
                        <td class="col-6 col-sm-2 btn-action">
                          <router-link :to="{path:'update', params: {id:id}}"><ButtonUpdate /></router-link>
                          <ButtonDelete @click="deleteData(id)"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import axios from 'axios'
import ButtonUpdate from './ButtonUpdate'
import ButtonDelete from './ButtonDelete'
export default {
  name: 'Table',
  components: {
    ButtonUpdate,
    ButtonDelete
  },
  props: ['id', 'name', 'image', 'price', 'nameCategory', 'update-data'],
  data () {
    return {
      item: ''
    }
  },
  methods: {
    ...mapActions(['getProducts'])
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
.tes {
  background-color: burlywood;
}
.table {
  width: 100%;
  background-color: #fff;
  padding: 20px;
}
.btn-action {
    display: flex;
    flex-direction: row;
}
img {
    width: 150px;
    height: 120px;
}
</style>
