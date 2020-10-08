const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log(`===================`.green);
    console.log(`====Tabla de ${base}====`.green);
    console.log(`===================`.green);

    for (let index = 0; index <= limite; index++) {
        console.log(`${base}* ${index}= ${base * index}\n`);;

    }

}
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`)
            return;
        }

        let data = ''

        for (let index = 0; index <= limite; index++) {
            data += `${base}* ${index}= ${base * index}\n`;

        }
        fs.writeFile(`tablas/tabla-${base}-al${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tablas/tabla-${base}-al${limite}.txt`)
                // console.log('The file has been saved!');
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}