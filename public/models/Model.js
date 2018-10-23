"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var UserSchema = new Schema({
    name: { type: String },
    secondName: { type: String },
    email: { type: String },
    tel: { type: String, required: true },
    org: { type: String },
    createdAt: { type: Date }
});

_mongoose2.default.model('User', UserSchema);