import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deploy_Timelock: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { getNamedAccounts, deployments, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  log("deploying timelock contract...");
  const _timeLock = await deploy("TimelockControl", {
    from: deployer,
    log: true,
    args: [3600, [], [], deployer],
  });
};
export default deploy_Timelock;
deploy_Timelock.tags = ["all", "timeLock"]
