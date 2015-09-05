/**
 * Created by jack on 04-Sep-15.
 */

var EventEmitter = require('events').EventEmitter;
var util = require('util');

util.inherits(TehEmitter, EventEmitter);

function TehEmitter(){

	EventEmitter.call(this);

	this.on('start', onStart);
	//this.callback = fCallback;



	//this.emit('start', this.callback);
}


function onStart(fCallback){
	console.log('callback fired');
	console.log(fCallback);

	fCallback();
}

//TehEmitter.prototype.on('start', function (fCallback) {
//
//	console.log('callback fired');
//	console.log(fCallback);
//
//	fCallback();
//});


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