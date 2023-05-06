const { ethers } = require('hardhat');

// Deploy function
async function deploy() {
   [account] = await ethers.getSigners();
   deployerAddress = account.address;
   console.log(`Deploying contracts using ${deployerAddress}`);

   // Deploy Faisaa Token
   const token = await ethers.getContractFactory('TestToken');
 
   const tokenInstance = await token.deploy(
      'TEST Token',
      'TEST',
   );;
    await tokenInstance.deployed();
    console.log(`Test token deployed to : ${tokenInstance.address}`);

 
}

deploy()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
