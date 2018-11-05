const fs = require('fs');
const requestHandler = (req,res) => {
    console.log(req.url, req.method);
    const URL = req.url;
    const METHOD = req.method;
    const json = fs.readFileSync('users.txt').toString().split(',');
    res.setHeader('Content-Type','text/html');
    if (URL === '/'){
        res.write('<html>');
        res.write('<head><title>Home </title></head>');
        res.write('<body>');
        res.write('<div><h1>Welcome a my home work xd</h1></div>');
        res.write('<div><form action="/create-user" method="post"><input type="text" name="name" placeholder="username"><button type="submit">ADD</button></form></div>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (URL === '/create-user' && METHOD === 'POST'){
        let body = [];
        console.log("Entre create user");
        req.on( 'data', (chunk)=>{
            body.push(chunk);
        });
        return req.on('end', () => {
            body = Buffer.concat(body).toString();
            const nameConcat = body.split('=')[1];
            console.log(nameConcat);
            const name = nameConcat.split('+').join(' ');
            json.push(name);
            console.log(name);
            console.log(`mi json --> ${json}`);
            fs.writeFile('users.txt', json ,err =>{
                res.statusCode =302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
    }
    if (URL === '/users'){
        console.log(`se almaceno? ${json}`);
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body>');
        res.write('<ul>');
        json.map(user =>{
                res.write(`<li>${user}</li>`);
            }
        );
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    res.write('<html>');
    res.write('<head><title>My first Server</title></head>');
    res.write('<body><h1>My first app node</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports.handler = requestHandler;