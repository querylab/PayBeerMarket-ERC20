# PayBeerMarket-ERC20 🍻💰

This project in Solidity, Reactjs and Etherjs allows users to pay for a beer and leave a message. When the contract is deployed, an ownership address is assigned. Users can make the payment by providing a name and a message, as long as the value sent is greater than zero. The Ether received is transferred to the contract owner and a new note is recorded that includes the name, message, timestamp and sender address. The contract also offers the functionality to get all memos recorded so far. Deployed on Sepolia testnet, it ensures reliable testing before deploying it on a main blockchain network. 


## Setting Up
---
## 1. Clone the repository
## 2. Install dependencies
```bash
$ cd PayBeerMarket-ERC20
$ npm install --save-dev hardhat
$ npm install --save dotenv @nomiclabs/hardhat-etherscan @openzeppelin/contracts @nomicfoundation/hardhat-chai-matchers @nomicfoundation/hardhat-toolbox @nomiclabs/hardhat-ethers
```
## 3. Change variables in Files
```bash
# hardhat.config.js
$ ALCHEMY_SEPOLIA_URL
$ PRIVATE_KEY
# src/App.js
$ contractAddress
```

## 4. Deployment Solidity Contract Addresses
```bash
$ npx hardhat clean
$ npx hardhat compile
```

``` bash
$ npx hardhat run scripts/deploy.js --network sepolia
```

<a href="https://imgur.com/8caKL1o"><img src="https://i.imgur.com/8caKL1o.gif" title="source: imgur.com" /></a>

``` bash

#After deploying the paybeer.sol replace this address in src/App.js file with the variable:

 const contractAddress = "0x36D7D7880f78b156b4B10205736D1E3fc4fceF55";

```

## 5. Localhost Deployment

``` bash

npm install 
npm start 
http://localhost:3000/

```
<a href="https://imgur.com/WjQh1ER"><img src="https://i.imgur.com/WjQh1ER.gif" title="source: imgur.com" /></a>






































