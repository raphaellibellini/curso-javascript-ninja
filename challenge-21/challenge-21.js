/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Challenge 20</title>
    <style>
        body { font-family: sans-serif }
        label { display: block }
        input { margin-bottom: 10px }
    </style>
</head>
<body>
    <input type="text" data-js='inputTime' />
    <button data-js='start'>START</button>
    <button data-js='stop'>STOP</button>
    <button data-js='reset'>RESET</button>
    
    <script>
        let inputTime = document.querySelector('[data-js="inputTime"]');
        inputTime.value = 0;
        let temporizador;
        

        let btnStart = document.querySelector('[data-js="start"]');
        let btnStop = document.querySelector('[data-js="stop"]');
        let btnReset = document.querySelector('[data-js="reset"]');

        function start() {
            inputTime.value++;
            temporizador = setTimeout(start, 1000);
        }

        btnStart.addEventListener('click', start);

        btnStop.addEventListener('click', function() {
            clearTimeout(temporizador);;
        });

        btnReset.addEventListener('click', function() {
            inputTime.value = 0;
            clearTimeout(temporizador);
        })
    </script>
</body>
</html>
