(function() {
  /*
  Envolva todo o código desse desafio em uma IIFE.
  Crie um arquivo chamado index.html e adicione esse script ao HTML.
  */

  /*
  Crie uma função construtora chamada "Person". Esse construtor deve ter
  as seguintes características:
  - Deve receber 3 parâmetros: `name`, `lastName` e `age`;
  - Deverá ter 3 propriedades:
    - `name` - que receberá o valor do parâmetro `name`;
    - `lastName` - que receberá o valor do parâmetro `lastName`;
    - `age` - que receberá o valor do parâmetro `age`;
  - Deverá ter 3 métodos:
    - `getFullName` - que deve retornar o nome completo do objeto criado,
    no formato:
      - "[NAME] [LASTNAME]"
    - `getAge` - que deverá retornar a idade (age);
    - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
    iremos passar um único argumento, que é a quantidade de anos que devem ser
    adicionados à idade original (age). Esse método deverá retornar o objeto
    que será instanciado.
  */
  class Person {
    constructor(name, lastName, age) {
      this.name = name;
      this.lastName = lastName;
      this.age = age;
    }
    
    get fullName() {
      return `${this.name} ${this.lastName}`;
    }
    
    get age() {
      return this.age;
    }
    
    addAge() {
      this.age += arguments[0];
      return this;
    }
  }

  /*
  Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
  pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
  parâmetros corretamente para o construtor para criar as novas pessoas.
  Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
  */
  console.log( 'Novas pessoas criadas à partir de Person:' );
  let p1 = new Person('Rapha', 'Bellini', 33);
  let p2 = new Person('Leo', 'Heredia', 24);
  let p3 = new Person('Gabriel', 'Moreira', 22);
  
  console.log(p1);
  console.log(p2);
  console.log(p3);


  /*
  Mostre no console o nome completo de cada pessoa.
  */
  console.log( '\nNomes das pessoas:' );
  console.log(p1.fullName);
  console.log(p2.fullName);
  console.log(p3.fullName);

  /*
  Mostre no console as idades de cada pessoa, com a frase:
  - "[NOME COMPLETO] tem [IDADE] anos."
  */
  console.log( '\nIdade das pessoas:' );
  console.log(`${p1.fullName} tem ${p1.age} anos`);
  console.log(`${p2.fullName} tem ${p2.age} anos`);
  console.log(`${p3.fullName} tem ${p3.age} anos`);

  /*
  Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
  cada um. A frase deverá ser no formato:
  - "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
  */
  console.log( '\nNova idade das pessoas:' );
  p1.addAge(2);
  p2.addAge(3);
  p3.addAge(5);
  console.log(`${p1.fullName} agora tem ${p1.age} anos`);
  console.log(`${p2.fullName} agora tem ${p2.age} anos`);
  console.log(`${p3.fullName} agora tem ${p3.age} anos`);
})();
