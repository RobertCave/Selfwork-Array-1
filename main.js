// Selfwork Array 1
// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

//     Esempio:
//         Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25]
//         Output: [25, 12, 8, 7, 6, 5, 3, 2, 1, -2, -4]
//     Variante:
//         Prova ad ordinali in modo crescente.



        function decrescente(array){
            return array.sort((a, b) => b - a);
        }



        function crescente(array){
    
            return array.sort((a, b) => a - b);

        }

        let array_disordinato = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];


        console.log("Ecco l'array decrescente: "+ decrescente(array_disordinato));
        console.log("Ecco l'array crescente: "+ crescente(array_disordinato));
