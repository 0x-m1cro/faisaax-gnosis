const { ethers } = require('hardhat');

// Deploy function
async function deploy() {
   [account] = await ethers.getSigners();
   deployerAddress = account.address;
   console.log(`Deploying contracts using ${deployerAddress}`);

   // Deploy Test Token
   const token = await ethers.getContractFactory('Faisaa');
 
   const tokenInstance = await token.deploy(
     'Test Token',
     'TEST',
  );;
   await tokenInstance.deployed();
   console.log(`Test Token deployed to : ${tokenInstance.address}`);

   //Deploy Router passing Factory Address and WETH Address
   const router = await ethers.getContractFactory('UniswapV2Router02');
   const routerInstance = await router.deploy(
      '0x91B13eA3def246E1a376A773e3623571A939736D',
      '0xf6077b8dacec85be11d8d2da04e1705668985bcf'
   );
   await routerInstance.deployed();

   console.log(`Router V02 deployed to :  ${routerInstance.address}`);
 
}

deploy()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
