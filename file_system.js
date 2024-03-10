const fs = require('fs');

// fs.writeFile('./test.txt','KSJHDASKJDHASIOUDNASDKJASHDKJASHDKJH',function (err) {
//     if (err){
//         console.log(err);
//     }
//     console.log('Archivo creado correctamente');
// });

// Mejora XD
if(fs.existsSync('./test.txt')) {
    console.log('El archivo ya existe');
} else {
    fs.writeFile('./test.txt', 'KSJHDASKJDHASIOUDNASDKJASHDKJASHDKJH', function (err) {
        if (err){
            console.log(err);
        }
        console.log('Archivo creado correctamente');
    });
}