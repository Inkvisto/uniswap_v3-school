import { WriteOnlyFunctionForm } from "./WriteOnlyFunctionForm";
import { Abi, AbiFunction } from "abitype";

export const ContractWriteMethods = ({
  deployedContractData,
}: any) => {
  if (!deployedContractData) {
    return null;
  }

  const functionsToDisplay = (
    (deployedContractData.abi as Abi).filter(c => c.name === "modifyPosition" || c.name === "swap") as AbiFunction[]
  );

  return (
    <>
      {functionsToDisplay.map((fn, idx) => (
        <WriteOnlyFunctionForm
          key={`${fn.name}-${idx}}`}
          abiFunction={fn}
          contractAddress={deployedContractData.address}
        />
      ))}
    </>
  );
};
