console.log('函数扩展')
{
	function test(x, y = 'world') {
    console.log('默认值', x, y);
  }
  test('hello')
}

{
  let x = 'test'
  function test2(x, y = x) {
    console.log('作用域', x, y);
  }
  test2('kill')
}

{
  function test3(...arg) {
    for (let v of arg) {
      console.log('rest', v);
    }
  }
  test3(1, 2, 3, 4, 'a')
}

{
  console.log(...[1, 2, 3])
}

{
  let arrow = v => v*2
  console.log(arrow(3))
}
console.log('对象扩展')
{
  console.log('字符串', Object.is('abc', 'abc'))
}
// Symbol
{
  let a1 = Symbol()
  let a2 = Symbol()
  console.log(a1 === a3)
  let a3 = symbol.for('a3')
  let a4 = symbol.for('a3')
}
