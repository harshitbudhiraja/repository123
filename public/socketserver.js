const express= require('express')

const app = express();

const server = require('http').Server(app);

const io= require('socket.io')(server);

app.use(express.static('clientDir'));

io.on('connection',function(socket){
  console.log(socket.id);  
});

server.listen(3000,function(req,res){
    console.log("server has started at 3000");
});

