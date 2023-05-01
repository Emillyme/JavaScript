const p1 = {
    name: "Computador",
    price: 3000.0,
    quantity: 2
}

const Product = function(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.total = function(){
    return this.price * this.quantity;
}

Product.prototype.add = function(amount){
    this.quantity = this.quantity + amount;
}

Product.prototype.remove = function(amount){
    if(this.quantity >= amount){
        this.quantity -= amount;
    }
}

Product.prototype.label = function(){
    return "Dados: " + this.name + ", " + this.price;
}

const p2 = new Product("Monitor", 800.0, 10);
const p3 = new Product("Mouse", 50.0, 4);

//EM CLASSE 

class Product2 {
    constructor( name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    total(){
        return this.price * this.quantity;
    }

    add(amount){
        this.quantity += amount;
    }

    remove(amount){
        if (this.quantity >= amount){
            this.quantity -= amount;
        }
    }

    label(){
        return "Dados: " + this.name + ", " + this.price(2);
    }
}


const p22 = new Product2("Monitor2", 800.0, 10);
const p33 = new Product2("Mouse2", 50.0, 4);