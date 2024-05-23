import { useAccount, useChainId } from "wagmi"
import { useReadContracts } from 'wagmi'
import { erc20Abi } from 'viem'

const SwapComponent = () => {
  const {address} = useAccount();
  const chainId = useChainId();

  const result = useReadContracts({ 
  allowFailure: false, 
  contracts: [ 
    { 
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', 
      abi: erc20Abi, 
      functionName: 'decimals', 
    }, 
    { 
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', 
      abi: erc20Abi, 
      functionName: 'name', 
    }, 
    { 
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', 
      abi: erc20Abi, 
      functionName: 'symbol', 
    }, 
    { 
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', 
      abi: erc20Abi, 
      functionName: 'totalSupply', 
    }, 
  ] 
})
  
  return <div>12</div>
}

export default SwapComponent;
