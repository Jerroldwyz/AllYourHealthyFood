class SalesInvoice {
    constructor(fullName, email, address, paymentMethod, shoppingCart, totalCost) {
        this.fullName = fullName;
        this.email = email;
        this.address = address;
        this.paymentMethod = paymentMethod;
        this.shoppingCart = shoppingCart;
        this.totalCost = totalCost;
        let date = new Date();
        this.purchaseDate = date.toString();
    }
}

export default SalesInvoice;