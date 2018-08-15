<template>
  <div>
    <button class="btn btn-primary" @click="increment(100)">Increase</button>
    <button class="btn btn-danger" @click="decrement(100)">Decrease</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
        'increment',
        'decrement'
    ])
  }

  // methods: {
  //   increment() {
  //     this.$store.state.counter++
  //   },
  //   decrement() {
  //     this.$store.state.counter--
  //   }
  // }
}
</script>

<style >
</style>
