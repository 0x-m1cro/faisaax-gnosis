const { ethers } = require('hardhat');

// Deploy function
async function deploy() {
   [account] = await ethers.getSigners();
   deployerAddress = account.address;
   console.log(`Deploying contracts using ${deployerAddress}`);

   // Deploy Faisaa Token
   const token = await ethers.getContractFactory('Faisaa');
 
   const tokenInstance = await token.deploy(
     '0xD3C51db3Ca5D0cE2b4966cd8c7039CE8B3326c31',
     '0x19933Af90d072bf90F2A7638ED381aFacB879a62',
     '1683676801'
  );;
   await tokenInstance.deployed();
   console.log(`Faisaa Token deployed to : ${tokenInstance.address}`);

 
}

deploy()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
