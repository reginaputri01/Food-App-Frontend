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
    ...mapActions(['interceptorsRequest', 'interceptorsResponse'])
  },
  created () {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }
}
</script>
