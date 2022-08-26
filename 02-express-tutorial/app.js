const http = require('http');
const {readFile} = require('fs').promises;

const server = http.createServer(async(req, res) => {


    const url = req.url;

    if(url === '/'){
        const file = await readFile('./index.html')
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(file);

    }else if(url === '/about'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<h1> About Page</h1>`);

    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(`<h1> 404</h1>`);
 
    }


    res.end();
}).listen(5000);

