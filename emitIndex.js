
const http  = require('http');


const handleConnection = (req, res) =>{
    if(req.url == '/'){
        res.write(JSON.stringify({FirstName : "Hrihsikesh", LastName: "Konwar"}));
        res.end()
    }
};

const server = http.createServer(handleConnection);
// const handleConnection = (socket) => {
//     console.log("New connection found");
// }
// server.on('connection', handleConnection )

server.listen(5000);
console.log("server is listening to port 5000")
