<template>
  <div>
    <p>Number of Clicks : {{ stringCounter }}</p>
    <p>The Counter Is : {{ doubleCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  // To Mix Computed Getter and Another Computed Property
  computed: {
    ...mapGetters([
      'doubleCounter',
      'stringCounter'
    ])
  }

  // Using Object
  // computed: mapGetters({
  //   stringCounter : 'doubleCounter',
  //   doubleCounter : 'stringCounter'
  // })

  // Calling A Single Getters From State
  // computed: {
  //   counter() {
  //     return this.$store.getters.doubleCounter
  //   },
  //   clicks() {
  //     return this.$store.getters.stringCounter
  //   }
  // }
}
</script>

<style >
</style>
