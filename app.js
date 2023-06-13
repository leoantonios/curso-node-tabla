const {generarArchivoTabla} = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs')

console.clear();

/* const [,,arg3 = 'base=5'] = process.argv;
const [,base = 5] = arg3.split('=');
console.log(base);
 */

console.log(argv);

console.log(argv.base);


/* const base = 6; */
generarArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, colors.bgGreen('creado')))
    .catch(err => console.log(err))