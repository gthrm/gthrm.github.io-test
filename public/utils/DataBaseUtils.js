'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setUpConnection = setUpConnection;
exports.listNotes = listNotes;
exports.createNote = createNote;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../../config.json');

var _config2 = _interopRequireDefault(_config);

require('../models/ImgModel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Img = _mongoose2.default.model('Img');

function setUpConnection() {
    _mongoose2.default.connect('mongodb://' + _config2.default.db.username + ':' + _config2.default.db.pass + '@' + _config2.default.db.host + ':' + _config2.default.db.port + '/' + _config2.default.db.name);
}

function listNotes() {
    return Img.find();
}

function createNote(data, length) {
    var img = new Img({
        number: length,
        title: data.title,
        url: data.url,
        createdAt: new Date()
    });
    return img.save();
}