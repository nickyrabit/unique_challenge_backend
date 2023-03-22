import { generateAccount, SignatureType } from '@unique-nft/accounts';
import express, {Express, Request, Response} from 'express';
import { Sdk } from '@unique-nft/sdk';
import { KeyringProvider } from '@unique-nft/accounts/keyring';
const bareUrl = "https://rest.unique.network/opal/v1";


const app: Express = express();
const port = 3000;
function createSdk(account) {
  const options = {
    baseUrl: bareUrl,
    signer: account,
  }
  return new Sdk(options);
}
export async function createCollection(sdk, address) {
  const { parsed, error } = await sdk.collections.creation.submitWaitResult({
    address,
    name: 'Test collection',
    description: 'My test collection',
    tokenPrefix: 'TST',
  });

  if (error) {
    console.log('Error occurred while creating a collection. ', error);
    process.exit();
  }

  const { collectionId } = parsed;

  return sdk.collections.get({ collectionId });
}

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
app.get('/create-collection', async (req, res) => {
  const mnemonic: any = req.query.mnemonic
  const signer = await KeyringProvider.fromMnemonic(mnemonic);
  const address = signer.instance.address;

  const sdk = createSdk(signer);

  const collection = await createCollection(sdk, address);
  console.log('Сollection was create. ID: ', collection);
});