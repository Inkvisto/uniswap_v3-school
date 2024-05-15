
import Image from "next/image";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { enabledChains } from "../web3/wagmiConnectors";
import { Chain } from "viem";

export const NetworkSwitcher = () => {


  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Switch Network</Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu for network switching">
        {enabledChains.map((chain: Chain) => {
          return (
            <DropdownItem
              key={chain.name}
              startContent={
                <Image
                  src={
                    "https://uniswaphooks.com/_next/image?url=https%3A%2F%2Fchainlist.org%2Funknown-logo.png&w=64&q=75"
                  }
                  alt={`${chain.name} logo`}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              }
            >
              {chain.name}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};
