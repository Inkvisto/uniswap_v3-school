import { useReducer } from "react";
import { ContractReadMethods } from "./ContractReadMethods";
import { ContractVariables } from "./ContractVariables";
import { ContractWriteMethods } from "./ContractWriteMethods";
import { Balance } from "~~/components/scaffold-eth";
import { useDeployedContractInfo } from "~~/hooks/useDeployedContractInfo";
import { foundry } from "viem/chains";
import { Spinner } from "@nextui-org/react";

type ContractUIProps = {
  contractName: string;
  className?: string;
};

/**
 * UI component to interface with deployed contracts.
 **/
export const ContractUI = ({ contractName, className = "" }: ContractUIProps) => {
  const [refreshDisplayVariables, triggerRefreshDisplayVariables] = useReducer(value => !value, false);


  const { data: deployedContractData, isLoading: deployedContractLoading } = useDeployedContractInfo(
    contractName,
    foundry.id,
  );

  if (deployedContractLoading) {
    return (
      <div className="mt-14">
        <Spinner  />
      </div>
    );
  }

  if (!deployedContractData) {
    return (
      <p className="text-3xl mt-14">
        {`No contract found by the name of "${contractName}" on chain "${foundry.name}"!`}
      </p>
    );
  }

  

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-6 px-6 lg:px-10 lg:gap-12 w-full max-w-7xl my-0 ${className}`}>
      <div className="col-span-5 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        <div className="col-span-1 flex flex-col">
          <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 mb-6 space-y-1 py-4">
            <div className="flex">
              <div className="flex flex-col gap-1">
                <span className="font-bold">{contractName}</span>
                <div className="break-all block transition bg-transparent"> {deployedContractData.address}</div>
               
                <div className="flex gap-1 items-center">
                  <span className="font-bold text-sm">Balance:</span>
                  <Balance address={deployedContractData.address} className="px-0 h-1.5 min-h-[0.375rem]" />
                </div>
              </div>
            </div>
              <p className="my-0 text-sm">
                <span className="font-bold">Network</span>:{" "}
                <span>{foundry.name}</span>
              </p>
          </div>
          <div className="bg-base-300 rounded-3xl px-6 lg:px-8 py-4 shadow-lg shadow-base-300">
            <ContractVariables
              refreshDisplayVariables={refreshDisplayVariables}
              deployedContractData={deployedContractData}
            />
          </div>
        </div>
        <></>
   
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
        {deployedContractData.address === "0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9" ? 
          <div className="z-10">
            <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col mt-10 relative">
              <div className="h-[5rem] w-[5.5rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
                <div className="flex items-center justify-center space-x-2">
                  <p className="my-0 text-sm">Read</p>
                </div>
              </div>
              <div className="p-5 divide-y divide-base-300">
                <ContractReadMethods deployedContractData={deployedContractData} />
              </div>
            </div>
            
          </div>
         : null}
          {deployedContractData.address === "0x0165878a594ca255338adfa4d48449f69242eb8f" ? 
          <div className="z-10">
            <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col mt-10 relative">
              <div className="h-[5rem] w-[5.5rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
                <div className="flex items-center justify-center space-x-2">
                  <p className="my-0 text-sm">Write</p>
                </div>
              </div>
              <div className="p-5 divide-y divide-base-300">

                <ContractWriteMethods
                  deployedContractData={deployedContractData}
                  onChange={triggerRefreshDisplayVariables}
                /> 
              </div>
            </div>
          </div>
          : null}
        </div>
      </div>
    </div>
  );
};
