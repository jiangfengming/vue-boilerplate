export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          $state: this.$root.$options.store.state
        }
      },

      created() {
        this.$store = this.$root.$options.store
        this.$state = this.$store.state
      }
    })
  },

  create(modules) {
    const store = {
      state: {},

      $replaceState(state) {
        for (const k in state) {
          Object.assign(store.state[k], state[k])
        }
      }
    }

    for (const m in modules) {
      store.state[m] = modules[m].state
      store[m] = modules[m].methods
    }

    return store
  }
}
