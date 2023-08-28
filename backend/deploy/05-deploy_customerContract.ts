import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deploy_customerContract: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { getNamedAccounts, deployments, network } = hre;
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();

  const ReviewerContract = await get("ReviewerContract");
  const vaultContract = await get("vaultContract");
  const eagleToken = await get("EagleToken");

  log("deploying customerContract...");
  const _customerContract = await deploy("customerContract", {
    from: deployer,
    log: true,
    args: [ReviewerContract.address, vaultContract.address, eagleToken.address],
  });
};
export default deploy_customerContract;
