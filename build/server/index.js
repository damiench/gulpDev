'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

server.use(_express2.default.static(_path2.default.join(__dirname, '../../build/client')));

server.get('*', function (req, res) {
	console.log('get');
	res.sendFile(_path2.default.join(__dirname, '../client/index.html'));
});

server.listen(3000, function () {
	console.log(' server started on port ', 3000);
});