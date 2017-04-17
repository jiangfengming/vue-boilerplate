<template>
<div class="home">
  <h1>/</h1>
  <p>Hello world!</p>
  <p>this.a: {{a}}</p>
  <p>this.$state.foo.count: {{$state.foo.count}}</p>
  <p>Enviroment Variables Defined by webpack.DefinePlugin:</p>
  <pre>{{JSON.stringify(config, null, 2)}}</pre>
  <p><router-link to="/foo">goto /foo</router-link></p>
  <p><router-link to="/page-not-exist">goto /page-not-exist</router-link></p>
</div>
</template>

<script>
import config from '~/config'

export default {
  data: () => ({
    a: 0,
    config
  })
}
</script>

<style scoped>
.home {
  color: blue;
}
</style>
