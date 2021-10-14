import express from 'express';
const app = express()
import routes from './routes.js';

app.use(routes);
const port = 3030

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })