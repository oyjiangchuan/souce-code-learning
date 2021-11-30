// EMPTY_OBJ 空对象
const EMPTY_OBJ = (process.env.NODE_ENV !== 'production') ? Object.freeze({}) : {}

// EMPTY_ARR 空数组
const EMPTY_ARR = (process.env.NODE_ENV !== 'production') ? Object.freeze([]) : []

// NOOP 空函数
// 场景：1. 方便判断， 2. 方便压缩
const NOOP = () => { }

// NO 永远返回 false 的函数
const NO = () => false

// isOn 是否以 on 开头的且 on 之后首字母不是小写字母字符串
const onRE = /^on[^a-z]/
const isOn = (key) => onRE.test(key)

// isModelListener 字符串是否以 onUpdate: 开头
const isModelListener = (key) => key.startsWith('onUpdate:')

// extend 合并(对象合并)
const extend = Object.assign

// remove 移除数组中的某一项
const remove = (arr, el) => {
  const i = arr.indexOf(el)
  if (i > -1) {
      arr.splice(i, 1)
  }
}

// hasOwn 是否对象自身属性
const hasOwnProperty = Object.prototype.hasOwnProperty
const hasOwn = (val, key) => hasOwnProperty.call(val, key)

// isArray 判断是否为数组
const isArray = Array.isArray

// isMap 判断是否为 Map 对象
const isMap = (val) => toTypeString(val) === '[object Map]'

// isSet 判断是否为 Set 对象
const isSet = (val) => toTypeString(val) === '[object Set]'

// isDate 判断是否为 Date 对象
const isDate = (val) => val instanceof Date

// isFunction 判断是否为函数
const isFunction = (val) => typeof(val) === 'function'

// isString 判断是否为字符串
const isString = (val) => typeof(val) === 'string'

// isSymbol 判断是否为symbol
const isSymbol = (val) => typeof(val) === 'symbol'

// isObject 判断是否为对象
const isObject = (val) => val !== null && typeof val === 'object'

// isPromise 判断是否为Promise
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

// objectToString 对象转字符串
const objectToString = Object.prototype.toString

// toTypeString 对象转字符串
const toTypeString = (value) => objectToString.call(value)

// toRawType 对象转字符串 截取后几位
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1)
}

// isPlainObject 是否为纯对象
const isPlainObject = (val) => toTypeString(val) === '[object Object]'

// isIntegerKey 判断是不是数字型的字符串key值
const isIntegerKey = (key) => isString(key) && 
  key !== 'NaN' &&
  key[0] !== '-' &&
  '' + parseInt(key, 10) === key

// mackMap 传入一个以逗号分隔的字符串，生成一个map(键值对)，返回一个函数检测key值在不在这个map中 第二个参数是小写选项
const mackMap = (str, expectsLowerCase) => {
  const map = Object.create(null)
  const list = str.split(',')
  for (let i = 0; i <= list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val]
}

// cacheStringFunction 缓存
const cacheStringFunction = (fn) => {
  const cache = Object.create(null)
  // 这里包一层()可能是为了里面的this不丢失
  return ((str) => {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  })
}

// getSingle 获取单例
const getSingle = (fn) => { 
  let result
  return (() => {
    return result || (result = fn.apply(this, arguments))
  })
}

// ...

export {
  EMPTY_OBJ,
  EMPTY_ARR,
  NOOP,
  NO,
  isOn,
  isModelListener,
  extend,
  remove,
  hasOwn,
  isArray,
  isMap,
  isSet,
  isDate,
  isFunction,
  isString,
  isSymbol,
  isObject,
  isPromise,
  objectToString,
  toTypeString,
  toRawType,
  isPlainObject,
  isIntegerKey,
  mackMap,
  cacheStringFunction,
  getSingle
}