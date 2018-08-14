<template>
  <div>
    <button class="btn btn-primary" @click="increment">Increase</button>
    <button class="btn btn-danger" @click="decrement">Decrease</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.state.counter++
    },
    decrement() {
      this.$store.state.counter--
    }
  }
}
</script>

<style >
</style>
