/**
 * @author //@by_rcmonitor@//
 * Date: 25.01.2015
 * Time: 18:49
 */

var theServer = require('../app/hello_wordl.js');

describe('testing basic http server', function () {
    var server;

    before(function () {
        server = new theServer('http');
    });

    it('should result in four according to http server name', function () {
        var result = server.create();
        expect(result).equal(4);
    });
});