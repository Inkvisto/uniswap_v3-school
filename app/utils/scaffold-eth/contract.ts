import { Abi } from "abitype";
import { Address } from "viem";

import contractsData from "~~/generated/deployedContracts";

export type GenericContractsDeclaration = {
  [key: number]: readonly {
    name: string;
    chainId: string;
    contracts: {
      [key: string]: {
        address: Address;
        abi: Abi;
      };
    };
  }[];
};

export const contracts = contractsData as GenericContractsDeclaration | null;

export enum ContractCodeStatus {
  "LOADING",
  "DEPLOYED",
  "NOT_FOUND",
}

