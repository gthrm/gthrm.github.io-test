import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ImgSchema = new Schema({
    number   : { type: Number },
    title    : { type: String },
    url      : { type: String, required: true },
    createdAt: { type: Date }
});

mongoose.model('Img', ImgSchema);

