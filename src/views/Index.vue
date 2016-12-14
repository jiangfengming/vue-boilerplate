<template>
  <div class="foo">
    <p>Hello world!</p>
    <p>this.a: {{a}}</p>
    <p><router-link to="/foo">goto /foo</router-link></p>
    <p><router-link to="/page-not-exist">goto /page-not-exist</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 0
    }
  }
}
</script>
