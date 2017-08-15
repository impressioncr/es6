/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(4);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function test() {
	  for (var i = 1; i < 3; i++) {
	    console.log(i);
	  }
	}
	test();

	//1.let const
	console.log('let const');
	{
	  var a = void 0,
	      b = void 0,
	      c = void 0;
	  var _ref = [1, 2];
	  a = _ref[0];
	  b = _ref[1];
	  var _ref$ = _ref[2];
	  c = _ref$ === undefined ? 3 : _ref$;

	  console.log(a, b, c);
	}

	//2.结构赋值
	console.log('结构赋值');
	{
	  var _a = void 0,
	      _b = void 0,
	      rest = void 0;
	  _a = 1;
	  _b = 2;
	  rest = [3, 4, 5, 6];

	  console.log(_a, _b, rest);
	}

	{
	  var _a2 = void 0,
	      _b2 = void 0;
	  var _a$b = { a: 1, b: 2 };
	  _a2 = _a$b.a;
	  _b2 = _a$b.b;

	  console.log(_a2, _b2);
	}

	{
	  var _a3 = 1;
	  var _b3 = 2;
	  var _ref2 = [_b3, _a3];
	  _a3 = _ref2[0];
	  _b3 = _ref2[1];

	  console.log(_a3, _b3);
	}

	{
	  var f = function f() {
	    return [1, 2];
	  };

	  var _a4 = void 0,
	      _b4 = void 0;

	  var _f = f();

	  var _f2 = _slicedToArray(_f, 2);

	  _a4 = _f2[0];
	  _b4 = _f2[1];
	}

	{
	  var _f3 = function _f3() {
	    return [1, 2, 3, 4, 5];
	  };

	  var _a5 = void 0,
	      _b5 = void 0,
	      _c = void 0;

	  var _f4 = _f3();

	  var _f5 = _slicedToArray(_f4, 4);

	  _a5 = _f5[0];
	  _b5 = _f5[3];
	}

	{
	  var _a6 = { p: 42, q: true };
	  var p = _a6.p,
	      q = _a6.q;

	  console.log(p, q);
	}

	{
	  var metaData = {
	    title: 'abc',
	    test: [{
	      title: 'test',
	      desc: 'description'
	    }]
	  };

	  var esTitle = metaData.title,
	      _metaData$test = _slicedToArray(metaData.test, 1),
	      cnTitle = _metaData$test[0].title;

	  console.log(esTitle, cnTitle);
	}

	//3.正则扩展
	console.log('正则扩展');
	{
	  var regex = new RegExp(/xyz/ig, 'i');
	  console.log(regex.flags);
	}

	{
	  var s = 'bbb_bb_b';
	  var a1 = /b+/g; //从上一次匹配的位置向后匹配
	  var a2 = new RegExp('b+', 'y'); //从上一次匹配的位置紧跟着向后匹配

	  console.log('one', a1.exec(s), a2.exec(s));
	  console.log('two', a1.exec(s), a2.exec(s));
	  console.log(a1.sticky, a2.sticky);
	}

	//4.字符串的扩展
	{}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _templateObject = _taggedTemplateLiteral(['i am ', ',', ''], ['i am ', ',', '']);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	console.log('string扩展');
	{
		var str = 'string';
		console.log('includes', str.includes('c'));
		console.log('start', str.startsWith('str'));
		console.log('end', str.endsWith('ng'));
	}

	{
		var _str = 'abc';
		console.log(_str.repeat(2));
	}

	{
		var name = 'list';
		var info = 'hello world';
		var m = 'i am ' + name + ',' + info;
		console.log(m);
	}

	{
		console.log('1'.padStart(2, '0'));
		console.log('1'.padEnd(2, '0'));
	}

	{
		var abc = function abc(s, v1, v2) {
			console.log(s, v1, v2);
		};

		var user = {
			name: 'list',
			info: 'hello world'
		};
		abc(_templateObject, user.name, user.info);
	}
	console.log('数值扩展');
	{
		console.log('25', Number.isInteger(25));
		console.log('4.1', Math.trunc(4.1));
		console.log('4.9', Math.trunc(4.9));
		console.log('-4', Math.sign(-5));
	}
	console.log('数组扩展');
	{
		var arr = Array.of(3, 5, 6, 2, 67);
		console.log('arr=', arr);
	}

	{
		var p = document.querySelectorAll('p');
		var pArr = Array.from(p);
		pArr.forEach(function (element) {
			console.log(element.textContent);
		});
		console.log(Array.from([1, 4, 8], function (item) {
			return item * 2;
		}));
	}

	{
		console.log('fill-7', [1, 'a', undefined].fill(7));
		console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 3));
	}

	{
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = ['1', 'c', 'ks'].keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var index = _step.value;

				console.log('keys', index);
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = ['1', 'c', 'ks'].entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var _step2$value = _slicedToArray(_step2.value, 2),
				    _index = _step2$value[0],
				    values = _step2$value[1];

				console.log(_index, values);
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}
	}

	{
		console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
		//将3-4位置复制到0
	}

	{
		console.log([1, 2, 3, 4, 5, 6, 7].find(function (item) {
			return item > 3;
		}));
		console.log([1, 2, 3, 4, 5, 6, 7].findIndex(function (item) {
			return item > 3;
		}));
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	console.log('函数扩展');
	{}

/***/ })
/******/ ]);