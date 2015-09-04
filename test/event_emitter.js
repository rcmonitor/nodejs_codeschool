/**
 * Created by jack on 04-Sep-15.
 */

var path = require('path');
//var EventEmitter = require('events').EventEmitter;
require('chai').should();

var TehEmitter =  require(path.join(__dirname, '..', 'app', 'teh_emitter'));

describe('event-related tests', function(){

	describe('#emit() function', function(){


		it('should fire start event', function(fCallback){

			var oEmitter = new TehEmitter(fCallback);

//			oEmitter.emit('start', fCallback);

//			oEmitter.start();
//			TehEmitter.emit('start', fCallback);

		});


		it('should fire end event', function(fCallback){

			var oEmitter = new TehEmitter();

			oEmitter.on('end', function(done){
				done();
			});

			oEmitter.fireEnd(fCallback);
		})
	})
});
