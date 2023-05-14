/**
 * p.243
 * 암묵적 인자 드러내기
 */
function multiply(x, y) {
  return x * y;
}

/**
 * p.244
 * 암묵적 인자 드러내기
 */
function incrementFieldByName(cart, name, field) {
  var item = cart[name];
  var size = item[field];
  var newSize = size + 1;
  var newItem = objectSet(item, field, newSize);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

/**
 * p.246
 * 런타임 체크 추가하기
 */
function incrementFieldByName(cart, name, field) {
  if (field !== 'size' && field !== 'quantity') {
    throw new Error('필드가 잘못되었습니다: ' + field);
  }

  //...
}

/**
 * p.251
 * 연산자를 일급으로 만들기
 */

// * 연산자를 일급으로 만들기
function multiply(x, y) {
  return x * y;
}

// - 연산자를 일급으로 만들기
function minus(x, y) {
  return x - y;
}

// / 연산자를 일급으로 만들기
function divide(x, y) {
  return x / y;
}

/**
 * p.273
 * withArrayCopy() 함수 적용하기
 */
function push(array, elem) {
  withArrayCopy(array, (copy) => {
    copy.push(elem);
  });
}

function drop_last(array) {
  withArrayCopy(array, (copy) => {
    copy.pop();
  });
}

function drop_first(array) {
  withArrayCopy(array, (copy) => {
    copy.shift();
  });
}

/**
 * p.275
 * withObjectCopy() 함수 만들고 적용하기
 */
function withObjectCopy(object, callback) {
  var copy = Object.assign({}, object);
  callback(copy);
  return copy;
}

function objectSet(object, key, value) {
  withObjectCopy(object, (copy) => {
    copy[key] = value;
  });
}

function objectDelete(object, key) {
  withObjectCopy(object, (copy) => {
    delete copy[key];
  });
}

/**
 * p.276
 * tryCatch() 함수 만들기
 */
function tryCatch(tryer, catcher) {
  try {
    return tryer();
  } catch (e) {
    return catcher(e);
  }
}

/**
 * p.277
 * 함수 본문을 콜백으로 바꾸기 리팩토링
 * 두 if 구문 리팩토링해 when() 이라는 함수 만들기
 */
function when(condition, then) {
  if (condition) {
    then();
  }
}

/**
 * p.278
 * when() 함수 이름을 IF()로 바꾸고 else 구문을 콜백 인자로 추가
 */
function IF(condition, then, _else) {
  if (condition) {
    then();
  } else {
    _else();
  }
}

/**
 * p.285
 * 예외가 발생했을 때 에러를 무시하는 함수를 만드는 함수 만들기
 */
function wrapIgnoreError(f) {
  return (a1, a2, a3) => {
    try {
      f(a1, a2, a3);
    } catch (error) {
      return null;
    }
  }
}

/**
 * p/286
 * 다른 숫자에 어떤 숫자를 더하는 makeAdder() 함수로 만들기
 */
function makeAdder(number) {
  return (x) => {
    return number + x;
  }
}
