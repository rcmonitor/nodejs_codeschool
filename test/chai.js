/**
 * @author //@by_rcmonitor@//
 * Date: 25.01.2015
 * Time: 18:51
 */

var chai = require('chai');

chai.config.includeStack = true;

global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;