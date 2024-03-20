const {network,upgrades} = require('hardhat');
const hre = require("hardhat");

async function main() {
  
  const [deployer] = await hre.ethers.getSigners();
  console.log(deployer.address);
  
  const MyToken = await hre.ethers.getContractFactory("Lock");
  const MyToKenProxy = await upgrades.deployProxy(MyToken,[deployer.address,deployer.address,deployer.address,deployer.address]);
  console.log(MyToKenProxy);
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
