// 暴露模块 分别暴露
export function foo() {
  console.log('module1 foo()')
}

export let bar = function () {
  console.log('module1 bar()')
}

export let bar2 = () => {
  console.log('module1 bar2()')
}

export const DATA_ARR = [1, 2, 3, 4, 5]