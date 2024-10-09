class Product{
    salesTax = 8.25;

    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: $${this.name}`);
        console.log(`Price: $${this.price.tofixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * (salesTax / 100));
    }

}

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 29.99);


product1.displayProduct();
product2.displayProduct();

const total1 = product1.calculateTotal(salesTax);
console.log(`Total price with Tax: $${total1.tofixed(2)}`);
