const buttons = document.querySelectorAll('.add-to-cart');
let shopping_cart = [];
let shopping_cart_total = 0;

document.querySelectorAll('button').forEach(button =>
  button.addEventListener('click', ({ target }) => {
    const name = target.parentNode.querySelector('.menu-name').textContent;
    const category = target.parentNode.querySelector('.category').textContent;
    const price = target.parentNode.querySelector('.price').textContent;

    add_item_to_cart({ name, category, price: Number(price.replace(/\D/g, '')) });
  }),
);

// 액션
function add_item_to_cart(item) {
  shopping_cart = add_item(shopping_cart, item);
  let total = calc_total(shopping_cart);

  set_cart_total_dom(total);
  update_shipping_icons(total);
  shopping_cart_total = total;
}

// 액션
function set_cart_total_dom(total) {
  document.querySelector('.total-price').textContent = `${total}원`;
}

// 액션
function update_shipping_icons(total) {
  var buy_buttons = get_buy_buttons_dom(shopping_cart);
  buy_buttons.forEach(item => update_shipping_icon(item, total));
}

// 액션
function update_shipping_icon(item, total) {
  var isShown = calc_is_shown(item.price, total);

  if (isShown) item.show_free_shopping_icon();
  else item.hide_free_shopping_icon();
}

// 액션
function get_buy_buttons_dom() {
  const buy_buttons = [];

  buttons.forEach(button => {
    const item = {
      price: Number(button.parentNode.querySelector('.price').textContent.replace(/\D/g, '')),
      show_free_shopping_icon: function () {
        button.innerHTML = '장바구니에 담기 - 무료배송';
      },
      hide_free_shopping_icon: function () {
        button.innerHTML = '장바구니에 담기';
      },
    };
    buy_buttons.push(item);
  });

  return buy_buttons;
}

// 계산
function add_item(array, item) {
  const arrayCopy = [...array];
  arrayCopy.push(item);

  return arrayCopy;
}

// 계산
function calc_tax(total) {
  return total * 0.1;
}

// 계산
function calc_total(cart) {
  const total = cart.reduce((total, item) => total + item.price, 0);
  if (total >= 10000) return total;
  return total + calc_tax(total);
}

// 계산
function calc_is_shown(price, total) {
  if (total >= 10000) return false;
  return price + total >= 10000;
}
