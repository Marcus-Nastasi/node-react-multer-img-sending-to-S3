import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';

import router from './routes/router';

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../../frontend/dist')));
app.engine('html', require('ejs').renderFile);

app.set('views', (path.join(__dirname, '../../frontend/dist')));
app.set('view engine', 'html');

app.use(router);

app.listen(3030);




