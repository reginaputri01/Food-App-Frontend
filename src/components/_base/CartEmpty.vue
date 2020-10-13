<template>
  <div class="row list m-md-0 m-sm-0">
    <div class="col">
      <div class="row p-md-3 p-sm-1 d-flex justify-content-center">
        <img class="image-empty" src="../../assets/food-and-restaurant.png" />
      </div>
      <div class="row d-flex justify-content-center">
        <h3>Your cart is empty</h3>
      </div>
      <div class="row d-flex justify-content-center">
        <h4>Please add some items from the menu</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartEmpty'
}
</script>

<style scope>
.image-empty {
  width: 250px;
  height: 270px;
}
.row {
  justify-content: center;
}
.cart {
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
  padding: 20px;
}
.list img {
  padding-top: 50px;
}
h3 {
  font-size: 25px;
  line-height: 40px;
}
h4 {
  font-size: 12px;
  line-height: 25px;
  color: #cecece;
}
</style>
