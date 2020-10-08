//REQUIREDS
/**
 * 3 TIPOS DE REQUIRED:
 * 1-PROYECTO PROPIO DE NODE ('FS'): es decir que esa libreria ya existe NODE y simplemente tenemos que definirla
 * 2-PAQUETES QUE NO SON NATIVOS DE NODE ('EXPRESS'): NO ES PROPIA DE NODE. NO EXISTE EN LA DOC. es un paquete que se instala y posteriormente lo utilizaremos.
 * son codigos o expansiones que otras personas hicieron por nosotros.
 * 3- ARCHIVOS CREADOS POR NOSOTROS. Esos se identifican './qqch' o '../qqch' y deberian estar en algun lugar de nuestro proyecto
 */
// const fs = require('fs');
const argv = require('./config/yargs').argv
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.blue}`))
            .catch(e => console.log(e))
        console.log('Crear');
        break;
    default:
        console.log('Comando no reconocido');

}
console.log(argv);


// console.log(process.argv);
let argv2 = process.argv
    // let param = argv[2]
    // let base = param.split('=')[1]

// console.log('limite', argv.base);
// console.log(argv2);