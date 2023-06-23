class Fabrica {
    metodoFabrica(){};
    iniciar(){
        console.log("Iniciando fabrica...")
    }
}

class FabricaConcreta extends Fabrica {
    numeroDeCategorias = 1
    
    constructor(){
        super();
        this.iniciar();
    }
    
    criarCategoria(categoria){
        categoria = new Categoria(categoria, this.numeroDeCategorias)
        if(categoria != undefined){
            this.numeroDeCategorias += 1
            return categoria
        }
    }
}

class Categoria {
    numeroDeProdutos = 0
    
    constructor(nomeDaCategoria, numeroDaCategoria){
        this.nomeDaCategoria = nomeDaCategoria;
        this.numeroDaCategoria = numeroDaCategoria;
    }
    
    obterCategoria(){
        return {
            numeroDaCategoria: this.numeroDaCategoria,
            categoria: this.nomeDaCategoria
        }
    }
    
    criarProduto(tipoDeProduto, nomeDoProduto){
        switch(tipoDeProduto){
            case "bota":
                return new Bota(nomeDoProduto, this.obterCategoria())
            case "tenis":
                return new Tenis(nomeDoProduto, this.obterCategoria())
            case "camisa":
                return new Camisa(nomeDoProduto, this.obterCategoria())
        }
    }
}

class Produto {
    numero = 1;
    ano = 2023;
    cor = null;
    tipoDoProduto = null;
    
    constructor(nomeDoProduto, categoriaDoProduto){
        this.nomeDoProduto = nomeDoProduto;
        this.categoriaDoProduto = categoriaDoProduto
    }
    
    obterProduto(){
        return {
            categoriaDoProduto: this.categoriaDoProduto,
            nomeDoProduto: this.nomeDoProduto,
            msg: this.msg,
            ano: this.ano,
            cor: this.cor,
            tipoDoProduto: this.tipoDoProduto
        }
    }
    
    definirCor(nomeDaCor){
        this.cor = nomeDaCor
    }
    
    definirTipoDeProduto(tipo){
        this.tipoDoProduto = tipo
    }
}

class Bota extends Produto {
    constructor(nomeDoProduto, categoriaDoProduto){
        super(nomeDoProduto, categoriaDoProduto);
        this.msg = "Bota robusta que topa qualquer terreno."
    }
}

class Tenis extends Produto {
    constructor(nomeDoProduto, categoriaDoProduto){
        super(nomeDoProduto, categoriaDoProduto);
        this.msg = "Um tenis."
    }
}

class Camisa extends Produto {
    constructor(nomeDoProduto, categoriaDoProduto){
        super(nomeDoProduto, categoriaDoProduto);
        this.msg = "Uma camisa."
    }
}

fabrica = new FabricaConcreta(); //Instancio a fabrica

calcados = fabrica.criarCategoria("calcados") // Crio uma categoria chamada calçados
camisas = fabrica.criarCategoria("camisas") //Crio uma segunda categoria chamada camisas

sapato1 = calcados.criarProduto("bota", "Timberland") // Crio um produto na categoria calçados
sapato1.definirCor("Amarelo") // Defini a cor do sapato
sapato1.definirTipoDeProduto("Bota") // Defini o tipo de produto

camisa1 = camisas.criarProduto("camisa", "Addidas") // Crio um produto na categoria camisas
camisa1.definirCor("Amarela e preta") // Defini a cor da camisa
camisa1.definirTipoDeProduto("Basica") // Defini o tipo de produto

camisa2 = camisas.criarProduto("camisa", "RPG") // Crio um outro produto na categoria camisas
camisa2.definirCor("Preta") // Defini a cor da camisa
camisa2.definirTipoDeProduto("Camisa estampada") // Defini o tipo de produto


console.log(sapato1.obterProduto()) // Imprimo o produto criado na categoria calcados
console.log(camisa1.obterProduto()) // Imprimo o produto criado na categoria camisas
console.log(camisa2.obterProduto()) // Imprimo o outro produto criado na categoria camisas