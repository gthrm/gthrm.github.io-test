import mongoose from "mongoose";

import config from '../config.json';

import '../models/ImgModel';

const Img = mongoose.model('Img');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.username}:${config.db.pass}@${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listNotes() {
    return Img.find();
}

export function createNote(data, length) {
    const img = new Img({
        number: length,
        title: data.title,
        url: data.url,
        createdAt: new Date()
    });
    return img.save();
    
}