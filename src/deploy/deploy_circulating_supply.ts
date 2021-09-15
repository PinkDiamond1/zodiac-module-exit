import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const FirstAddress = "0x0000000000000000000000000000000000000001";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  const args = [FirstAddress, FirstAddress, []];


  await deploy("CirculatingSupply", {
    from: deployer,
    args,
    log: true,
    deterministicDeployment: true,
  });
};

deploy.tags = ["circulating-supply"];
export default deploy;
