const { ethers } = require('hardhat');

// Deploy function
async function deploy() {
   [account] = await ethers.getSigners();
   deployerAddress = account.address;
   console.log(`Deploying contracts using ${deployerAddress}`);

   //Deploy WETH
   const weth = await ethers.getContractFactory('WETH9');
   const wethInstance = await weth.deploy();
   await wethInstance.deployed();

   console.log(`WETH deployed to : ${wethInstance.address}`);

   //Deploy Factory
   const factory = await ethers.getContractFactory('UniswapV2Factory');
   const factoryInstance = await factory.deploy(deployerAddress);
   await factoryInstance.deployed();

   console.log(`Factory deployed to : ${factoryInstance.address}`);
   console.log(`Factory initHash : ${await factoryInstance.INIT_CODE_HASH()}`);

   //Deploy Multicall (needed for Interface)
   const multicall = await ethers.getContractFactory('Multicall');
   const multicallInstance = await multicall.deploy();
   await multicallInstance.deployed();

   console.log(`Multicall deployed to : ${multicallInstance.address}`);

   // Deploy Faisa (needed for Interface)
   //  const token = await ethers.getContractFactory('Faisaa');
 
   //  const tokenInstance = await token.deploy(
   //    'Faisaa Token',
   //    'FAISAA',
   // );;
   //  await tokenInstance.deployed();
   //  console.log(`Faisaa deployed to : ${tokenInstance.address}`);

    console.log(`All contracts successfuly deployed!`);
}

deploy()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
