<template>
  <div>
    <hr>
    <p>The Counter Another Result Is : {{ counter }}</p>
    <p></p>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.doubleCounter
    }
  }
}
</script>

<style >
</style>
