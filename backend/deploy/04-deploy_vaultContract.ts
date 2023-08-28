import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const deploy_vaultContract: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { getNamedAccounts, deployments, network } = hre;
  const { deploy, log,get} = deployments;
  const { deployer } = await getNamedAccounts();
 
  log("deploying vault contract...");
  const _vaultContract = await deploy("vaultContract", {
    from: deployer,
    log: true,
    args: [],
  });

  const timelock = await ethers.getContract("TimelockControl");
  const vaultC = await ethers.getContractAt("vaultContract", _vaultContract.address);

  //TransferOwnership to timelock address
  const vaultCOwnership = await vaultC.transferOwnership(timelock.target)
  await vaultCOwnership.wait(1)
  log ("Transferred....")
};
 

export default deploy_vaultContract;
deploy_vaultContract.tags= ["all", "vault"]
