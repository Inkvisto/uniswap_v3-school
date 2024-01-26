import { ethers } from "ethers";
import  hello_abi  from "./hello.json";


export const getHello = async () => {
  if (typeof window.ethereum !== "undefined"){
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(
    "0x0c27083c3d0d5b296cb16c44a2f2eb4c4f7ca051",
    hello_abi,
    signer
  );
  console.log(await contract.greet());
  }
};


