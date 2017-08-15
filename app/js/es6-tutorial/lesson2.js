console.log('string扩展')
{
	let str = 'string'
	console.log('includes',str.includes('c'))
	console.log('start',str.startsWith('str'))
	console.log('end',str.endsWith('ng'))
}

{
	let str = 'abc'
	console.log(str.repeat(2))
}

{
	let name = 'list'
	let info = 'hello world'
	let m = `i am ${name},${info}`
	console.log(m)
}

{
	console.log('1'.padStart(2,'0'))
	console.log('1'.padEnd(2,'0'))
}

{
	let user = {
		name:'list',
		info:'hello world'
	}
	abc`i am ${user.name},${user.info}`
	function abc(s,v1,v2) {
		console.log(s,v1,v2)
	}
}
console.log('数值扩展')
{
	console.log('25',Number.isInteger(25))
	console.log('4.1',Math.trunc(4.1))
	console.log('4.9',Math.trunc(4.9))
	console.log('-4',Math.sign(-5))
}
console.log('数组扩展')
{
	let arr = Array.of(3,5,6,2,67)
	console.log('arr=',arr)
}

{
	let p = document.querySelectorAll('p')
	let pArr = Array.from(p)
	pArr.forEach(function(element) {
		console.log(element.textContent)
	})
	console.log(Array.from([1,4,8],function(item){ return item * 2}))
}

{
	console.log('fill-7',[1,'a',undefined].fill(7))
	console.log('fill,pos',['a','b','c'].fill(7,1,3))
}

{
	for(let index of ['1','c','ks'].keys()) {
		console.log('keys',index)
	}
	for(let [index,values] of ['1','c','ks'].entries()) {
		console.log(index,values)
	}
}

{
	console.log([1,2,3,4,5].copyWithin(0,3,4))
	//将3-4位置复制到0
}

{
	console.log([1,2,3,4,5,6,7].find(function(item){return item > 3}))
	console.log([1,2,3,4,5,6,7].findIndex(function(item){return item > 3}))
}