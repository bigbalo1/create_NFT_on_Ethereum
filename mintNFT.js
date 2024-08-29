require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deployer address:", deployer.address);

    // Attach to the deployed contract
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFT.attach("0x213b84ca078083E07409cB3728873D4eDBAA46f5");
    
    // Mint a new NFT
    const tx = await myNFT.mintNFT(deployer.address, "ipfs://QmSoRZNZAFQ3oQarZE9bhYDvD5E6GVbpkH5fFH9Huzfau1");
    console.log("Minting NFT...");

    await tx.wait();
    console.log("NFT minted!");
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error("Error during interaction:", error);
        process.exit(1);
    });
