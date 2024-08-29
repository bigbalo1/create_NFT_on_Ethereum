require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { ethers } = require("hardhat"); // Ensure this import is correct

async function main() {
  console.log("Starting deployment...");

  const [deployer] = await ethers.getSigners();
  console.log("Deployer address:", deployer.address);

  const MyNFT = await ethers.getContractFactory("MyNFT");
  console.log("Contract factory obtained.");

  try {
    const myNFT = await MyNFT.deploy(deployer.address);
    console.log("Contract deployment initiated...");

    await myNFT.deployed();
    console.log("Contract deployed to address:", myNFT.address);
  } catch (error) {
    console.error("Deployment failed:", error);
  }
}

main()
  .then(() => {
    console.log("Deployment script finished.");
    process.exit(0);
  })
  .catch(error => {
    console.error("Error during deployment:", error);
    process.exit(1);
  });
