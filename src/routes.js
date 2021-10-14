import Router from'express';
import routerGithubAuth from './routes/github.js';


const routes = Router();

routes.use("/github", routerGithubAuth);


export default routes;
