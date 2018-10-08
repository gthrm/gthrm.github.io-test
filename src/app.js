import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { serverPort } from '../config.json';

import * as db from './utils/DataBaseUtils';

const app = express();

db.setUpConnection();

app.use( bodyParser.json() );

app.use(cors({ origin: '*' }));

app.get('/imges', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/imges', (req, res) => {
    db.listNotes().then(data => db.createNote(req.body, data.length).then(data => res.send(data)));
    ;
});

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});