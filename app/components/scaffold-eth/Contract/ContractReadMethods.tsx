import { ReadOnlyFunctionForm } from "./ReadOnlyFunctionForm";
import { Abi, AbiFunction } from "abitype";

export const ContractReadMethods = ({ deployedContractData }: any) => {
  if (!deployedContractData) {
    return null;
  }


  const functionsToDisplay = (
    ((deployedContractData.abi || []) as any).filter(c => c.name === "getLiquidity") as AbiFunction[]
  ).filter(fn =>  fn.name === "getLiquidity" && fn.inputs.length < 4);


  return (
    <>
      {functionsToDisplay.map(fn => (
        <ReadOnlyFunctionForm contractAddress={deployedContractData.address} abiFunction={fn} key={fn.name} />
      ))} 
    </>
  );
};
