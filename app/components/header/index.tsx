'use client'

import React from "react";

import { connectWallet } from "@/app/lib/web3/connectWallet";
import { getHello } from "@/app/lib/web3/hello";

const Header = () => {

const [account, setAccount] = React.useState(null);

  const getAccount = () => {
    (async () => {
      setAccount(await connectWallet());
    })()
  }

  return (
    <div className="flex p-10  justify-center space-x-4">
      <button className="bg-red-800 rounded p-2" onClick={getAccount}> {account ?? "Connect Wallet"}</button>
      <button className="bg-blue-500 rounded p-2" onClick={getHello}>Hello</button>
    </div>
  )
}

export default Header;
