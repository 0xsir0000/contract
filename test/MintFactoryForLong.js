/*
 * @Author: Yulin
 * @Date: 2022-09-28 09:10:18
 * @FilePath: \contract\test\MintFactoryForLong.js
 * @Description: 
 */
const hre = require("hardhat");


describe("MintFactoryForLong", function () {
  it("MintFactoryForLong", async function () {
    const Amount = hre.ethers.utils.parseEther("1");
  
    const MintFactory = await hre.ethers.getContractFactory("MintFactoryForLong");
    const mintFactory = await MintFactory.deploy();
    console.log("address: "+ mintFactory.address);
    const a = await mintFactory.deployMint("0x5FbDB2315678afecb367f032d93F642f64180aa3",10,10,"0",7);
    console.log(a);
  })
});