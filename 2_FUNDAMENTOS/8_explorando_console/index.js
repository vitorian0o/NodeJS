// mais de um valor - interpolação de valores
const x = 10;
const y = 'Guilherme';
const z  = [1, 2];

console.log(x, y, z);
// mais de um valor

// contagem de impressões
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
// contagem de impressões

// variável entre string
console.log('O nome é %s, ele é programador', y)
// variável entre string

// limpar o console
setTimeout(() => {
    console.clear();
}, 5000)
// limpar o console