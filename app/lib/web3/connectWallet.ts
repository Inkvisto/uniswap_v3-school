'use client'

export const connectWallet = async () => {
  const provider = await window.ethereum.request({
    "method": "eth_requestAccounts",
    "params": []
  });

  return provider[0];
}

