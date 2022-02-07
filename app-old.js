
const http = require('http');
const { clearScreenDown } = require('readline');

http.createServer((req, res )=>{

    /*
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'})
    */


    res.write('holamundo');
    res.write('id, 2');
    
    res.end();
    


})

.listen('8080');
console.log('Escuchando en el puerto', 8080);

