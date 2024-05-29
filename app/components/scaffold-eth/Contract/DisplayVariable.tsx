import { useEffect } from "react";
import { Abi, AbiFunction } from "abitype";
import { Address } from "viem";
import { useReadContract } from "wagmi";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { displayTxResult } from "~~/components/scaffold-eth";

type DisplayVariableProps = {
  contractAddress: Address;
  abiFunction: AbiFunction;
  refreshDisplayVariables: boolean;
};

export const DisplayVariable = ({ abiFunction, refreshDisplayVariables, contractAddress }: DisplayVariableProps) => {
  
  const {
    data: result,
    isFetching,
    refetch,
    isError,
    error,
    failureReason
  } = useReadContract({
    address: contractAddress,
    functionName: abiFunction.name,
    abi: [abiFunction] as Abi
  });

  if(isError) {
    console.log("Error:", error, failureReason);
  }


  useEffect(() => {
    refetch();
  }, [refetch, refreshDisplayVariables]);

  return (
    <div className="space-y-1 pb-2">
      <div className="flex items-center gap-2">
        <h3 className="font-medium text-lg mb-0 break-all">{abiFunction.name}</h3>
        <button className="btn btn-ghost btn-xs" onClick={async () => await refetch()}>
          {isFetching ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            <ArrowPathIcon className="h-3 w-3 cursor-pointer" aria-hidden="true" />
          )}
        </button>
      </div>
      <div className="text-gray-500 font-medium flex flex-col items-start">
        <div>
          <div
            className="break-all block transition bg-transparent"
          >
            {displayTxResult(result)}
          </div>
        </div>
      </div>
    </div>
  );
};
