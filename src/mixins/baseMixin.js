// src/mixins/myMixin.js
export default {
  data() {
    return {
      mixinMessage: 'Hello from Mixin!'
    }
  },
  methods: {
    mixinLog() {
      console.log(this.mixinMessage)
    }
  },
  mounted() {
    console.log('Mixin mounted hook called')
  }
}
