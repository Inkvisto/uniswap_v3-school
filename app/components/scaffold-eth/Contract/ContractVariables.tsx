import { useReadContract } from "wagmi";
import { Abi, AbiFunction } from "abitype";
import { useEffect } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { displayTxResult } from "./utilsDisplay";

export const ContractVariables = ({
  refreshDisplayVariables,
  deployedContractData,
}: {
  refreshDisplayVariables: boolean;
  deployedContractData: any;
}) => {

  if (!deployedContractData) {
    return null;
  }

  const functionsToDisplay = (
    (deployedContractData.abi as Abi).filter(part => part.type === "function") as AbiFunction[]
  ).filter(fn => {
    const isQueryableWithNoParams =
      (fn.stateMutability === "view" || fn.stateMutability === "pure") && fn.inputs.length === 0;
    return isQueryableWithNoParams;
  });

  if (!functionsToDisplay.length) {
    return <>No contract variables</>;
  }
  

  return (
    <>
      {functionsToDisplay.map(fn => {
         const {
          data: result,
          isFetching,
          refetch,
          isError,
          error,
          failureReason
        } = useReadContract({
          address: deployedContractData.address,
          functionName: fn.name,
          abi: [fn] as Abi
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
            <h3 className="font-medium text-lg mb-0 break-all">{fn.name}</h3>
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
      )})}
    </>
  );
};
