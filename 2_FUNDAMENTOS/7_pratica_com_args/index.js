// node index.js --a=25 --b=37

const minimist = require('minimist');

// módulo externo
const args = minimist(process.argv.slice(2));

// módulo interno
const soma = require('./soma').soma;

const a = parseInt(args["a"])
const b = parseInt(args["b"])

soma(a, b)