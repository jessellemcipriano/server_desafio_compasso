import express from 'express';
const app = express()
import routes from './routes.js';
import cors from 'cors';


app.use(express.json({}))

app.use(cors('*'))

app.use(routes);

export default (app);