const getters = {
  name(state) {
    return state.name
  },
  age(state) {
    return state.age
  },
  other(state) {
    return `My name is ${state.name}, I am ${state.age}.`
  }
}

export default getters
