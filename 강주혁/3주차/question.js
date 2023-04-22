/**
 * p.120 연습문제
 * 메일링 리스트에 연락처를 추가하는 코드를 카피-온-라이트 형식으로 바꾸기
 */
var mailing_list = [];

function push_on_array(array, value) {
  var new_array = array.slice();
  new_array.push(value);
  return new_array;
}

function add_contact(list, email) {
  return push_on_array(list, email);
}

function submit_form_handler(event) {
  var form = event.target;
  var email = form.elements["email"].value;
  mailing_list = add_contact(mailing_list, email);
}

/**
 * p.125 연습문제
 * .pop() 메서드를 카피-온-라이트 형식으로 바꾸기
 */

// 1. 읽기 함수와 쓰기 함수로 분리
function get_last(array) {
  return array[array.length - 1];
}

function remove_last(array) {
  return array.slice(0, array.length - 1);
}

// 2. 값 두 개를 리턴하는 함수로 만들기
function pop(array) {
  const array_copy = array.slice();
  const last = array_copy.pop();
  return {
    last: last,
    array: array_copy
  }
}

/**
 * p.128 연습문제
 * .push() 메서드를 카피-온-라이트 형식으로 바꾸기
 */
function push(array, elem) {
  return [...array, elem];
}

/**
 * p.129 연습문제
 * 앞에서 만든 함수를 사용새 add_contact() 함수 리팩토링
 */
function add_contact(mailing_list, email) {
  return push(mailing_list, email);
}

/**
 * p.130 연습문제
 * arraySet() 함수 만들기  ex) a[15] = 2
 */
function arraySet(array, idx, value) {
  const newArray = [...array];
  newArray[idx] = value;
  return newArray;
}

/**
 * p.136 연습문제
 * objectSet() 함수 만들기 ex) o["price"] = 37
 */
function objectSet(object, key, value) {
  const newObject = Object.assign({}, object);
  newObject[key] = value;

  return newObject;
}

/**
 * setPrice() 함수 리팩토링
 */
function setPrice(item, new_price) {
  return objectSet(item, "price", new_price);
}

/**
 * setQuantity() 함수 구현
 */
function setQuantity(item, new_quantity) {
  return objectSet(item, "quantity", new_quantity)
}

/**
 * delete 연산
 */
function objectDelete(object, key) {
  const newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}

/**
 * p.144 연습문제
 */
function setQuantityByName(cart, name, quantity) {
  const newCart = [...cart];
  return newCart.map(item => {
    const newItem = Object.assign({}, item);
    if (newItem.name === name) newItem.quantity = quantity;
  })
}