import { Connector, useAccount, useConnect } from "wagmi";
import web3Config from "../config";
import { getTargetNetwork } from "../utils/network";

// ID of the SAFE connector instance
const SAFE_ID = "safe";

// get the initial wallet connector (if any), the app will connect to
const getInitialConnector = (
  previousWalletId: string,
  connectors: Connector[],
): { connector: Connector | undefined; chainId?: number} | undefined => {
  // Look for the SAFE connector instance and connect to it instantly if loaded in SAFE frame
  const safeConnectorInstance = connectors.find(connector => connector.id === SAFE_ID && connector.ready);

  if (safeConnectorInstance) {
    return { connector: safeConnectorInstance };
  }
   const targetNetwork = getTargetNetwork();
  const allowBurner = web3Config.onlyLocalBurnerWallet ? targetNetwork.id === hardhat.id : true;

  if (!previousWalletId) {
    // The user was not connected to a wallet
    if (allowBurner && scaffoldConfig.walletAutoConnect) {
      const connector = connectors.find(f => f.id === burnerWalletId);
      return { connector, chainId: defaultBurnerChainId };
    }
  } else {
    // the user was connected to wallet
    if (scaffoldConfig.walletAutoConnect) {
      if (previousWalletId === burnerWalletId && !allowBurner) {
        return;
      }

      const connector = connectors.find(f => f.id === previousWalletId);
      return { connector };
    }
  }

  return undefined;
}
