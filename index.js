/**
 * @author //@by_rcmonitor@//
 * Date: 14.12.2014
 * Time: 17:57
 */

var chai = require('chai');


//var httpServer = require('./app/hello_wordl');

//httpServer.create();


    var httpServer = require('http');
    
        httpServer.createServer(function(request, response){
                response.writeHead(200);
                        response.write('hello, this is jack');
                                response.end();
                                        console.log('response sent');
                                            }).listen(3000);
                                                console.log('listening on port 3000');
                                                




