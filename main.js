const Animal = function (nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.comer = function () {
    console.log(`${this.nome} está comendo`);
  }

  this.dormir = function () {
    console.log(`${this.nome} está dormindo`);
  }
}

const Cachorro = function (nome, idade, raca, porte) {
  this.raca = raca;
  this.porte = porte;

  Animal.call(this, nome, idade);

  this.latir = function () {
    console.log("au au");
  }

  this.abanarRabo = function () {
    console.log(`${this.nome} está contente`);
  }
}

const Gato = function (nome, idade, raca, pelagem) {
  this.raca = raca;
  this.pelagem = pelagem;

  Animal.call(this, nome, idade);

  this.miar = function () {
    console.log("miau");
  }

  this.ronronar = function () {
    console.log("prrrrrrrrrrr");
  }
}

const animal1 = new Animal("Frederico", 13);
const animal2 = new Cachorro("Bolinha", 4, "pug", "pequeno");
const animal3 = new Gato("Chiquinha", 6, "persa", "branca");