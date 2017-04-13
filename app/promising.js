/**
 * Created by jack on 07-Sep-15.
 */

var q = require('q');

function Promising(){

}


Promising.prototype.cb1 = function(intFirstArg){

	var deferred = q.defer();

	var result = 10 + intFirstArg;


	console.log('resoponse from cb1');

	if(result > 20){

		var oResponse = {
			"result": result
		};

		console.log(oResponse);

		deferred.resolve(oResponse);
	}else{

		var strMsg = 'got result ' + result + ' which is too less';

		console.log(strMsg);

		deferred.reject(new Error(strMsg));
	}

	return deferred.promise;
};


Promising.prototype.cb2 = function(strFirstArg){
	var deferred = q.defer();

	console.log('return from cb2');

	if(strFirstArg.indexOf('gotcha') !== -1){

		var oResponse = {"result": "gotit"};

		console.log(oResponse);

		deferred.resolve(oResponse);
	}else{

		var strMsg = 'got no gotcha';

		console.log(strMsg);

		deferred.reject(new Error(strMsg));
	}

	return deferred.promise;
};


module.exports = Promising;