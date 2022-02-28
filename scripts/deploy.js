/* scripts/deploy.js */
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  /* these two lines deploy the contract to the network */
  const FurkanToken = await hre.ethers.getContractFactory("FurkanToken");
  const furkanToken = await FurkanToken.deploy("Furkan");

  await furkanToken.deployed();
  console.log("furkanToken deployed to:", furkanToken.address);

  /* this code writes the contract addresses to a local */
  /* file named config.js that we can use in the app */
  fs.writeFileSync(
    __dirname + "/config/index.js",
    `
    export const contractAddress = "${furkanToken.address}"
    export const ownerAddress = "${furkanToken.signer.address}"
  `
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
