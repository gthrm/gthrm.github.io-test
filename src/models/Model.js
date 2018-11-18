import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ImgSchema = new Schema({
    title    : { type: String },
    url      : { type: String, required: true },
    createdAt: {type: Date}
});

mongoose.model('Img', ImgSchema);