class ShoppingCart{
    constructor() {
        this.cart = [];
    }

    #isItemInCart(id) {
        //linear search
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].item.id == id) {
                return [
                    true,
                    i
                ];
            }
        }

        return [false];
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

    totalCost() {
        let total = 0;

        for (var i = 0; i < this.cart.length; i++) {
            total += this.cart[i].item.price * this.cart[i].quantity;
        }
        console.log(total);
        return total;
    }
}

export default ShoppingCart;