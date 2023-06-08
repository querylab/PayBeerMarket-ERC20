const hre = require("hardhat");


async function main() {
  const [deployer] = await ethers.getSigners();

  const paybeer = await hre.ethers.getContractFactory("paybeer");

  const contract = await paybeer.deploy(); //instance of contract


  await contract.deployed();


//Consol View
console.log("***********************************************************************************");
console.log("Deploying contracts with the account:", deployer.address);
console.log("Account balance:", (await deployer.getBalance()).toString());
console.log("***********************************************************************************\n");
console.log("PayBeerMarket Contract Address\n ");
console.log(contract.address,"\n");
console.log("***********************************************************************************");


}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
