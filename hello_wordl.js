/**
 * @author //@by_rcmonitor@//
 * Date: 14.12.2014
 * Time: 17:57
 */

var http = require('http');

http.createServer(function(request, response){
	response.header(200);
	response.body('hello, this is jack');
	response.end();
}).listen(3000);


