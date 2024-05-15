'use client'

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { UseReadContractsReturnType, useDisconnect, useReadContracts, useSwitchChain } from "wagmi";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from "@nextui-org/react";
import { TOKEN_ADDRESSES } from "../utils/config";
import { getBlockExplorerAddressLink, getTargetNetwork } from "../utils/network";
import CopyToClipboard from "react-copy-to-clipboard";
import {
  ArrowLeftEndOnRectangleIcon,
  ArrowsRightLeftIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Balance from "./Balance";
import { formatUnits } from "viem";
import { Avatar } from "./Avatar";
import { QRCodeSVG } from "qrcode.react";
import { Address } from "./Address";


const CustomConnectButton = () => {
const [addressCopied, setAddressCopied] = useState(false);
  const { disconnect } = useDisconnect();
   const [address, setAddress] = useState<string>("0x0");
     const configuredNetwork = getTargetNetwork();
      const { switchChain } = useSwitchChain();

   return (
        <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;
        const blockExplorerAddressLink = account
          ? getBlockExplorerAddressLink(getTargetNetwork(), account.address)
          : undefined;

        const token0:UseReadContractsReturnType = useReadContracts({
          contracts: [
            
          {address: TOKEN_ADDRESSES[0][chain?.id as keyof (typeof TOKEN_ADDRESSES)[0]]}
          ]
        });

        const token1: UseReadContractsReturnType = useReadContracts({
          contracts: [
            
          {address: TOKEN_ADDRESSES[1][chain?.id as keyof (typeof TOKEN_ADDRESSES)[1]]}
          ]
        });


        useEffect(() => {
          if (account) {
            setAddress(account.address);
          }
        }, [account]);
        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <Button
                    className="bg-gradient-to-tr
                  from-[#ff0080] to-[#7928ca] text-white opacity-50
                  hover:opacity-100
                  hover:transition-opacity duration-100 ease-in-out
                  hover:scale-110 transform  
                  "
                    onClick={openConnectModal}
                    type="button"
                    variant="light"
                  >
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported && chain.id !== configuredNetwork.id) {
                return (
                  <div className="flex justify-end items-center">
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="bordered" color="danger" size="sm">
                          Wrong Network
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu variant="bordered" aria-label="Network Actions">
                        <DropdownItem onClick={() => switchChain({chainId: configuredNetwork.id})}>
                          <span className="flex items-center gap-3">
                            <ArrowsRightLeftIcon className="h-6 w-4" />
                            <span>
                              Switch to <span style={{ color: "red" }}>{configuredNetwork.name}</span>
                            </span>
                          </span>
                        </DropdownItem>
                        <DropdownItem color="danger" onClick={() => disconnect()}>
                          <span className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                            </svg>
                            <ArrowLeftEndOnRectangleIcon className="h-6 w-4" /> Disconnect
                          </span>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                );
              }

              return (
                <div className="px-2 flex justify-end items-center">
                  <Dropdown>
                    <DropdownTrigger>
                      <div className="flex flex-col items-center mr-1">
                        <Balance address={account.address} className="min-h-0 h-auto" />
                        <span className="text-xs" style={{ color: "red" }}>
                          {chain.name}
                        </span>
                      </div>
                    </DropdownTrigger>
                    <DropdownMenu>
                      <DropdownItem>
                        <CopyToClipboard text={"0"}>
                          <div className="flex flex-col items-center">
                            <span className="text-xs">{token0.data?.name ?? "Token0"}</span>
                          </div>
                        </CopyToClipboard>
                      </DropdownItem>
                      <DropdownItem>
                        <CopyToClipboard text={"0"}>
                          <div className="flex flex-col items-center">
                            <span className="text-xs">{token1.data?.name ?? "Token1"}</span>
                          </div>
                        </CopyToClipboard>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown backdrop="blur">
                    <DropdownTrigger>
                      <Button variant="default">
                        <Avatar address={account.address} size={30} ensImage={account.ensAvatar} />
                        <span className="ml-2 mr-1">{account.displayName}</span>
                        <ChevronDownIcon className="h-6 w-4 ml-2 sm:ml-0" />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu variant="faded" aria-label="Account Actions">
                      <DropdownItem variant="light">
                        {/* add button and isLoading if clicked onCopy */}

                        <Button
                          className="flex w-full"
                          onClick={() => {
                            setAddressCopied(true);
                            // copy address to clipboard
                            navigator.clipboard.writeText(account.address);
                            setTimeout(() => {
                              setAddressCopied(false);
                            }, 800);
                          }}
                          variant="light"
                        >
                          <DocumentDuplicateIcon
                            className="text-xl font-normal h-6 w-4 cursor-pointer ml-2 sm:ml-0"
                            aria-hidden="true"
                          />
                          Copy Address
                        </Button>
                      </DropdownItem>

                      <DropdownItem>
                        <Link target="_blank" href={blockExplorerAddressLink} rel="noopener noreferrer">
                          View on Block Explorer
                        </Link>
                      </DropdownItem>
                      <DropdownItem color="danger" onClick={() => disconnect()}>
                        Disconnect
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <div>
                    <input type="checkbox" id="qrcode-modal" className="modal-toggle" />
                    <label htmlFor="qrcode-modal" className="modal cursor-pointer">
                      <label className="modal-box relative">
                        {/* dummy input to capture event onclick on modal box */}
                        <input className="h-0 w-0 absolute top-0 left-0" />
                        <label
                          htmlFor="qrcode-modal"
                          className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3"
                        >
                          ✕
                        </label>
                        <div className="space-y-3 py-6">
                          <div className="flex space-x-4 flex-col items-center gap-6">
                            <QRCodeSVG value={account.address} size={256} />
                            <Address address={account.address} format="long" disableAddressLink />
                          </div>
                        </div>
                      </label>
                    </label>
                  </div>
                </div>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
   )
  
};

export default CustomConnectButton;
