import Vue from 'vue'
import Store from './Store'
import createFoo from './foo'

Vue.use(Store)

export default function() {
  return Store.create({
    foo: createFoo()
  })
}
