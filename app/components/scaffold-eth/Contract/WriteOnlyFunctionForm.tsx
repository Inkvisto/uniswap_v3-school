import { useState } from "react";
import { Abi, AbiFunction } from "abitype";
import { Address } from "viem";
import { useWriteContract, useAccount, useWaitForTransactionReceipt } from "wagmi";
import {
  IntegerInput,
  TxReceipt,
  getParsedError,
} from "~~/components/scaffold-eth";
import { foundry } from "viem/chains";

type WriteOnlyFunctionFormProps = {
  abiFunction: AbiFunction;
  contractAddress: Address;
};

export const WriteOnlyFunctionForm = ({ abiFunction, contractAddress }: WriteOnlyFunctionFormProps) => {
  const [intValue, setIntValue] = useState<string | bigint>("");
  const { chain } = useAccount();

  const writeDisabled = !chain;

  const {
    data: result,
    isPending,
    writeContractAsync,
  } = useWriteContract();

  const modifyPosition = async () => {
      try {
        console.log(contractAddress);
        
     await writeContractAsync({
          chainId: foundry.id,
          address: contractAddress,
          functionName: 'modifyPosition',
          abi: [abiFunction] as Abi,
          args: [['0x5FbDB2315678afecb367f032d93F642f64180aa3', '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',3000 ,2, '0x0000000000000000000000000000000000000000'], 
          [-1000, 1000, intValue]],
        });
     

      } catch (e: any) {
        const message = getParsedError(e);
        console.error(message);
      }
  };

  const swap = async () => {
    await writeContractAsync({
      chainId: foundry.id,
      address: contractAddress,
      functionName: abiFunction.name,
      abi: [abiFunction] as Abi,
      args: [['0x5FbDB2315678afecb367f032d93F642f64180aa3', '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512', 3000 , 2, '0x0000000000000000000000000000000000000000'], 
      [true, 1000000, 75364347830767020784054125655]],
    });

  }

  const { data: txResult } = useWaitForTransactionReceipt({
    hash: result,
  });

  return (
    <div className="py-5 space-y-3 first:pt-0 last:pb-1">
      <div className="flex gap-3 flex-col">
        <p className="font-medium my-0 break-words">{abiFunction.name}</p>
        {abiFunction.stateMutability === "payable" ? (
          <IntegerInput
            value={intValue}
            onChange={val => {
              setIntValue(val);
            }}
            placeholder="value (wei)"
          />
        ) : null}
        <div className="flex justify-between gap-2">
    
       
          <div
            className={`flex ${writeDisabled &&
              "tooltip before:content-[attr(data-tip)] before:right-[-10px] before:left-auto before:transform-none"
              }`}
            data-tip={`${writeDisabled && "Wallet not connected or in the wrong network"}`}
          >
            <button className="btn btn-secondary btn-sm" disabled={writeDisabled || isPending} onClick={modifyPosition}>
              {isPending && <span className="loading loading-spinner loading-xs"></span>}
              Send 💸
            </button>
          </div>
        </div>
      </div>
      {txResult ? (
        <div className="flex-grow basis-0">
          <TxReceipt txResult={txResult} />
        </div>
      ) : null}
    </div>
  );
};
