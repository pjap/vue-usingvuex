<template>
  <div>
    <button class="btn btn-success" @click="asyncIncrement({ by: 50, duration: 500 })">Increase</button>
    <button class="btn btn-warning" @click="asyncDecrement({ by: 50, duration: 500 })">Decrease</button>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
        'asyncIncrement',
        'asyncDecrement'
    ])
  }

  // Double Use Mutation
  // methods: {
  //   ...mapMutations([
  //       'increment',
  //       'decrement'
  //   ])

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
