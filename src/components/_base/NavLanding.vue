<template>
  <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand title" href="#">FoodApp</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link active" to="#">Home <span class="sr-only">(current)</span></router-link>
          <router-link class="nav-item nav-link" to="/home">Menu</router-link>
          <router-link class="nav-item nav-link" to="/products">Product</router-link>
          <div class="auth">
            <router-link class="nav-item nav-link" to="/login">Login</router-link>
            <p class="nav-item nav-link">|</p>
            <router-link class="nav-item nav-link" to="/register">Register</router-link>
          </div>
        </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
.nav-item {
  margin-top: 20px;
}
.auth {
  display: flex;
  flex-direction: row;
  font-weight: bold;
  width: 170px;
  padding-left: 20px;
}
</style>
