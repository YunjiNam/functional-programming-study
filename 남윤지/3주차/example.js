// p. 120
// 연락처 추가하는 함수 카피-온-라이트 버전으로 바꾸기

var mailing_list= [];
function addContact(email) {
	mailing_list.push(email);
}
function submitFormHandler(event) {
	var form = event.target;
	var email = form.elements["email"].value;
	addContact(email);
}

// ->

var mailingList = []
function addContact(mailingList, email) {
	var copy = mailingList.slice()
	copy.push(email)
	return copy;
}
function submitFormHandler(event) {
	var form = event.target
	var email = form.elements["email"].value
	mailingList = addContact(mailingList, email)
}

// p. 125
// .pop() 메서드를 카피-온-라이트 버전으로 바꾸기

// 1. 일기 함수와 쓰기 함수로 분리하기
function lastElement(arr) {
	return arr[arr.length - 1]
}

function dropLast(arr) {
	const newArr = arr.slice()
	newArr.pop()
	return newArr
}

// 2. 값 두개를 리턴하는 함수로 만들기

function pop(array) {
	return {
		last : lastElement(array),
		array : dropLast(array)
	}
}

// p. 128 ~ p.130
// .push() 메서드를 카피-온-라이트 버전으로 바꾸기

function push(arr, el) {
	const newArr = arr.slice()
	newArr.push(el)
	return newArr
}

// add_contact 리펙터링 하기

function add_contact(mailing_list, email) {
	var list_copy = mailing_list.slice()
	lost_copy.push(email)
	return list_copy
}

// ->

function add_contact(mailing_list, email) {
	return push(mailing_list, email)
}

// arraySet() 함수 만들기

a[15] = 2

// ->

function arraySet(array, idx, value) {
	const copy = array.slice()
	copy[idx] = value
	return copy
}

// p. 136 ~ p.139
// objectSet()함수 만들기

a[15] = 2

// ->

function objectSet(object, key, value) {
	const copy = object.assign({}, object)
	copy[key] = value
	return copy
}

// setPrice() 리펙터링 하기

function setPrice(item, new_price) {
	var item_copy = Object.assign({}, item)
	item_copy.price = new_price
	return item_copy
}

// ->

function setPrice(item, new_price) {
	return objectSet(item, “price”, new_price)
}

// setQuantity()함수 만들기

function setQuantity(item, new_quantity) {
	return objectSet(item, “quantity”, new_ quantity)
}

// .delete 연산을 카피-온-라이트 버전으로 바꾸기

function objectDelete(object, key) {
	const copy =Object.assign({}, object)
	delete copy[key] 
	return copy
}

// p.144
// 중첩된 동작을 카피-온-라이트 버전으로 만들기

function setQuantityByNam(cart, name, quantity) {
	for(var i = 0; i < cart.length; i++) {
		if (cart[i].name === name) {
			cart[i].quantity = quantity
		}
	}
}

// ->

function setQuantityByNam(cart, name, quantity) {
	const copy = cart.slice()
	for(var i = 0; i < copy.length; i++) {
		if (copy[i].name === name) {
			copy[i] = objectSet(copy[i], “quantity”, quantity)
		}
	}
	return copy
}
