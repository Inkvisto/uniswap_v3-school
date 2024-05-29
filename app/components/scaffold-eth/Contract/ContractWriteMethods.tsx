import { WriteOnlyFunctionForm } from "./WriteOnlyFunctionForm";
import { Abi, AbiFunction } from "abitype";

export const ContractWriteMethods = ({
  deployedContractData,
}: any) => {
  if (!deployedContractData) {
    return null;
  }

  const functionsToDisplay = (
    (deployedContractData.abi as Abi).filter(part => part.type === "function") as AbiFunction[]
  ).filter(fn => fn.name === "modifyPosition" || fn.name === "swap");

  if (!functionsToDisplay.length) {
    return <>No write methods</>;
  }

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
