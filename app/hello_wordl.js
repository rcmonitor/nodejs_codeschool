/**
 * @author //@by_rcmonitor@//
 * Date: 25.01.2015
 * Time: 18:46
 */
function Server(name){
    this.name = name;
    this.number = name.length;
}

Server.prototype.create = function(){
    var httpServer = require('http');

    httpServer.createServer(function(request, response){
        response.writeHead(200);
        response.write('hello, this is jack');
        response.end();
        console.log('response sent');
    }).listen(3000);
    console.log('listening on port 3000');


    return this.number;
};


module.exports = Server;
