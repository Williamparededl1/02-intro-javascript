
// console.log('Hola Mundo mijin');
// ya no usar nunca los var aunque nunca los use
// se puede usar el let y el const en difertnetes scope x ejemplo en in if 
// osea se puede volver a inicializar las variables que estaban usando

const nombre = 'William';
const apellido = 'Paredes';

let valorDado = 5;

console.log(nombre,apellido,valorDado);

valorDado = 10;

console.log(nombre,apellido,valorDado);

if (true) {
    let valorDado = 6;
    console.log(valorDado);
}

console.log(valorDado);
