import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const deployEAGToken: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { getNamedAccounts, deployments, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  log("deploying EAG token...");
  const EAGToken = await deploy("EagleToken", {
    from: deployer,
    log: true,
    args: [],
  });

  await Delegate(EAGToken.address, deployer)
  log("Delegated")
};

//Delegate token to vote
const Delegate = async (
  governanceTokenAddress: string,
  delegatedAccount: string
) => {
  const governanceToken = await ethers.getContractAt(
    "EagleToken",
    governanceTokenAddress
  );
  const tx = await governanceToken.delegate(delegatedAccount);
  await tx.wait(1);
  console.log(
    `checkpoints ${await governanceToken.numCheckpoints(delegatedAccount)}`
  );
};
export default deployEAGToken;
deployEAGToken.tags=["all", "EAG"]
