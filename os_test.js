const os = require('os');

// console.log(os.cpus()); list CPU/Threads
console.log(os.release());
console.log('Free memory: ' + os.freemem()); //  返回空闲内存的字节数。XD
console.log('Free memory: ' + os.freemem() / 1024 / 1024 / 1024 + ' GB'); //Form divide for Gigabytes
console.log(os.totalmem()); // Memory RAM total