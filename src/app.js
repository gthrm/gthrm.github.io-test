import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { serverPort } from '../config.json';

import * as db from './utils/DataBaseUtils';

const app = express();

db.setUpConnection();

app.use( bodyParser.json() );

app.use(cors({ origin: '*' }));

app.get('/users', (req, res) => {
    db.listUsers().then(data => res.send(data));
});

app.post('/user', (req, res) => {
   db.createUser(req.body).then(data => res.send(data));
});

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});