/*
 * @Author: Yulin
 * @Date: 2022-09-28 09:10:18
 * @FilePath: \contract\test\MintFactoryForStable.js
 * @Description: 
 */
const hre = require("hardhat");


describe("MintFactoryForStable", function () {
  it("MintFactoryForStable", async function () {
    const Amount = hre.ethers.utils.parseEther("0.2");
  
    const MintFactory = await hre.ethers.getContractFactory("MintFactoryForStable");
    const mintFactory = await MintFactory.deploy();
    console.log("address: "+ mintFactory.address);
    const a = await mintFactory.deployMint("0x5095d3313C76E8d29163e40a0223A5816a8037D8",10,20,"20000000000000000",0,{value:Amount});
    console.log(a);
  })
});

describe("MintFactory", function () {
  it("MintFactory", async function () {
    const Amount = hre.ethers.utils.parseEther("0.1");
  
    const MintFactory = await hre.ethers.getContractFactory("MintFactory");
    const mintFactory = await MintFactory.deploy("0x5095d3313C76E8d29163e40a0223A5816a8037D8",5,20,"20000000000000000",{value:Amount});
    console.log("address: "+ mintFactory.address);
  })
});