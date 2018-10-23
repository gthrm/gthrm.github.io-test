'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setUpConnection = setUpConnection;
exports.listUsers = listUsers;
exports.createUser = createUser;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _config = require('../../config.json');

var _config2 = _interopRequireDefault(_config);

require('../models/Model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var password = _config2.default.passMail;
var User = _mongoose2.default.model('User');
var linkForData = ''; //ссылка для отправки
var now = new Date();

function setUpConnection() {
    _mongoose2.default.connect('mongodb://' + _config2.default.db.username + ':' + _config2.default.db.pass + '@' + _config2.default.db.host + ':' + _config2.default.db.port + '/' + _config2.default.db.name);
}

function listUsers() {
    return User.find();
}

function createUser(data) {
    var user = new User({
        name: data.name,
        secondName: data.secondName,
        email: data.email,
        tel: data.tel,
        org: data.org,
        createdAt: new Date()
    });
    sendClientData(data);
    return user.save();
}

function sendClientData(data) {
    var transporter = _nodemailer2.default.createTransport({
        host: 'smtp.rambler.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'andywiller@rambler.ru',
            pass: password
        }
    });

    var mailOption = {
        from: 'andywiller@rambler.ru',
        to: data.email,
        subject: 'Информация по смк для ' + data.name + ' ' + data.secondName,
        html: '<h1>\u041F\u0440\u0438\u0432\u0435\u0442, ' + data.name + ' ' + data.secondName + '!</h1><p>\u042D\u0442\u043E <a href="' + linkForData + '">\u0441\u0441\u044B\u043B\u043A\u0430</a> \u043D\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.</p><p>\u0421 \u0423\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C,</p><p>\u0420\u043E\u043C\u0430\u043D \u041C\u0435\u0449\u0435\u0440\u044F\u043A\u043E\u0432</p>'
    };

    transporter.sendMail(mailOption, function (err, info) {
        if (err) throw err;
        console.log('Email отправлен в ' + now + ' ;' + info.response);
    });
};