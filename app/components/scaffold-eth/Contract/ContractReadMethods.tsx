import { ReadOnlyFunctionForm } from "./ReadOnlyFunctionForm";
import { Abi, AbiFunction } from "abitype";

export const ContractReadMethods = ({ deployedContractData }: any) => {
  if (!deployedContractData) {
    return null;
  }

  const functionsToDisplay = (
    ((deployedContractData.abi || []) as Abi).filter(part => part.type === "function") as AbiFunction[]
  ).filter(fn =>  fn.name === "getLiquidity" && fn.inputs.length < 4);

  if (!functionsToDisplay.length) {
    return <>No read methods</>;
  }

  return (
    <>
      {functionsToDisplay.map(fn => (
        <ReadOnlyFunctionForm contractAddress={deployedContractData.address} abiFunction={fn} key={fn.name} />
      ))} 
    </>
  );
};
