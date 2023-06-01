import users from "./users.json"
import Catalogue from "./Catalogue"
import ShoppingCart from "./ShoppingCart";

class UserAccount {
    #shoppingCart;

    constructor() {
        this.username = undefined;
        this.role = "guest";
        this.#shoppingCart = new ShoppingCart();
    }

    login(username, password) {
        if (!users[username]) {
            return false;
        }

        if (users[username].password != password) {
            return false;
        }

        this.username = username;
        this.role = users[username].role;

        return true;
    }

    logout() {
        this.username = undefined;
        this.role = "guest";
    }

    getCatalogue() {
        return Catalogue.getCatalogue();
    }

    getItem(id) {
        return Catalogue.getItem(id);
    }

    addItemToCart(id) {
        return this.#shoppingCart.addItem(this.getItem(id));
    }

    removeItemFromCart(id) {
        return this.#shoppingCart.removeItem(id);
    }

    getShoppingCartList() {
        return this.#shoppingCart.cart;
    }
}

var account = new UserAccount();

export default account;