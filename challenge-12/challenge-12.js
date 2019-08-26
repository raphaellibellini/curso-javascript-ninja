(function() {
  /*
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */

  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  console.log( 'Propriedades de "person":' );
  let person = {
    name: 'Raphaelli',
    lastName: 'Bellini',
    age: 33
  }

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log(Object.keys(person));

  /*
  Crie um array vazio chamado `books`.
  */
  let books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  console.log( '\nLista de livros:' );
  books.push(
    livro1 = {
      name: 'A Cabana',
      pages: 541
    },
    livro2 = {
      name: 'O Sabio',
      pages: 701
    },
    livro3 = {
      name: 'O iluminado',
      pages: 400
    }
  )

  /*
  Mostre no console todos os livros.
  */
  console.log(books);

  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log( '\nLivro que está sendo removido:' );
  console.log(books.pop());

  
  /*
  Mostre no console os livros restantes.
  */
  console.log( '\nAgora sobraram somente os livros:' );
  console.log(books);

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  console.log( '\nLivros em formato string:' );
  let booksToString = JSON.stringify(books);

  /*
  Mostre os livros nesse formato no console:
  */
  console.log(booksToString);

  /*
  Converta os livros novamente para objeto.
  */
  let booksToObject = JSON.parse(booksToString);
  console.log( '\nAgora os livros são objetos novamente:' );

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  books.forEach(function(item) {
    for(let prop in item) {
      console.log(`${prop}: ${item[prop]}`);
    }
  });

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  console.log( '\nMeu nome é:' );
  let myName = ['R', 'A', 'P', 'H', 'A', 'E', 'L', 'L', 'I'];

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log(myName.join(''));

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log( '\nMeu nome invertido é:' );
  console.log(myName.reverse().join(''));

  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log( '\nAgora em ordem alfabética:' );
  console.log(myName.sort());
})();
