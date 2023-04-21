import { action, computed, makeObservable, observable } from "mobx";
import { Product } from "../types";

class Cart {
  items: { item: Product; quantity: number }[] = [];
  message: String = "";
  total: number = 0;

  constructor() {
    makeObservable(this, {
      items: observable,
      message: observable,
   //   saveMessage: action,
      addItem: action,
      removeItem: action,
      resetCart: action,
      isEmpty: computed,
    });
  }

  addItem(product: Product, quantity: number) {
    const productInCart = this.items.find(
      (item) => item.item.id === product.id
    );

    productInCart
      ? (productInCart.quantity += quantity)
      : this.items.push({ item: product, quantity: quantity });

    this.total += product.price * quantity;
    this.#setLocalStorage();
  }

  removeItem(product: Product) {
    const id = product.id;
    const productInCart = this.items.find((item) => item.item.id === id);
    const productQuantityInCart = productInCart ? productInCart.quantity : 0;

    if (productQuantityInCart === 1) {
      this.items = this.items.filter((item) => item.item.id !== id);
    } else {
      productInCart!.quantity--;
    }
    this.total -= product.price;
    this.#setLocalStorage();
  }

  resetCart() {
    this.items = [];
    this.total = 0;
    this.#setLocalStorage();
  }

  get isEmpty() {
    return this.items.length === 0;
  }

  setItems(items: { item: Product; quantity: number }[]) {
    this.items = items;
    const total = items.reduce(
      (acc, item) => acc + item.item.price * item.quantity,
      0
    );
    this.total = total;
  }

  setMessage(message: String) {
    this.message = message;
  }

  /* ------------------------------- Private -------------------------------- */

  #setLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(this.items));
  }
}

export default Cart;
