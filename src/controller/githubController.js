import fetch from 'node-fetch';

async function  githubAuth(code) {

const url = "https://github.com/login/oauth/access_token"

const body= {
        client_id : "212ea550d6a498db53af",
        client_secret : "9d8bf1d354957d3f233c606bb714bb0e1f2f8ce0",
        code : code,
        redirect_uri :"http://localhost:3000/myGitSpace"	
        }

const response = await fetch(url, {
    method: "POST", 
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'}
   
})    


const data = await response.json();
    
return data;
}

export default githubAuth;