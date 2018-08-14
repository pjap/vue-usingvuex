<template>
  <div>
    <button class="btn btn-success" @click="increment">Increase</button>
    <button class="btn btn-warning" @click="decrement">Decrease</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations([
        'increment',
        'decrement'
    ])
  }

  // Single Use Mutations
  // methods: {
  //   increment() {
  //     this.$store.commit('increment')
  //   },
  //   decrement() {
  //     this.$store.commit('decrement')
  //   }
  // }
}
</script>

<style >
</style>
