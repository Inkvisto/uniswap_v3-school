'use client'

import { ContractUI } from "~~/components/scaffold-eth";

const debug_addresses = ["PoolManager", "Router04"];
const Debug = () => {
  return (
    <>
      {debug_addresses.map((contractName) => (
        <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
          <ContractUI
            key={contractName}
            contractName={contractName}
          />
        </div>))}
    </>
  );
};

export default Debug;
