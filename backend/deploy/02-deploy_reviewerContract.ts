import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deploy_reviewerContract: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { getNamedAccounts, deployments, network } = hre;
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();
  const eagleToken = await get("EagleToken");
  log("deploying reviewerContract...");
  const _ReviewerContract = await deploy("ReviewerContract", {
    from: deployer,
    log: true,
    args: [eagleToken.address],
  });
};
export default deploy_reviewerContract;
deploy_reviewerContract.tags= ["all", "Review"]
