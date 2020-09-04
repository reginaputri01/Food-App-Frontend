<template>
    <div class="table-container">
        <div class="table-responsive-sm">
            <table class="table">
                <thead>
                  <tr class="row padding-lr">
                      <th class="col-1 col-sm-1 tes">No</th>
                      <th class="col-4 col-sm-3">Image</th>
                      <th class="col-2 col-sm-2">Name Product</th>
                      <th class="col-3 col-sm-2">Price</th>
                      <th class="col-5 col-sm-2">Category</th>
                      <th class="col-6 col-sm-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                    <tr class="row padding-lr" v-for="product in products" :key="product.id">
                      <td class="col-1 col-sm-1">{{product.id}}</td>
                      <td class="col-4 col-sm-3"><img :src="product.image"></td>
                      <td class="col-2 col-sm-2">{{product.name}}</td>
                      <td class="col-3 col-sm-2">{{product.price}}</td>
                      <td class="col-5 col-sm-2">{{product.nameCategory}}</td>
                      <td class="col-6 col-sm-2 btn-action">
                        <i class='fas fa-edit' @click="$emit('event-update', product)"></i>
                        <i class='fas fa-trash' @click="$emit('event-delete', product.id)"></i>
                      </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Table',
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
.padding-lr {
  padding-left: 15px;
  padding-right: 15px;
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
.btn-action i {
  margin-right: 30px;
  font-size:24px
}
.fa-trash {
  color: red;
}
.btn-action i:hover {
  cursor: pointer;
  opacity: 0.5;
}
img {
    width: 150px;
    height: 120px;
}
</style>
