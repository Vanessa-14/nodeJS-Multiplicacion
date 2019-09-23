const { crearArchivo, listarTabla } = require('./multiplicar/multiplicacion');
const argumentos = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: { //parametro
            demand: true, //demand: requerido
            alias: 'b'
        },
        limite: { //parametro
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Exporta en un archivo la tabla de multiplicar ', {
        base: { //parametro
            demand: true, //demand: requerido
            alias: 'b'
        }
    })
    .help() //ayuda de como usar la aplic en la consola
    .argv;

let base = 7;
let comando = argumentos._[0]; //argum: objeto de yargs. Toma como array 

//llamar logicas de negocio
switch (comando) {
    case 'listar':
        listarTabla(argumentos.base, argumentos.limite);
        break;
    case 'crear':
        crearArchivo(argumentos.base);
        break;
    default:
        console.log(`Comando no reconocido: ${comando}`);
}



// crearArchivo(base)
//     .then(respuesta => console.log(`Archivo creado: ${respuesta}`)) //espera recibir respuesta o promesa RESOLVE
//     .catch(error => console.log(error)); //manipular error REJECT