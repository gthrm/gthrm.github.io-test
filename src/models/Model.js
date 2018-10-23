import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name        : { type: String },
    secondName  : { type: String },
    email       : { type: String },
    tel         : { type: String, required: true },
    org         : { type: String },
    createdAt   : { type: Date }
});

mongoose.model('User', UserSchema);

