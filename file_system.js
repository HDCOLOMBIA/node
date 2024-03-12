const fs = require('fs');

//write files in routes pc o server, with content text
// fs.writeFile('./test.txt','KSJHDASKJDHASIOUDNASDKJASHDKJASHDKJH',function (err) {
//     if (err){
//         console.log(err);
//     }
//     console.log('Archivo creado correctamente');
// });

// Best XD
// if(fs.existsSync('./test.txt')) {
//     console.log('El archivo ya existe');
// } else {
//     fs.writeFile('./test.txt', 'KSJHDASKJDHASIOUDNASDKJASHDKJASHDKJH', function (err) {
//         if (err){
//             console.log(err);
//         }
//         console.log('Archivo creado correctamente');
//     });
// }

//Read document
// fs.readFile('./test.txt', function (err, data) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString()); //Conversión a string
// });

//Best two
if (fs.existsSync('./test.txt')) {
    fs.readFile('./test.txt', function (err, data) {
        if (err) {
            console.log(err);
        }
        console.log(data.toString()); //Conversión a string
    });
} else {
    fs.writeFile('./test.txt', 'KSJHDASKJDHASIOUDNASDKJASHDKJASHDKJH', function (err) {
        if (err) {
            console.log(err);
        }
        console.log('Archivo creado correctamente');
    });
    fs.readFile('./test.txt', function (err, data) {
        if (err) {
            console.log(err);
        }
        console.log(data.toString()); //Conversión a string
    });
}