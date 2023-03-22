class Creator {
    factoryMethod(){};
    operation(){
        console.log("Hi from creator!")
    };
}

class ConcreteCreator extends Creator{
    constructor(){
        super();
        this.operation()
    }
    factoryMethod(name){
        switch(name){
            case "tomato":
                return new Tomato(name)
            case "orange":
                return new Orange(name)
            default:
                console.log("Product type, not specified.")

        }
    }
}

class Product {
    constructor(productName){
        this.productName = productName;
    }

    getProduct(){
        return {
            productName: this.productName,
            msg: this.msg,
        }
    }
}

class Tomato extends Product{
    constructor(productName){
        super(productName)
        this.msg = "Hello from tomato!"
    }
}

class Orange extends Product{
    constructor(productName){
        super(productName)
        this.msg = "Hello from orange!"
    }
}

creator = new ConcreteCreator();
tomato = creator.factoryMethod("tomato");
orange = creator.factoryMethod("orange");

tomatoInfo = tomato.getProduct()
orageInfo = orange.getProduct()

console.log(tomatoInfo)
console.log(orageInfo)
