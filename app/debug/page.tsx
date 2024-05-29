'use client'

import { MetaHeader } from "~~/components/MetaHeader";
import { ContractUI } from "~~/components/scaffold-eth";

const debug_addresses = ["PoolManager", "Router04"];
const Debug = () => {
  return (
    <>
      <MetaHeader
        title="Debug Contracts | Scaffold-ETH 2"
        description="Debug your deployed 🏗 Scaffold-ETH 2 contracts in an easy way"
      />
      {debug_addresses.map((contractName) => (
      <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      
        <button
          className={"btn btn-secondary btn-sm normal-case font-thin bg-base-300"}
          key={contractName}
        >
          {contractName}
        </button>
        <ContractUI
          key={contractName}
          contractName={contractName}
        />
      </div>))}
    </>
  );
};

export default Debug;
