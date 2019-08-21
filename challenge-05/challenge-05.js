/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// let myArray = [ 2, 4, 6, 8, 9];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
/* 
 * function mostrarArray(array) {
 *  return array;
 * }
 */

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// console.log(mostrarArray(array)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
/*
 * function mostrarItemArray(array, index) {
 *  return array[index];
 * }
 */

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// let mySecondArray = [1, 'var', true, [2, 4, 6], {cor: 'vermelho'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
/*
 * console.log(mostrarItemArray(mySecondArray, 0));
 * console.log(mostrarItemArray(mySecondArray, 1));
 * console.log(mostrarItemArray(mySecondArray, 2));
 * console.log(mostrarItemArray(mySecondArray, 3));
 * console.log(mostrarItemArray(mySecondArray, 4));
 */
 

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
/*
 * function book(nomeLivro) {
 *     let estante = {
 *         'o ilusionista': {
 *             quantidadePaginas: 500,
 *             autor: 'Carlos Maia',
 *             editora: 'Nova Palavra'
 *         },
 *         'o poeta louco': {
 *             quantidadePaginas: 400,
 *             autor: 'Heitor Brandi',
 *             editora: 'Nova Palavra'
 *         },
 *         'o atomo': {
 *             quantidadePaginas: 450,
 *             autor: 'João Mascaranhas',
 *             editora: 'Conhecer'
 *         }
 *     }
 * 
 *     let result = nomeLivro === undefined ? estante : estante[nomeLivro];
 *     return result;
 * }
 */

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
