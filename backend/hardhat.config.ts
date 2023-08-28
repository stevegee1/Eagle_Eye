import { HardhatUserConfig } from "hardhat/config";
//import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import "@nomicfoundation/hardhat-ethers";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks: {
    Fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      chainId: 43113,
    },
    ArbitrumGoerli: {
      url: "https://goerli-rollup.arbitrum.io/rpc",
      chainId: 421613,
    },
  },
};

export default config;
