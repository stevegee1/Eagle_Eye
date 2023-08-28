import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deploy_GovernorContract: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { getNamedAccounts, deployments, network } = hre;
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();
  const eagleToken = await get("EagleToken");
  const timelock = await get("TimelockControl");
  log("deploying Governor contract...");
  const _eagleGovernor = await deploy("EagleGovernor", {
    from: deployer,
    log: true,
    args: [eagleToken.address, timelock.address],
  });
};
export default deploy_GovernorContract;
deploy_GovernorContract.tags = ["all", "Governor"];
