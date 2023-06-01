class ShoppingCart{
    constructor() {
        this.cart = [];
    }

    #isItemInCart(id) {
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].id === id) {
                return [
                    true,
                    i
                ];
            }
        }

        return false;
    }

    addItem(item, quantity) {
        let [existsInCart, index] = this.#isItemInCart(item.id);

        try {
            if (existsInCart) {
                this.cart[index].quantity = this.cart[index].quantity + quantity;
            }
            else {
                this.cart.push({item, "quantity" : quantity});
            }

            return true;
        }
        catch(e) {
            return false;
        }
    }

    removeItem(id) {
        let [existsInCart, index] = this.#isItemInCart(id);
        try {
            if (existsInCart) {
                this.cart.splice(index, 1);
            }

            return true;
        }
        catch(e) {
            return false;
        }
    }
}

export default ShoppingCart;