let myModule = {
  data: 'hello',
  foo() {
    console.log('foo()', this.data)
  },
  bar() {
    console.log('bar()', this.data)
  }
}