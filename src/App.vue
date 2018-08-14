<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>VUEX</h1>
        <appResult></appResult>
        <appAnotherResult></appAnotherResult>
        <hr>
        <appCounter></appCounter>
        <br><br>
        <appAnotherCounter></appAnotherCounter>
      </div>
    </div>
  </div>
</template>

<script>
import Result from './components/Result.vue'
import Counter from './components/Counter.vue'
import AnotherResult from './components/AnotherResult.vue'
import AnotherCounter from './components/AnotherCounter.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    appResult: Result,
    appCounter: Counter,
    appAnotherResult: AnotherResult,
    appAnotherCounter: AnotherCounter
  }
}
</script>

<style>
</style>
