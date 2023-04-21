// update_tax_dom() 함수에서 세금을 계산하는 부분 추출하기

function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 0.1);
}

// ->

function calc_tax(total, tax) {
  const result = total * tax;
  return result;
}

function update_tax_dom() {
  set_tax_dom(calc_tax(shopping_cart_total, 0.1));
}

// update_shipping_icons() 함수에서 계산 추출하기

function update_shipping_icons() {
  const buy_buttons = get_buy_buttons_dom();
  for (const i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i];
    const item = button.item;
    if (item.price + shipping_cart_total >= 20) {
      button.show_free_shipping_icon();
    } else {
      button.hide_free_shipping_icon();
    }
  }
}

// ->

function get_is_free(price, total) {
  const is_free = price + total >= 20;
  return is_free;
}

function update_shipping_icons() {
  const buy_buttons = get_buy_buttons_dom();
  for (const i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i];
    const item = button.item;

    if (get_is_free(item.price, shipping_cart_total)) {
      button.show_free_shipping_icon();
    } else {
      button.hide_free_shipping_icon();
    }
  }
}

// update_shipping_icons 분리하기

function update_shipping_icons(cart) {
  const buy_buttons = get_buy_buttons_dom();
  for (const i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i];
    const item = button.item;
    const new_cart = add_item(cart, item);

    if (get_is_free(new_cart)) {
      button.show_free_shipping_icon();
    } else {
      button.hide_free_shipping_icon();
    }
  }
}

// ->

function get_has_free(cart, item) {
  const new_cart = add_item(cart, item);
  return get_is_free(new_cart);
}

function set_free_icon(button, is_show) {
  if (is_show) {
    button.show_free_shipping_icon();
  } else {
    button.hide_free_shipping_icon();
  }
}

function update_shipping_icons(cart) {
  const buy_buttons = get_buy_buttons_dom();
  for (const i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i];
    const item = button.item;
    const new_cart = add_item(cart, item);

    const has_free = get_has_free(cart, item);

    set_free_icon(button, has_free);
  }
}
