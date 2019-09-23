const fs = require('fs');

//imprime tabla de multiplicar en consola
let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base) => { //recibe un parametro
        return new Promise((resolve, reject) => { //regresa una promesa, asegurar de que el archivo se va a crear
            let datos = ''; //vrble auxiliar

            for (let i = 1; i <= 10; i++) {
                datos += `${base} * ${i} = ${base * i}\n`;
            }

            fs.writeFile(`mike-${base}.txt`, datos, (error) => {
                if (error) {
                    reject(error); //da una funcion de error, que es interpretable para nodejs
                } else {
                    resolve(`mike-${base}.txt`); //la tabla que se generó
                }

                console.log('El archivo prue.txt ha sido creado con éxito');
            });
        });
    }
    //diciendo al proyecto que se quiere hacer PUBLICA la funcion
module.exports = {
    crearArchivo,
    listarTabla
}