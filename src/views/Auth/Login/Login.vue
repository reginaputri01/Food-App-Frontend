<template>
  <div class="container form-container">
    <h2 class="mb-4">Form Login</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" aria-describedby="emailHelp" required>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" v-model="password" id="exampleInputPassword1" required>
      </div>
      <button type="submit" class="btn btn-danger" @click="handleLogin">Submit</button>
      <div class="account">
        <router-link to="/register"><small>You don't have an account yet? <b>Register</b></small></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin (e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password
      }
      console.log(data)
      this.login(data)
        .then(() => {
          this.$router.push('/home')
        })
        .catch(() => {
          alert('email/password failed')
        })
    },
    ...mapActions(['login'])
  }
}
</script>

<style scoped>
.form-container {
  width: 430px;
  height: 440px;
  padding: 65px 40px 40px 40px;
  margin-top: 110px;
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
