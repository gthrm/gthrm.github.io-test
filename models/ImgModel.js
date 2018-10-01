// import mongoose from "mongoose";

// const Schema = mongoose.Schema;

// const ImgSchema = new Schema({
//     title    : { type: String },
//     url      : { type: String, required: true },
//     createdAt: {type: Date}
// });

// mongoose.model('Img', ImgSchema);

"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var ImgSchema = new Schema({
    title: { type: String },
    url: { type: String, required: true },
    createdAt: { type: Date }
});

_mongoose2.default.model('Img', ImgSchema);