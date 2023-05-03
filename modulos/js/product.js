export default class Product { //export default = diz que quer exportar apenas o elemento Product
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