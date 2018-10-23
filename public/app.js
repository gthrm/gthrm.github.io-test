'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = require('../config.json');

var _DataBaseUtils = require('./utils/DataBaseUtils');

var db = _interopRequireWildcard(_DataBaseUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

db.setUpConnection();

app.use(_bodyParser2.default.json());

app.use((0, _cors2.default)({ origin: '*' }));

app.get('/users', function (req, res) {
    db.listUsers().then(function (data) {
        return res.send(data);
    });
});

app.post('/user', function (req, res) {
    db.createUser(req.body).then(function (data) {
        return res.send(data);
    });
});

var server = app.listen(_config.serverPort, function () {
    console.log('Server is up and running on port ' + _config.serverPort);
});