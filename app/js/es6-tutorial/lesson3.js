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
// set -map
{
  let list = new Set()
  list.add(5) // add 方法
  list.add(7)
  console.log('size', list.size)
  let arr = [1, 2, 3, 4, 5]
  let set = new Set(arr)
}

{
  let arr = [1, 3, 2, 1 , 2, 3]
  let list = new Set(arr)
}

{
  let arr = ['add', 'delete', 'clear', 'has']
  let list = new Set(arr)
  for(let key of list.keys()) {
    console.log(key);
  }
  for (let value of list.values()) {
    console.log(value)
  }
  list.forEach(v => {
    console.log(v)
  })
  list.keys()
  list.has('has')
  iist.delete('delete')
  list.clear()
}

{
  let weakList = new WeakSet()
}

{
  let map = new Map()
  let arr = ['123']
  map.set(arr, 456)
  map.get(arr)
}

{
  let map = new Map([['a', 123], ['b', 456]])
}

{
  // map 和 array 的对比
  let map = new Map()
  let array = []
  // 增
  map.set('t', 1)
  array.push({ t: 1 })
  // 查
  let map_exist = map.has('t')
  let array_exist = array.find(item => item.t)
  // 改
  map.set('t', 2)
  array.forEach(item => item.t ? item.t = 2 : '')
  // 删
  map.delete('t')
  let index = array.findIndex(item => item.t)
  array.splice(index, 1)
}

{
  // set 和 array的对比
  let set = new Set()
  let array = []
  // 增
  set.add({ t: 1 })
  array.push({ t: 1 })
  // 查
  let set_exist = set.has({ t: 1 })
  let array_exist = array.find(item => item.t)
  // 改
  set.forEach(item => item.t ? item.t = 2 : '')
  array.forEach(item => item.t ? item.t = 2 : '')
  // 删
  set.forEach(item => item.t ? set.delete(item) : '')
  let index = array.findIndex(item => item.t)
  array.splice(index, 1)
}

{
  // set 和 map 和 Object 的对比
  let item = { t: 1 }
  let map = new Map()
  let set = new Set()
  let obj = {}
  // 增
  map.set('t', 1)
  set.add(item)
  obj['t'] = 1
  // 查
  let map_exist = map.has('t')
  let set_exist = map.has(item)
  let obj_exist = 't' in obj
  // 改
  map.set('t', 2)
  item.t = 2
  obj['t'] =2
  // 删
  map.delete('t')
  set.delete(item)
  delete obj['t']
}
// Proxy 和 Reflect
{
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  }
  let monitor = new Proxy(obj, {
    // 拦截对象属性的读取
    get (target, key) {
      return target[key].replace('2017', '2018')
    },
    // 拦截对象设置属性
    set (target, key, value) {
      if (key === 'name') {
        return target[key] = value
      } else {
        return target[key]
      }
    },
    // 拦截 key in object 操作
    has (target, key) {
      if (key === 'name') {
        return target[key]
      } else {
        return false
      }
    },
    //  拦截删除
    deleteProperty (target, key) {
      if (key.indexOf('_') > -1) {
        delete target[key]
        return true
      } else {
        return target[key]
      }
    },
    // 拦截Object.keys, Object.gerOwnPropertySymbols, Object.getOwnPropertyNames
    ownKeys (target) {
      return Object.keys(target).filter(item => item != 'time')
    }
  })
  console.log(monitor.time)
}

{
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  }
  Reflect.get(obj, 'time')
}
// 类与对象
{
  class Parent {
    constructor(name = 'zcr') {
      this.name = name
    }
    get longName () {
      return 'I am' + this.name
    }
    set longName (value) {
      this.name = value
    }
  }
  let v_parent = new Parent('cr')
  class Child extends Parent {
    constructor (name = 'child') {
      super(name)
      this.type = 'child'
    }
  }
}
// Generator 抽奖
{
  let draw = function (count) {
    console.info(`剩余${count}次`);
  }
  let residue = function* (count) {
    while (count > 0) {
      count --
      yield draw(count)
    }
  }

  let star = residue(5)
  let btn = document.createElement('button')
  btn.id = 'start'
  btn.textContent = '抽奖'
  document.body.appendChild(btn)
  document.getElementById('start').addEventListener('click', function () {
    star.next()
  }, false)
}
// 长轮询
{
  let ajax = function* () {
    yield new Promise (function(resolve, reject) {
      setTimeout(function() {
        resolve({ code: 0 })
      }, 200);
    })
  }

  let pull =function () {
    let genertaor = ajax()
    let step = genertaor.next()
    step.value.then(function (d) {
      if (d.code !== 0) {
        setTimeout(function() {
          console.log('wait')
          pull()
        }, 1000);
      } else {
        console.log(d)
      }
    })
  }

  pull()
}