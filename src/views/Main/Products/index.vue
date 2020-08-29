<template>
  <div class="flex-row">
    <Sidebar />
    <div class="flex-column body">
      <div class="flex-row head">
        <Navbar class="navbar"/>
      </div>
      <div class="product-container">
        <div class="btn-container">
          <router-link to="/insert">
            <ButtonAdd />
          </router-link>
        </div>
        <TableProducts v-on:update-data="getData"/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../../components/_base/Navbar'
import Sidebar from '../../../components/_base/Sidebar'
import TableProducts from '../../../components/_base/TableProducts'
import ButtonAdd from '../../../components/_base/ButtonAdd'

export default {
  name: 'Products',
  components: {
    Navbar,
    Sidebar,
    TableProducts,
    ButtonAdd
  }
}
</script>
<style scoped>
.colom {
  background-color: chartreuse;
}
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
.cart-header {
  padding-top: 20px;
  justify-content: center;
  width: 30%;
  height: 70px;
}
.cart-header h5 {
  font-size: x-large;
  font-weight: bold;
}
.item {
  width: 20px;
  height: 20px;
  background-color: #57CAD5;
  color: #fff;
  border-radius: 20px;
  margin-left: 5px;
  margin-top: 5px;
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
  .cart-header h5{
    font-size: large;
  }
  .item {
    margin-top: 0;
  }
  .content {
    display: flex;
    flex-direction: column;
    height: auto;
  }
  .product-container {
    width: 99%;
    height: auto;
  }
}
</style>
