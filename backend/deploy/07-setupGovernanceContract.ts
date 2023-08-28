import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const setupGovernance: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { getNamedAccounts, deployments, network } = hre;

  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();
  const timeL= await get("TimelockControl")
  const gov= await get("EagleGovernor")
  const timeLock = await ethers.getContractAt("TimelockControl",timeL.address);
  const governor = await ethers.getContractAt("EagleGovernor",gov.address );



  log("Setting up roles...");
  //log(await timeLock.PROPOSER_ROLE())
  const proposerRole = await timeLock.PROPOSER_ROLE();
  const executorRole = await timeLock.EXECUTOR_ROLE();
  const adminRole = await timeLock.TIMELOCK_ADMIN_ROLE();

  const proposerTx = await timeLock.grantRole(proposerRole, governor.target);
  await proposerTx.wait(1);
  const execTx = await timeLock.grantRole(executorRole, "0x00");
  await execTx.wait(1);
  const revokeTx = await timeLock.revokeRole(adminRole, deployer);
  await revokeTx.wait(1);
};
export default setupGovernance;
setupGovernance.tags = ["all", "setup"];
