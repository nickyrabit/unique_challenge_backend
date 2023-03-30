import { generateAccount, SignatureType } from "@unique-nft/accounts";
import express, { Express, Request, Response } from "express";
import { Sdk } from "@unique-nft/sdk";
import { KeyringProvider } from "@unique-nft/accounts/keyring";
import cors from "cors";
import {
  AttributeType,
  COLLECTION_SCHEMA_NAME,
  SchemaTools,
  UniqueCollectionSchemaToCreate,
} from "@unique-nft/schemas";

const bareUrl = "https://rest.unique.network/opal/v1";

const app: Express = express();
const port = 3000;
function createSdk(account) {
  const options = {
    baseUrl: bareUrl,
    signer: account,
  };
  return new Sdk(options);
}
export async function createCollection(sdk, address) {
  const { parsed, error } = await sdk.collections.creation.submitWaitResult({
    address,
    name: "Test collection",
    description: "My test collection",
    tokenPrefix: "TST",
  });

  if (error) {
    console.log("Error occurred while creating a collection. ", error);
    process.exit();
  }

  const { collectionId } = parsed;

  return sdk.collections.get({ collectionId });
}

const allowedOrigins = ["*"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is Express + TypeScript");
});

app.listen(port, () => {
  console.log(`[Server]: I am running at https://localhost:${port}`);
});

app.get("/create-account", async (req, res) => {
  const account = await generateAccount({
    pairType: SignatureType.Sr25519,
    meta: {
      name: "my_unique_account",
    },
  });

  console.log(account);

  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(account));
});
app.get("/create-collection", async (req, res) => {
  const mnemonic: any = req.query.mnemonic;
  const signer = await KeyringProvider.fromMnemonic(mnemonic);
  const address = signer.instance.address;

  const sdk = createSdk(signer);

  const collection = await createCollection(sdk, address);
  console.log("Сollection was create. ID: ", collection);

  const {
    parsed: { collectionId },
  } = await sdk.collections.creation.submitWaitResult({
    address,
    name: "Safari",
    description: "Crazy cats from village",
    tokenPrefix: "CRC",
    schema: {
      schemaName: COLLECTION_SCHEMA_NAME.unique,
      schemaVersion: "1.0.1",
      coverPicture: {
        ipfsCid: "Qmc1Dj8m4z2vcojjJjp348FKffmSjopSFTgATpU8gUx5k1",
      },
      image: {
        urlTemplate: "https://ipfs.unique.network/ipfs/{infix}",
      },
      attributesSchemaVersion: "1.0.0",
      attributesSchema: {
        0: {
          name: { _: "sex" },
          type: AttributeType.string,
          optional: true,
          isArray: false,
          enumValues: {
            0: { _: "male" },
            1: { _: "female" },
          },
        },
        1: {
          name: { _: "name" },
          isArray: false,
          optional: false,
          type: AttributeType.string,
        },
        2: {
          name: { _: "color" },
          isArray: true,
          type: AttributeType.string,
          optional: true,
          enumValues: {
            0: { _: "black" },
            1: { _: "white" },
            2: { _: "gray" },
            3: { _: "brown" },
          },
        },
      },
    },
  });

  console.log("Collection ID: ", collectionId);
});

app.get("/add-nft", async (req, res) => {
  const mnemonic: any = req.query.mnemonic;
  const ipfsCid: any = req.query.ipfscid;
  const collectionId: any = req.query.collection_id;

  const signer = await KeyringProvider.fromMnemonic(mnemonic);
  const address = signer.instance.address;

  const sdk = createSdk(signer);

  const {
    parsed: { tokenId },
  } = await sdk.tokens.create.submitWaitResult({
    address,
    collectionId,
    data: {
      image: {
        ipfsCid: ipfsCid,
      },
      encodedAttributes: {
        0: 0,
        1: { _: "Safari" },
        2: [1, 2, 3],
      },
    },
  });

  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(tokenId));
});
