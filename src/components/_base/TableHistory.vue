<template>
  <table class="table">
    <thead>
        <tr>
            <th scope="col">INVOICES</th>
            <th scope="col">CASHIER</th>
            <th scope="col">DATE</th>
            <th scope="col">ORDER</th>
            <th scope="col">AMOUNTS</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="history in histories" :key="history.id">
            <td>{{history.invoice}}</td>
            <td>{{history.cashier}}</td>
            <td>{{history.date}}</td>
            <td>{{history.orders}}</td>
            <td>{{history.amount}}</td>
        </tr>
    </tbody>
    </table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'TableHistory',
  methods: {
    ...mapActions(['getHistory'])
  },
  computed: {
    ...mapGetters({
      histories: 'histories'
    })
  },
  mounted () {
    this.getHistory()
  }
}
</script>

<style>

</style>
