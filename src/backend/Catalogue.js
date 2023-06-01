import Item from "./Item";
import products from "./products.json"

class Catalogue {
    constructor() { }

    getCatalogue() {
        var catalogue = []
        products.forEach(product => {
            catalogue.push(new Item(product.id, product.name, product.image, product.price, product.rating));
        });

        return catalogue;
    }

    getItem(id) {
        let item = undefined;
        //linear search
        products.forEach(product => {
            if (product.id === id) {
                item = new Item(product.id, product.name, product.image, product.price, product.rating);
            }
        });

        if (item != undefined) return item;
        
        return false;
    }
}

export default Catalogue;