import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "@typechain/hardhat";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-gas-reporter";
import "@primitivefi/hardhat-dodoc";
import "hardhat-interface-generator";

import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.21",
  networks: {
    testnet: {
      url: "https://rpc.ankr.com/fantom_testnet",
      accounts: [process.env.PRIVATE_KEY as string],
    },
    mainnet: {
      url: "https://rpc.ankr.com/eth",
      accounts: [process.env.PRIVATE_KEY as string],
    },
    go: {
      url: "https://rpc.ankr.com/eth_goerli",
      accounts: [process.env.PRIVATE_KEY as string],
    },
    mumbai: {
      url: "https://nd-072-371-713.p2pify.com/fe6358e09128eff5f6afb11fcade6b83",
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
  etherscan: {
    apiKey: {
      testnet: process.env.API_KEY as string,
      mumbai: "73VJ6ADK4KES1UHEAHK9UX86XSEF47ZVPX",
      mainnet: "V9XZX97TN8AXB9NT21Z2WHAJ3H9TNA34SI",
      go: "V9XZX97TN8AXB9NT21Z2WHAJ3H9TNA34SI",
    },
    customChains: [
      {
        network: "testnet",
        chainId: 4002,
        urls: {
          apiURL: "https://api-testnet.ftmscan.com/api/",
          browserURL: "https://testnet.ftmscan.com",
        },
      },
      {
        network: "mumbai",
        chainId: 80001,
        urls: {
          apiURL: "https://api.polygonscan.com/api/",
          browserURL: "https://polygonscan.com/",
        },
      },
      {
        network: "go",
        chainId: 5,
        urls: {
          apiURL: "https://api-goerli.etherscan.io/api/",
          browserURL: "https://goerli.etherscan.io/",
        },
      },
      {
        network: "mainnet",
        chainId: 1,
        urls: {
          apiURL: "https://api.etherscan.io/api/",
          browserURL: "https://etherscan.io/",
        },
      },
    ],
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v6",
  },
  gasReporter: {
    currency: "USD",
  },
  dodoc: {
    runOnCompile: true,
    debugMode: false,
  },
};

export default config;
