/**
 * Created by jack on 07-Sep-15.
 */

var path = require('path');

var Q = require('q');
require('chai').should();

var hpg = require('helpers-global');
var Promising = require(path.join(__dirname, '..', 'app', 'promising'));

describe('q promises', function(){

	var oPromising = new Promising();

	var fPromiseChecker = function(arCallbacks, fCallback, strError){

		var arPromises = [];

		arCallbacks.forEach(function(oCallback){
			arPromises.push(oPromising[oCallback.name](oCallback.argument));
		});

		var oPromised = Q.all(arPromises).then(function(arSuccess){
			arSuccess.forEach(function(oResult, intOffset){
				oResult.result.should.equals(arCallbacks[intOffset].result);
			});

			if(strError){
				fCallback(new Error("supposed to be rejected"));
			}else{
				fCallback();
			}

		}, function(errFailure){

			if(strError){
				errFailure.message.should.equals(strError);
				fCallback();
			}else{
				fCallback(errFailure);
			}

		});
	};


	describe('promised callback', function(){

		var oResolved = {
			"data": [
				{
					"name": "cb1",
					"argument": 15,
					"result": 25
				},{
					"name": "cb2",
					"argument": "there is some gotcha",
					"result": "gotit"
				}

			]
		};

		it('should resolve promise with both successive callbacks given', function(fDone){
			fPromiseChecker(oResolved.data, fDone);
		});

		var oFailed = {
			"data": [
				{
					"name": "cb1",
					"argument": 35,
					"result": 45
				},{
					"name": "cb2",
					"argument": "some damn string",
					"result": "got no gotcha"
				}
			],
			"error": "got no gotcha"
		};

		it('should reject promise with one successive and one failure callback', function(fDone){
			fPromiseChecker(oFailed.data, fDone, oFailed.error);
		});

		var oPartiallyResolved = {
			"data": [
				{
					"name": "cb2",
					"argument": "moar gotcha",
					"result": "gotit"
				}
			]
		};

		it('should resolve promise with only one successive callback', function(fDone){
			fPromiseChecker(oPartiallyResolved.data, fDone);
		});

		var oPartiallyFailed = {
			"data": [
				{
					"name": "cb1",
					"argument": 4,
					"result": "got result 14 which is too less"
				}
			],
			"error": "got result 14 which is too less"
		};

		it('should reject promise with only one failure callback', function(fDone){
			fPromiseChecker(oPartiallyFailed.data, fDone, oPartiallyFailed.error);
		})

	});


	describe('Promise class', function(){

		it('should be exported by Q', function(){

			var Promise = Q.Promise;

			var oPromise = new Promise(function(){
				return 10;
			});

			var oInspection = oPromise.inspect();

			oInspection.should.have.property('state');


//			console.log(oInspection);

//			var boolIsInstance = oPromise instanceof Promise;
//
//			hpg.log(boolIsInstance, 'is instance of promise');
//
//			boolIsInstance.should.be.true;


//			console.log(Q.Promise())
		});
	})

});