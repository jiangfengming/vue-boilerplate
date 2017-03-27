<template>
  <div class="foo">
    <p>this.a: {{a}}</p>
    <p>this.$store.state.count: {{$store.state.count}}</p>
    <p>Enviroment Variables Defined by webpack.DefinePlugin:</p>
    <pre>{{json(config)}}</pre>
    <p><router-link to="/">goto /</router-link></p>
  </div>
</template>

<style scoped>
.foo {
  color: blue
}
</style>

<script>
import config from '~/config'

export default {
  data() {
    return {
      a: 0,
      config
    }
  },

  methods: {
    json(object) {
      return JSON.stringify(object, null, 2)
    }
  }
}
</script>
