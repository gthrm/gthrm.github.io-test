import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { serverPort } from '../config.json';

import * as db from './utils/DataBaseUtils';
import fs from 'fs';
import https from 'https';
import path from 'path';

const options = {
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'private.key')),
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'certificate.crt')),
}
const app = express();

db.setUpConnection();

app.use( bodyParser.json() );

app.use(cors({ origin: '*' }));

app.get('/imges', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/imges', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

const server = https.createServer(options, app).listen(serverPort, function () {
    console.log(`Express server listening on port ${serverPort}`);
});