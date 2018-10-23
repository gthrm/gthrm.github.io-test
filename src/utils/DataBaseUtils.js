import mongoose from "mongoose";
import nodemailer from 'nodemailer';
import config from '../../config.json';
import html from './body.js';
import '../models/Model';

const password = config.passMail;
const User = mongoose.model('User');
const linkForData = ''; //ссылка для отправки
let now = new Date();

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.username}:${config.db.pass}@${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listUsers() {
    return User.find();
}

export function createUser(data) {
    const user = new User({
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

function sendClientData(data){
    let transporter = nodemailer.createTransport( {
        host: 'smtp.rambler.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'andywiller@rambler.ru',
            pass: password,
        }
    } );

    let mailOption = {
        from: 'andywiller@rambler.ru',
        to: data.email,
        subject: 'Информация по смк для ' + data.name + ' ' + data.secondName,
        html: `<h1>Привет, ${data.name} ${data.secondName}!</h1><p>Это <a href="${linkForData}">ссылка</a> на материалы.</p><p>С Уважением,</p><p>Роман Мещеряков</p>`,
    };

    transporter.sendMail(mailOption, function (err, info){
        if (err) throw err;
        console.log('Email отправлен в ' + now + ' ;' + info.response);
    });
};