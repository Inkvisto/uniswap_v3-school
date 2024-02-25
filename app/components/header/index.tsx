'use client'

import React from "react";

import { connectWallet } from "@/app/lib/web3/connectWallet";
import { getInfo, getBalanceOf, mint, transfer } from "@/app/lib/web3/erc20";

const Header = () => {

  const [account, setAccount] = React.useState(null);
  const [value, setValue] = React.useState('');

  const getAccount = () => {
    (async () => {
      setAccount(await connectWallet());
    })()
  }

  return (
    <div className="p-10 space-x-4">
      <button className="bg-red-800 rounded p-2 " onClick={getAccount}> {account ?? "Connect Wallet"}</button>
      <button className="bg-blue-500 rounded p-2 " onClick={getInfo}>Get Info</button>
        <button className="bg-red-500 rounded p-2 " onClick={() => mint(100)}>mint</button>
        <button className="bg-yellow-500 rounded p-2 " onClick={() => transfer("0x13f7CE9E42E16eC96517a4C919EB20a850f6767E",10)}>transfer</button>
      <div className="flex gap-2 mt-10">
        <button className="bg-green-500 rounded p-2 " onClick={() => getBalanceOf(value)}>Get BalanceOf</button>
        <input
          type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="write account address here" value={value}
          onChange={e => { setValue(e.currentTarget.value); }}
        />
      </div>
    </div>
  )
}

export default Header;
