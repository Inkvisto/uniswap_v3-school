import { ethers } from "ethers";
import erc20_abi from "./erc20.json";

export const getInfo = async () => {

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  let erc20 = new ethers.Contract("0x9430f55A54a4FE4ebBB29a13bB3De1837992B301", erc20_abi, signer);
  const name = await erc20.name();
  const symbol = await erc20.symbol();
  console.log("ERC20 token has name:", name, "\nAnd symbol:", symbol);
}

export const getBalanceOf = async (addr: string) => {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    let erc20 = new ethers.Contract("0x9430f55A54a4FE4ebBB29a13bB3De1837992B301", erc20_abi, signer);

    const balanceOf = await erc20.balanceOf(addr);
    console.log("Balance of this account is:", balanceOf);
  }
}

export const mint = async (amount: number) => {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    let erc20 = new ethers.Contract("0x9430f55A54a4FE4ebBB29a13bB3De1837992B301", erc20_abi, signer);

    await erc20.mint(amount);
  }
}


export const transfer = async (addr: string, amount: number) => {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    let erc20 = new ethers.Contract("0x9430f55A54a4FE4ebBB29a13bB3De1837992B301", erc20_abi, signer);

    await erc20.transfer(addr, amount);
  }
}



