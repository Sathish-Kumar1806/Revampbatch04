const http =require('http');

const server = http.createServer((req,res) =>{
        res.write("hello from Nodejs app");
        res.end();
});

server.listen(3000,() =>{
        console.log("server running on port 3000");
});


