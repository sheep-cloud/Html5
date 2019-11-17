let myModule2 = {
  data: 'hello-2',
  foo() {
    console.log('foo()', this.data)
  },
  bar() {
    console.log('bar()', this.data)
  }
}