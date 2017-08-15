function test() {
  for(let i = 1; i < 3; i++) {
    console.log(i)
  }
}
test()

//1.let const
console.log('let const')
{
  let a, b, c
  [a,b,c=3] = [1,2]
  console.log(a,b,c)
}

//2.结构赋值
console.log('结构赋值')
{
  let a, b, rest
  [a,b,...rest] = [1,2,3,4,5,6]
  console.log(a,b,rest)
}

{
  let a,b
  ({a,b} = {a:1,b:2})
  console.log(a,b)
}

{
  let a = 1
  let b = 2;
  [a,b] = [b,a]
  console.log(a,b)
}

{
  function f() {
    return [1,2]
  }
  let a,b
  [a,b] = f()
}

{
  function f() {
    return [1,2,3,4,5]
  }
  let a,b,c
  [a,,,b] = f()
}

{
  let a = {p:42,q:true}
  let {p,q} = a
  console.log(p,q);
}

{
  let metaData = {
    title: 'abc',
    test: [{
      title: 'test',
      desc: 'description'
    }]
  }
  let {title:esTitle,test:[{title:cnTitle}]} = metaData
  console.log(esTitle,cnTitle);
}

//3.正则扩展
console.log('正则扩展')
{
  let regex = new RegExp(/xyz/ig,'i')
  console.log(regex.flags)
}

{
  let s = 'bbb_bb_b'
  let a1 = /b+/g //从上一次匹配的位置向后匹配
  let a2 = /b+/y //从上一次匹配的位置紧跟着向后匹配

  console.log('one',a1.exec(s),a2.exec(s))
  console.log('two',a1.exec(s),a2.exec(s))
  console.log(a1.sticky,a2.sticky);
}

//4.字符串的扩展
{

}