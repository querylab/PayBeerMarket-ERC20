require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_SEPOLIA_URL = "https://eth-sepolia.g.alchemy.com/v2/V8Vb22222glUYffQupSV2wKYO7XCG5r";
const PRIVATE_KEY = "9a947778222200cf333567a77f66669b888888eb2436ae46df2598"; //sepolia wallet private key
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: ALCHEMY_SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
