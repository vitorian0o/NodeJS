// node .\index.js --Nome=Guilherme --Profissao=DEV

const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args['Nome'];

console.log(nome);

const profissao = args['Profissao'];

console.log(profissao);

console.log(`Nome: ${nome} - Profissão: ${profissao}`);