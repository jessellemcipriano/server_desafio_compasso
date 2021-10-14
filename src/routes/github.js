import Router from 'express';
import githubAuth from '../controller/githubController.js';
import cors from 'cors';

const routerGithubAuth = Router();
 routerGithubAuth.use(cors('*'))
 routerGithubAuth.get('/auth/:code', async (req, response) => {
  const resp = await githubAuth(req.params.code)
  
  if(resp.access_token)
    response.status(200).json(resp);
  else
    response.status(401).json(false);
    
});


export default routerGithubAuth;
