const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FurkanToken", async function () {
  it("Should get default name", async function () {
    const FurkanToken = await ethers.getContractFactory("FurkanToken");
    const furkanToken = await FurkanToken.deploy("Furkan");
    await furkanToken.deployed();
    const name = await furkanToken.getName();

    expect(name).to.equal("Furkan");
  });
});
