<template>
  <div class="container form-container">
    <h2 class="mb-4">Form Register</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="name" v-model="name" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input type="email" v-model="email" class="form-control" aria-describedby="emailHelp" required>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" v-model="password" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary" @click="handleRegister">Submit</button>
      <div class="account">
        <router-link to="/login"><small>You already have an account? <b>Login</b></small></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    handleRegister (e) {
      e.preventDefault()
      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      this.register(data)
        .then(() => {
          this.$router.push('/login')
        })
    },
    ...mapActions(['register'])
  }
}
</script>

<style scoped>
.form-container {
  width: 430px;
  height: 500px;
  padding: 65px 40px 40px 40px;
  margin-top: 80px;
  background-color: #fcfcfc;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
button {
  margin-top: 10px;
  width: 100%;
}
.account {
  margin-top: 10px;
  text-align: center;
}
small {
  color: black;
}
</style>
