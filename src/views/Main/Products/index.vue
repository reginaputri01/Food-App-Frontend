<template>
  <div>
    <div class="container-fuild">
      <div class="flex-row">
        <Sidebar />
        <div class="flex-column body">
          <div class="flex-row head">
            <NavMenu class="navbar"/>
          </div>
          <div class="product-container">
            <div class="btn-container">
              <button class="btn btn-primary" @click="toggleModal">+ Add Data</button>
            </div>
            <TableProducts @event-update="handleUpdate" @event-delete="handleDelete"/>
          </div>
        </div>
      </div>
    </div>
    <Modal v-show="modalActive" :data="dataModal" @close-modal="toggleModal" @fire-event="handleEventModal" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Modal from '../../../components/_base/Modal'
import NavMenu from '../../../components/_base/NavMenu'
import Sidebar from '../../../components/_base/Sidebar'
import TableProducts from '../../../components/_base/TableProducts'

export default {
  name: 'Products',
  components: {
    Modal,
    NavMenu,
    Sidebar,
    TableProducts
  },
  data: () => ({
    modalActive: false,
    dataModal: {
      id: null,
      name: '',
      image: null,
      price: '',
      status: 1,
      idCategory: 0
    }
  }),
  methods: {
    ...mapActions(['getProducts', 'insertProduct', 'editProduct', 'deleteProduct']),
    toggleModal () {
      this.modalActive = !this.modalActive
      if (!this.modalActive) {
        this.clearModal()
      }
    },
    handleEventModal () {
      this.dataModal.id ? this.updateProduct() : this.addProduct()
    },
    updateProduct () {
      const data = new FormData()
      data.append('name', this.dataModal.name)
      data.append('image', this.dataModal.image)
      data.append('price', this.dataModal.price)
      data.append('status', this.dataModal.status)
      data.append('idCategory', this.dataModal.idCategory)
      const container = {
        id: this.dataModal.id,
        data: data
      }
      this.editProduct(container)
        .then((res) => {
          this.clearModal()
          this.getProducts()
          this.$toast.success('Update Success.')
        })
        .catch(() => {
          this.$toast.error('Update Failed.')
        })
    },
    handleUpdate (data) {
      this.modalActive = true
      this.dataModal.id = data.id
      this.dataModal.name = data.name
      this.dataModal.image = data.image
      this.dataModal.price = data.price
      this.dataModal.status = data.status
      this.dataModal.idCategory = data.idCategory
    },
    handleDelete (id) {
      this.$toast.success('Delete Success.')
      this.deleteProduct(id)
      this.getProducts()
    },
    clearModal () {
      this.dataModal.id = null
      this.dataModal.name = ''
      this.dataModal.image = null
      this.dataModal.price = ''
      this.dataModal.status = ''
      this.dataModal.idCategory = 0
      this.modalActive = false
    },
    addProduct () {
      const data = new FormData()
      data.append('name', this.dataModal.name)
      data.append('image', this.dataModal.image)
      data.append('price', this.dataModal.price)
      data.append('status', this.dataModal.status)
      data.append('idCategory', this.dataModal.idCategory)
      this.insertProduct(data)
        .then((res) => {
          this.clearModal()
          this.getProducts()
          this.$toast.success('Insert Success.')
        })
        .catch(() => {
          this.$toast.error('Insert Failed.')
        })
    }
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
.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.btn-container {
    text-align: left;
    margin-bottom: 20px;
}
.navbar {
    width: 100%;
}
.body {
  width: 100%;
}
.head {
  box-shadow: 3px 1px 5px rgba(0, 0, 0, 0.15);
}
.product-container {
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  padding: 15px;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.15);
  background-color: #efefef;
}
@media screen and (min-width: 200px) and (max-width: 960px) {
  .product-container {
    width: 99%;
    height: auto;
  }
}
</style>
