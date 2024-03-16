/* //---------------WEBSERVER sin express - Solo Node-----------------// */

const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'});

    const persona = {
        id:1,
        nombre: 'Developer'
    };

    res.write(JSON.stringify(persona)); // Change Content Type to application/json
    res.end();
})
.listen(8080)

console.log('Escuchando el puerto', 8080);

/* //---------------FIN WEBSERVER sin express - Solo Node-----------------// */