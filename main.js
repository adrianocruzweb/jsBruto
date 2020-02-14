/*function soma(a,b){
    return a + b;
}*/

/*const soma = (a=3,b=6) => a+b;

console.log(soma(1));*///não consegue dar um resultado porque não é parametro suficiente
//console.log(soma());

/*const usuario = {
    nome:'Diego',
    idade:23,
    empresa:'RocketSeat'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);*/

/*const arr = [1,2,3,4,5];

const [a,b,...c] = arr;

console.log(a);
console.log(b);
console.log(c);*/

//Rest

/*function soma(...params){//soma(a,b,...params)
    return params.reduce((total,next)=>total+next);
}
console.log(soma(3,4,5));*/

//Spread
/*const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
    nome:'Adriano',
    idade:32,
    empresa:'Arquivoteca',
};

const usuario2 = {...usuario1, nome: 'Diego'};

console.log(usuario2);*/

/*const nome = "Adriano";
const idade = 32;

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
*/

/*const nome = 'Adriano';
const idade = 32;

const usuario = {
    nome,
    idade,
    empresa: 'arquivoteca',
};

console.log(usuario);*/

import {soma} from './funcoes';

console.log(soma(1,2));
