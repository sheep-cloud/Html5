/**
 * 包含多个基于state的getter计算属性的对象
 *
 * @type {{name(*): *, age(*): *, other(*): string}}
 */
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
