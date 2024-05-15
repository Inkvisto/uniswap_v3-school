import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  braveWallet,
  coinbaseWallet,
  ledgerWallet,
  metaMaskWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import * as chains from "wagmi/chains";
import { getTargetNetwork } from "../utils/network";

const configuredNetwork = getTargetNetwork();

// We always want to have mainnet enabled (ENS resolution, ETH price, etc). But only once.
export const enabledChains = [
  chains.foundry,
  chains.goerli,
  chains.sepolia,
  chains.polygonMumbai,
  chains.polygonZkEvmTestnet,
  chains.arbitrumGoerli,
  chains.optimismGoerli,
  chains.baseGoerli,
  chains.scrollSepolia,
];

