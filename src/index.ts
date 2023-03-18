import { generateAccount, SignatureType } from '@unique-nft/accounts';
import express, {Express, Request, Response} from 'express';

const bareUrl = "https://rest.unique.network/opal/v1";


const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response)=>{
    res.send('Hello, this is Express + TypeScript');
});

app.listen(port, ()=> {
console.log(`[Server]: I am running at https://localhost:${port}`);
});



app.get('/create-account', async (req, res) => {
    
    const account = await generateAccount({
      pairType: SignatureType.Sr25519,
      meta: {
        name: 'my_unique_account'
      }
    })
    
    console.log(account);
 
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(account));

 
});