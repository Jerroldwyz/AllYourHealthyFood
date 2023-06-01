import users from "./users.json"
import Catalogue from "./Catalogue"
import ShoppingCart from "./ShoppingCart";

class UserAccount {
    #shoppingCart;
    #catalogue;

    constructor() {
        this.username = undefined;
        this.role = "guest";
        this.#shoppingCart = new ShoppingCart();
        this.#catalogue = new Catalogue();
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
        return this.#catalogue.getCatalogue();
    }

    getItem(id) {
        return this.#catalogue.getItem(id);
    }

    addItemToCart(id, quantity) {
        let item = this.getItem(id);
        return this.#shoppingCart.addItem(item, quantity);
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