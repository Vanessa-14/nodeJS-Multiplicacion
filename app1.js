const fs = require('fs'); //importando un archivo

// let base = 5;

//  for(let i = 1; i <= 10; i++){
//      console.log(`${base} x ${i} = ${base * i}`);
//  }

// fs.writeFile('Ejemplo.txt', 'OLA K ASE', (error) => {  //archivo, parametro, y manipulacion de error
//     if(error) throw error; //comprobacion booleana, pregunta si ele elemnto es true y si si, dispara el error

//     console.log('El archivo Ejemplo.txt ha sido creado con éxito');
// });

// let num = 3;
// let table = "";
// for (let i = 1; i <= 10; i++) {
//     let t = `${i}.-  ${num} x ${i} = ${num * i}`
//     table = `${table}\n${t}`;
//     fs.writeFile('multiplicar'+`${num}`+'.txt', `${table}`, (error) => {
//         if (error) throw error;
//         console.log('La tabla ha sido creada en el archivo con éxito');
//     });
// }

let base = 5;
let datos = ''; //vble auxiliar para ayudar a concatenar
for (let i = 1; i <= 10; i++) {
    datos += `${base} * ${i} = ${base * i}\n`;
}
fs.writeFile(`mike-${base}.txt`, datos, (error) => {
    if (error) throw error;

    console.log('El archivo Ejemplo.txt ha sido creado con éxito');
});