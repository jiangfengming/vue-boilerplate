export default function() {
  const state = {
    count: 0
  }

  const methods = {
    inc() {
      return state.count++
    }
  }

  return { state, methods }
}
