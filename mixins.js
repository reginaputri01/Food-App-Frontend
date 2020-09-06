export const exampleMixin = {
  created () {
    this.logMessage()
  },
  data () {
    return {
      message: 'Hello, Enjoy your life!'
    }
  },
  methods: {
    logMessage () {
      alert(this.message)
    }
  }
}
