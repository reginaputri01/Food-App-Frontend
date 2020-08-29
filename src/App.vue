<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
</style>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions(['interceptorsRequest'])
  },
  mounted () {
    console.log('hello')
    // this.interceptorsRequest()
  }
}
</script>
