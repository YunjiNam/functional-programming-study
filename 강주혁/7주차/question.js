/**
 * p.299
 * map()을 사용해 필요한 객체가 들어 있는 배열 만들기
 */
map(customers, function (customer) {
  return {
    firstName: customer.firstName,
    lastName: customer.lastName,
    address: customer.address,
  }
})

/**
 * p.304
 */
var testGroup = filter(customers, function (customer) {
  return customer.id % 3 === 0
})

var nonTestGroup = filter(customers, function (customer) {
  return customer.id % 3 !== 0
})

/**
 * p.309
 */
function sum(numbers) {
  return reduce(numbers, 0, function (acc, number) {
    return acc + number
  })
}

function product(numbers) {
  return reduce(numbers, 1, function (acc, number) {
    return acc * number
  })
}

/**
 * p.310
 */
function min(numbers) {
  return reduce(numbers, Infinity, function (acc, number) {
    return acc < number ? acc : number
  })
}

function max(numbers) {
  return reduce(numbers, -Infinity, function (acc, number) {
    return acc > number ? acc : number
  })
}

/**
 * 
 */
function map(array, f) {
  return reduce(array, [], function (acc, element) {
    return [...acc, f(element)]
  })
}

function filter(array, f) {
  return reduce(array, [], function (acc, element) {
    return f(element) ? [...acc, element] : acc
  })
}