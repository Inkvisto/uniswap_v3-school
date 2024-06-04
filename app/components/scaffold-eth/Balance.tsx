import { Address, formatUnits } from "viem";
import { foundry } from "viem/chains";
import { useBalance } from "wagmi";


type TBalanceProps = {
  address?: string;
  className?: string;
};

/**
 * Display (ETH & USD) balance of an ETH address.
 */
export const Balance = ({ address, className = "" }: TBalanceProps) => {
  
  const {
    data: fetchedBalanceData,
    isError,
    isLoading,
  } = useBalance({
    address: address as Address,
    chainId: foundry.id
  });



  if (!address || isLoading || fetchedBalanceData === null) {
    return (
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-md bg-slate-300 h-6 w-6"></div>
        <div className="flex items-center space-y-6">
          <div className="h-2 w-28 bg-slate-300 rounded"></div>
        </div>
      </div>
    );
  }
  


  const balance = formatUnits(fetchedBalanceData!.value, fetchedBalanceData!.decimals);

  return (
    <button
      className={`btn btn-sm btn-ghost flex flex-col font-normal items-center hover:bg-transparent ${className}`}
    >
      <div className="w-full flex items-center justify-center">
        <span>{Number(balance)?.toFixed(4)}</span>
        <span className="font-bold ml-1">{foundry.nativeCurrency.symbol}</span>
      </div>
    </button>
  );
};
