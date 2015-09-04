/**
 * Created by jack on 04-Sep-15.
 */

var EventEmitter = require('events').EventEmitter;
var util = require('util');

util.inherits(TehEmitter, EventEmitter);

function TehEmitter(fCallback){

	EventEmitter.call(this);

	this.callback = fCallback;

	this.emit('start', this.callback);
}


/**
 * does not append listeners to prototype
 */
TehEmitter.prototype.on('start', function (fCallback) {

	console.log('callback fired');
	console.log(fCallback);

	fCallback();
});


/**
 * works fine with self-envolved callback
 *
 * @param fCallback
 */
TehEmitter.prototype.fireEnd = function(fCallback){

	console.log('end fired');

	this.emit('end', fCallback);
};


module.exports = TehEmitter;