# CM V2 With Signer

## Proof of concept
Candy machine signer to only allow minting from the frontend. 

### Current Problem with CM V2:
bots can access the mint through methods other than what is provided in the mint page. 

### Solution:
The candy machine signer is added when create_candy_machine is called. perhaps a different method can be used. As this is a "Breaking Change" type of update, which adds 32 (pubkey) + 1 (is_signature_required) to the CONFIG_ARRAY_START value.

No amount of bot can mint unless they acquire the signer keypair, since the MintNFT require a candy machine signer. 

### Problem faced: 
Since the CM-UI is frontend only (no server is used) a javascript obfuscator is required to obfuscate the keypair from being fetched. This is a work around to the much obligatory no keys should be in the frontend. storing it in the backend is better (even then, this is bad security approach.).

It is also should be known that the keypair has to be empty with no sols inside it and different from the candy machine authority.

## Mechanism of the Candy Machine Signer (CMS):
 * Add a Candy Machine Signer to the Candy Machine Account
 * Add isSignatureRequired to the "Candy Machine Data"/config
 * MintNFT can be invoked only when CMS has signed the transaction.

### How to add CMS via cli:
 * mintSignerRequired to true in config file.
 * Generate Keypair and store it for later use.
 * Include the CMS keypair when uploading via cm-v2-cli (--cms command)
 * You are done.

### How to add CMS to CM-UI:
 * add the keypair from the json file to the .env file REACT_APP_CANDY_SIGNER field
 * yarn install && yarn build 
 * go to the build file and copy the /static/main.[hash].chunk.js
 * encrypt it with High option in https://obfuscator.io. (This method can be simplified in the build process). 

Note that the last step is neccessary to obfuscate the code in order to not the let the keypair be retrieved. You can also put a domain lock so that the code can only be used in your domain.


## How to deploy to CF Pages:
 * Deploy to cloudflare pages with these settings: 
    * Environment variable
      * NODE_VERSION 16.3.1
    * Framework preset to None
    * Build command to None
    * Build output directory to /build
 * You will have to remove the /build from the .gitignore file. since the obfuscation is currently manual.


##### What is done?
- [x] Provide proof of concept code in lib.rs of cm v2.
- [x] Deploy to local solana validator.
- [x] Create JS code 
  - [x] Update CLI with new approach.
  - [x] Regular cm v2 initializing, uploading, working. 
  - [x] test with mint_one_token
  - [x] Build a flow to deploy candy-machine-ui
- [x] Deploy to devnet for testing
- [x] Devnet testing live at https://cm-ui-with-signer.pages.dev/
- [ ] Final clean up for mainnet
- [ ] Deploy to mainnet

#### Note:
* Excuse my rusty rustlang code for the proof of concept. - CryptoMiester
* Code is forked from cmv2 after adding punish bots.
