const contracts = {
  31337: [
    {
      name: "Anvil",
      chainId: "31337",
      contracts: {
        null: {
          address: "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0",
          abi: [
            {
              type: "constructor",
              inputs: [
                {
                  name: "name",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "symbol",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "decimals",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "amountToMint",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "DOMAIN_SEPARATOR",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "allowance",
              inputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "approve",
              inputs: [
                {
                  name: "spender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "balanceOf",
              inputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "decimals",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint8",
                  internalType: "uint8",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "forceApprove",
              inputs: [
                {
                  name: "_from",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "_to",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "_amount",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "mint",
              inputs: [
                {
                  name: "_to",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "_amount",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "name",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "nonces",
              inputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "permit",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "spender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "deadline",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "v",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "r",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "s",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "symbol",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "totalSupply",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "transfer",
              inputs: [
                {
                  name: "to",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "transferFrom",
              inputs: [
                {
                  name: "from",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "event",
              name: "Approval",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "spender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "amount",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "Transfer",
              inputs: [
                {
                  name: "from",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "to",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "amount",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
          ],
        },
        PoolManager: {
          address: "0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9",
          abi: [
            {
              type: "constructor",
              inputs: [
                {
                  name: "controllerGasLimit",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "receive",
              stateMutability: "payable",
            },
            {
              type: "function",
              name: "MAX_TICK_SPACING",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "int24",
                  internalType: "int24",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "MIN_PROTOCOL_FEE_DENOMINATOR",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint8",
                  internalType: "uint8",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "MIN_TICK_SPACING",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "int24",
                  internalType: "int24",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "balanceOf",
              inputs: [
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "id",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "balanceOfBatch",
              inputs: [
                {
                  name: "accounts",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "ids",
                  type: "uint256[]",
                  internalType: "uint256[]",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256[]",
                  internalType: "uint256[]",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "collectHookFees",
              inputs: [
                {
                  name: "recipient",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "currency",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "amountCollected",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "collectProtocolFees",
              inputs: [
                {
                  name: "recipient",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "currency",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "amountCollected",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "currencyDelta",
              inputs: [
                {
                  name: "locker",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "currency",
                  type: "address",
                  internalType: "Currency",
                },
              ],
              outputs: [
                {
                  name: "currencyDelta",
                  type: "int256",
                  internalType: "int256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getLiquidity",
              inputs: [
                {
                  name: "id",
                  type: "bytes32",
                  internalType: "PoolId",
                },
                {
                  name: "_owner",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "tickLower",
                  type: "int24",
                  internalType: "int24",
                },
                {
                  name: "tickUpper",
                  type: "int24",
                  internalType: "int24",
                },
              ],
              outputs: [
                {
                  name: "liquidity",
                  type: "uint128",
                  internalType: "uint128",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getLiquidity",
              inputs: [
                {
                  name: "id",
                  type: "bytes32",
                  internalType: "PoolId",
                },
              ],
              outputs: [
                {
                  name: "liquidity",
                  type: "uint128",
                  internalType: "uint128",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getLock",
              inputs: [
                {
                  name: "i",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "locker",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getPosition",
              inputs: [
                {
                  name: "id",
                  type: "bytes32",
                  internalType: "PoolId",
                },
                {
                  name: "owner",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "tickLower",
                  type: "int24",
                  internalType: "int24",
                },
                {
                  name: "tickUpper",
                  type: "int24",
                  internalType: "int24",
                },
              ],
              outputs: [
                {
                  name: "position",
                  type: "tuple",
                  internalType: "struct Position.Info",
                  components: [
                    {
                      name: "liquidity",
                      type: "uint128",
                      internalType: "uint128",
                    },
                    {
                      name: "feeGrowthInside0LastX128",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "feeGrowthInside1LastX128",
                      type: "uint256",
                      internalType: "uint256",
                    },
                  ],
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getSlot0",
              inputs: [
                {
                  name: "id",
                  type: "bytes32",
                  internalType: "PoolId",
                },
              ],
              outputs: [
                {
                  name: "sqrtPriceX96",
                  type: "uint160",
                  internalType: "uint160",
                },
                {
                  name: "tick",
                  type: "int24",
                  internalType: "int24",
                },
                {
                  name: "protocolFees",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "hookFees",
                  type: "uint24",
                  internalType: "uint24",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "hookFeesAccrued",
              inputs: [
                {
                  name: "hookAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "currency",
                  type: "address",
                  internalType: "Currency",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "initialize",
              inputs: [
                {
                  name: "key",
                  type: "tuple",
                  internalType: "struct PoolKey",
                  components: [
                    {
                      name: "currency0",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "currency1",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "fee",
                      type: "uint24",
                      internalType: "uint24",
                    },
                    {
                      name: "tickSpacing",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "hooks",
                      type: "address",
                      internalType: "contract IHooks",
                    },
                  ],
                },
                {
                  name: "sqrtPriceX96",
                  type: "uint160",
                  internalType: "uint160",
                },
                {
                  name: "hookData",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [
                {
                  name: "tick",
                  type: "int24",
                  internalType: "int24",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "isApprovedForAll",
              inputs: [
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "operator",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "lock",
              inputs: [
                {
                  name: "data",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [
                {
                  name: "result",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "lockData",
              inputs: [],
              outputs: [
                {
                  name: "length",
                  type: "uint128",
                  internalType: "uint128",
                },
                {
                  name: "nonzeroDeltaCount",
                  type: "uint128",
                  internalType: "uint128",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "mint",
              inputs: [
                {
                  name: "currency",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "to",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "modifyPosition",
              inputs: [
                {
                  name: "key",
                  type: "tuple",
                  internalType: "struct PoolKey",
                  components: [
                    {
                      name: "currency0",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "currency1",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "fee",
                      type: "uint24",
                      internalType: "uint24",
                    },
                    {
                      name: "tickSpacing",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "hooks",
                      type: "address",
                      internalType: "contract IHooks",
                    },
                  ],
                },
                {
                  name: "params",
                  type: "tuple",
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  components: [
                    {
                      name: "tickLower",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "tickUpper",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "liquidityDelta",
                      type: "int256",
                      internalType: "int256",
                    },
                  ],
                },
                {
                  name: "hookData",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [
                {
                  name: "delta",
                  type: "int256",
                  internalType: "BalanceDelta",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "onERC1155BatchReceived",
              inputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "ids",
                  type: "uint256[]",
                  internalType: "uint256[]",
                },
                {
                  name: "values",
                  type: "uint256[]",
                  internalType: "uint256[]",
                },
                {
                  name: "",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bytes4",
                  internalType: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "onERC1155Received",
              inputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "id",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "value",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bytes4",
                  internalType: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "owner",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "pools",
              inputs: [
                {
                  name: "id",
                  type: "bytes32",
                  internalType: "PoolId",
                },
              ],
              outputs: [
                {
                  name: "slot0",
                  type: "tuple",
                  internalType: "struct Pool.Slot0",
                  components: [
                    {
                      name: "sqrtPriceX96",
                      type: "uint160",
                      internalType: "uint160",
                    },
                    {
                      name: "tick",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "protocolFees",
                      type: "uint24",
                      internalType: "uint24",
                    },
                    {
                      name: "hookFees",
                      type: "uint24",
                      internalType: "uint24",
                    },
                  ],
                },
                {
                  name: "feeGrowthGlobal0X128",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "feeGrowthGlobal1X128",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "liquidity",
                  type: "uint128",
                  internalType: "uint128",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "protocolFeeController",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "contract IProtocolFeeController",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "protocolFeesAccrued",
              inputs: [
                {
                  name: "currency",
                  type: "address",
                  internalType: "Currency",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "reservesOf",
              inputs: [
                {
                  name: "currency",
                  type: "address",
                  internalType: "Currency",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "safeBatchTransferFrom",
              inputs: [
                {
                  name: "from",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "ids",
                  type: "uint256[]",
                  internalType: "uint256[]",
                },
                {
                  name: "amounts",
                  type: "uint256[]",
                  internalType: "uint256[]",
                },
                {
                  name: "data",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "safeTransferFrom",
              inputs: [
                {
                  name: "from",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "id",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "data",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setApprovalForAll",
              inputs: [
                {
                  name: "operator",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "approved",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setHookFees",
              inputs: [
                {
                  name: "key",
                  type: "tuple",
                  internalType: "struct PoolKey",
                  components: [
                    {
                      name: "currency0",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "currency1",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "fee",
                      type: "uint24",
                      internalType: "uint24",
                    },
                    {
                      name: "tickSpacing",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "hooks",
                      type: "address",
                      internalType: "contract IHooks",
                    },
                  ],
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setOwner",
              inputs: [
                {
                  name: "_owner",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setProtocolFeeController",
              inputs: [
                {
                  name: "controller",
                  type: "address",
                  internalType: "contract IProtocolFeeController",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setProtocolFees",
              inputs: [
                {
                  name: "key",
                  type: "tuple",
                  internalType: "struct PoolKey",
                  components: [
                    {
                      name: "currency0",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "currency1",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "fee",
                      type: "uint24",
                      internalType: "uint24",
                    },
                    {
                      name: "tickSpacing",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "hooks",
                      type: "address",
                      internalType: "contract IHooks",
                    },
                  ],
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "settle",
              inputs: [
                {
                  name: "currency",
                  type: "address",
                  internalType: "Currency",
                },
              ],
              outputs: [
                {
                  name: "paid",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "payable",
            },
            {
              type: "function",
              name: "supportsInterface",
              inputs: [
                {
                  name: "interfaceId",
                  type: "bytes4",
                  internalType: "bytes4",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "swap",
              inputs: [
                {
                  name: "key",
                  type: "tuple",
                  internalType: "struct PoolKey",
                  components: [
                    {
                      name: "currency0",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "currency1",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "fee",
                      type: "uint24",
                      internalType: "uint24",
                    },
                    {
                      name: "tickSpacing",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "hooks",
                      type: "address",
                      internalType: "contract IHooks",
                    },
                  ],
                },
                {
                  name: "params",
                  type: "tuple",
                  internalType: "struct IPoolManager.SwapParams",
                  components: [
                    {
                      name: "zeroForOne",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "amountSpecified",
                      type: "int256",
                      internalType: "int256",
                    },
                    {
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                      internalType: "uint160",
                    },
                  ],
                },
                {
                  name: "hookData",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [
                {
                  name: "delta",
                  type: "int256",
                  internalType: "BalanceDelta",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "take",
              inputs: [
                {
                  name: "currency",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "to",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "uri",
              inputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "event",
              name: "ApprovalForAll",
              inputs: [
                {
                  name: "account",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "operator",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "approved",
                  type: "bool",
                  indexed: false,
                  internalType: "bool",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "HookFeeUpdated",
              inputs: [
                {
                  name: "id",
                  type: "bytes32",
                  indexed: true,
                  internalType: "PoolId",
                },
                {
                  name: "hookFees",
                  type: "uint24",
                  indexed: false,
                  internalType: "uint24",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "Initialize",
              inputs: [
                {
                  name: "id",
                  type: "bytes32",
                  indexed: true,
                  internalType: "PoolId",
                },
                {
                  name: "currency0",
                  type: "address",
                  indexed: true,
                  internalType: "Currency",
                },
                {
                  name: "currency1",
                  type: "address",
                  indexed: true,
                  internalType: "Currency",
                },
                {
                  name: "fee",
                  type: "uint24",
                  indexed: false,
                  internalType: "uint24",
                },
                {
                  name: "tickSpacing",
                  type: "int24",
                  indexed: false,
                  internalType: "int24",
                },
                {
                  name: "hooks",
                  type: "address",
                  indexed: false,
                  internalType: "contract IHooks",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "ModifyPosition",
              inputs: [
                {
                  name: "id",
                  type: "bytes32",
                  indexed: true,
                  internalType: "PoolId",
                },
                {
                  name: "sender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "tickLower",
                  type: "int24",
                  indexed: false,
                  internalType: "int24",
                },
                {
                  name: "tickUpper",
                  type: "int24",
                  indexed: false,
                  internalType: "int24",
                },
                {
                  name: "liquidityDelta",
                  type: "int256",
                  indexed: false,
                  internalType: "int256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "OwnerChanged",
              inputs: [
                {
                  name: "oldOwner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "newOwner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "ProtocolFeeControllerUpdated",
              inputs: [
                {
                  name: "protocolFeeController",
                  type: "address",
                  indexed: false,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "ProtocolFeeUpdated",
              inputs: [
                {
                  name: "id",
                  type: "bytes32",
                  indexed: true,
                  internalType: "PoolId",
                },
                {
                  name: "protocolFees",
                  type: "uint24",
                  indexed: false,
                  internalType: "uint24",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "Swap",
              inputs: [
                {
                  name: "id",
                  type: "bytes32",
                  indexed: true,
                  internalType: "PoolId",
                },
                {
                  name: "sender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "amount0",
                  type: "int128",
                  indexed: false,
                  internalType: "int128",
                },
                {
                  name: "amount1",
                  type: "int128",
                  indexed: false,
                  internalType: "int128",
                },
                {
                  name: "sqrtPriceX96",
                  type: "uint160",
                  indexed: false,
                  internalType: "uint160",
                },
                {
                  name: "liquidity",
                  type: "uint128",
                  indexed: false,
                  internalType: "uint128",
                },
                {
                  name: "tick",
                  type: "int24",
                  indexed: false,
                  internalType: "int24",
                },
                {
                  name: "fee",
                  type: "uint24",
                  indexed: false,
                  internalType: "uint24",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "TransferBatch",
              inputs: [
                {
                  name: "operator",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "from",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "to",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "ids",
                  type: "uint256[]",
                  indexed: false,
                  internalType: "uint256[]",
                },
                {
                  name: "values",
                  type: "uint256[]",
                  indexed: false,
                  internalType: "uint256[]",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "TransferSingle",
              inputs: [
                {
                  name: "operator",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "from",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "to",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "id",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
                {
                  name: "value",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "URI",
              inputs: [
                {
                  name: "value",
                  type: "string",
                  indexed: false,
                  internalType: "string",
                },
                {
                  name: "id",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "error",
              name: "CannotUpdateEmptyPosition",
              inputs: [],
            },
            {
              type: "error",
              name: "CurrenciesInitializedOutOfOrder",
              inputs: [],
            },
            {
              type: "error",
              name: "CurrencyNotSettled",
              inputs: [],
            },
            {
              type: "error",
              name: "ERC20TransferFailed",
              inputs: [],
            },
            {
              type: "error",
              name: "FeeTooLarge",
              inputs: [],
            },
            {
              type: "error",
              name: "HookAddressNotValid",
              inputs: [
                {
                  name: "hooks",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              type: "error",
              name: "InvalidCaller",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidHookResponse",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidSqrtRatio",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidTick",
              inputs: [],
            },
            {
              type: "error",
              name: "LockedBy",
              inputs: [
                {
                  name: "locker",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              type: "error",
              name: "MaxCurrenciesTouched",
              inputs: [],
            },
            {
              type: "error",
              name: "NativeTransferFailed",
              inputs: [],
            },
            {
              type: "error",
              name: "NotPoolManagerToken",
              inputs: [],
            },
            {
              type: "error",
              name: "PoolAlreadyInitialized",
              inputs: [],
            },
            {
              type: "error",
              name: "PoolNotInitialized",
              inputs: [],
            },
            {
              type: "error",
              name: "PriceLimitAlreadyExceeded",
              inputs: [
                {
                  name: "sqrtPriceCurrentX96",
                  type: "uint160",
                  internalType: "uint160",
                },
                {
                  name: "sqrtPriceLimitX96",
                  type: "uint160",
                  internalType: "uint160",
                },
              ],
            },
            {
              type: "error",
              name: "PriceLimitOutOfBounds",
              inputs: [
                {
                  name: "sqrtPriceLimitX96",
                  type: "uint160",
                  internalType: "uint160",
                },
              ],
            },
            {
              type: "error",
              name: "ProtocolFeeCannotBeFetched",
              inputs: [],
            },
            {
              type: "error",
              name: "SwapAmountCannotBeZero",
              inputs: [],
            },
            {
              type: "error",
              name: "TickLiquidityOverflow",
              inputs: [
                {
                  name: "tick",
                  type: "int24",
                  internalType: "int24",
                },
              ],
            },
            {
              type: "error",
              name: "TickLowerOutOfBounds",
              inputs: [
                {
                  name: "tickLower",
                  type: "int24",
                  internalType: "int24",
                },
              ],
            },
            {
              type: "error",
              name: "TickMisaligned",
              inputs: [
                {
                  name: "tick",
                  type: "int24",
                  internalType: "int24",
                },
                {
                  name: "tickSpacing",
                  type: "int24",
                  internalType: "int24",
                },
              ],
            },
            {
              type: "error",
              name: "TickSpacingTooLarge",
              inputs: [],
            },
            {
              type: "error",
              name: "TickSpacingTooSmall",
              inputs: [],
            },
            {
              type: "error",
              name: "TickUpperOutOfBounds",
              inputs: [
                {
                  name: "tickUpper",
                  type: "int24",
                  internalType: "int24",
                },
              ],
            },
            {
              type: "error",
              name: "TicksMisordered",
              inputs: [
                {
                  name: "tickLower",
                  type: "int24",
                  internalType: "int24",
                },
                {
                  name: "tickUpper",
                  type: "int24",
                  internalType: "int24",
                },
              ],
            },
          ],
        },
        UniversalHookFactory: {
          address: "0x5fc8d32690cc91d4c39d9d3abcbd16989f875707",
          abi: [
            {
              type: "constructor",
              inputs: [
                {
                  name: "_manager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "deploy",
              inputs: [
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "contractDeployed",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "getBulkPrecomputeHookAddresses",
              inputs: [
                {
                  name: "startNonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "endNonce",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "addresses",
                  type: "address[]",
                  internalType: "address[]",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getPrecomputedHookAddress",
              inputs: [
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "manager",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "owner",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "renounceOwnership",
              inputs: [],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "transferOwnership",
              inputs: [
                {
                  name: "newOwner",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "usedNonces",
              inputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "event",
              name: "HookCreated",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  indexed: false,
                  internalType: "address",
                },
                {
                  name: "hookAddr",
                  type: "address",
                  indexed: false,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "OwnershipTransferred",
              inputs: [
                {
                  name: "previousOwner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "newOwner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
          ],
        },
        Router04: {
          address: "0x0165878a594ca255338adfa4d48449f69242eb8f",
          abi: [
            {
              type: "constructor",
              inputs: [
                {
                  name: "_manager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "lockAcquired",
              inputs: [
                {
                  name: "data",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "lockAcquiredModifyPosition",
              inputs: [
                {
                  name: "data",
                  type: "tuple",
                  internalType: "struct Router04.CallbackDataModifyPosition",
                  components: [
                    {
                      name: "sender",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "key",
                      type: "tuple",
                      internalType: "struct PoolKey",
                      components: [
                        {
                          name: "currency0",
                          type: "address",
                          internalType: "Currency",
                        },
                        {
                          name: "currency1",
                          type: "address",
                          internalType: "Currency",
                        },
                        {
                          name: "fee",
                          type: "uint24",
                          internalType: "uint24",
                        },
                        {
                          name: "tickSpacing",
                          type: "int24",
                          internalType: "int24",
                        },
                        {
                          name: "hooks",
                          type: "address",
                          internalType: "contract IHooks",
                        },
                      ],
                    },
                    {
                      name: "params",
                      type: "tuple",
                      internalType: "struct IPoolManager.ModifyPositionParams",
                      components: [
                        {
                          name: "tickLower",
                          type: "int24",
                          internalType: "int24",
                        },
                        {
                          name: "tickUpper",
                          type: "int24",
                          internalType: "int24",
                        },
                        {
                          name: "liquidityDelta",
                          type: "int256",
                          internalType: "int256",
                        },
                      ],
                    },
                  ],
                },
              ],
              outputs: [
                {
                  name: "delta",
                  type: "int256",
                  internalType: "BalanceDelta",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "lockAcquiredSwap",
              inputs: [
                {
                  name: "data",
                  type: "tuple",
                  internalType: "struct Router04.CallbackDataSwap",
                  components: [
                    {
                      name: "sender",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "key",
                      type: "tuple",
                      internalType: "struct PoolKey",
                      components: [
                        {
                          name: "currency0",
                          type: "address",
                          internalType: "Currency",
                        },
                        {
                          name: "currency1",
                          type: "address",
                          internalType: "Currency",
                        },
                        {
                          name: "fee",
                          type: "uint24",
                          internalType: "uint24",
                        },
                        {
                          name: "tickSpacing",
                          type: "int24",
                          internalType: "int24",
                        },
                        {
                          name: "hooks",
                          type: "address",
                          internalType: "contract IHooks",
                        },
                      ],
                    },
                    {
                      name: "params",
                      type: "tuple",
                      internalType: "struct IPoolManager.SwapParams",
                      components: [
                        {
                          name: "zeroForOne",
                          type: "bool",
                          internalType: "bool",
                        },
                        {
                          name: "amountSpecified",
                          type: "int256",
                          internalType: "int256",
                        },
                        {
                          name: "sqrtPriceLimitX96",
                          type: "uint160",
                          internalType: "uint160",
                        },
                      ],
                    },
                  ],
                },
              ],
              outputs: [
                {
                  name: "delta",
                  type: "int256",
                  internalType: "BalanceDelta",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "manager",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "modifyPosition",
              inputs: [
                {
                  name: "key",
                  type: "tuple",
                  internalType: "struct PoolKey",
                  components: [
                    {
                      name: "currency0",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "currency1",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "fee",
                      type: "uint24",
                      internalType: "uint24",
                    },
                    {
                      name: "tickSpacing",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "hooks",
                      type: "address",
                      internalType: "contract IHooks",
                    },
                  ],
                },
                {
                  name: "params",
                  type: "tuple",
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  components: [
                    {
                      name: "tickLower",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "tickUpper",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "liquidityDelta",
                      type: "int256",
                      internalType: "int256",
                    },
                  ],
                },
              ],
              outputs: [
                {
                  name: "delta",
                  type: "int256",
                  internalType: "BalanceDelta",
                },
              ],
              stateMutability: "payable",
            },
            {
              type: "function",
              name: "swap",
              inputs: [
                {
                  name: "key",
                  type: "tuple",
                  internalType: "struct PoolKey",
                  components: [
                    {
                      name: "currency0",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "currency1",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "fee",
                      type: "uint24",
                      internalType: "uint24",
                    },
                    {
                      name: "tickSpacing",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "hooks",
                      type: "address",
                      internalType: "contract IHooks",
                    },
                  ],
                },
                {
                  name: "params",
                  type: "tuple",
                  internalType: "struct IPoolManager.SwapParams",
                  components: [
                    {
                      name: "zeroForOne",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "amountSpecified",
                      type: "int256",
                      internalType: "int256",
                    },
                    {
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                      internalType: "uint160",
                    },
                  ],
                },
              ],
              outputs: [
                {
                  name: "delta",
                  type: "int256",
                  internalType: "BalanceDelta",
                },
              ],
              stateMutability: "payable",
            },
            {
              type: "error",
              name: "ERC20TransferFailed",
              inputs: [],
            },
            {
              type: "error",
              name: "LockFailure",
              inputs: [],
            },
            {
              type: "error",
              name: "NativeTransferFailed",
              inputs: [],
            },
          ],
        },
        UniversalHook: {
          address: "0xa513e6e4b8f2a923d98304ec87f64353c4d5c853",
          abi: [
            {
              type: "constructor",
              inputs: [
                {
                  name: "_manager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "addTradingVolumeDiscountThresholds",
              inputs: [
                {
                  name: "_tradingVolumeDiscountThreshold",
                  type: "tuple",
                  internalType:
                    "struct IUniversalHook.TradingVolumeDiscountThreshold",
                  components: [
                    {
                      name: "volume",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "discountPts",
                      type: "uint8",
                      internalType: "uint8",
                    },
                  ],
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "afterDonate",
              inputs: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "key",
                  type: "tuple",
                  internalType: "struct PoolKey",
                  components: [
                    {
                      name: "currency0",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "currency1",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "fee",
                      type: "uint24",
                      internalType: "uint24",
                    },
                    {
                      name: "tickSpacing",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "hooks",
                      type: "address",
                      internalType: "contract IHooks",
                    },
                  ],
                },
                {
                  name: "amount0",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "amount1",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "hookData",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bytes4",
                  internalType: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "afterInitialize",
              inputs: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "key",
                  type: "tuple",
                  internalType: "struct PoolKey",
                  components: [
                    {
                      name: "currency0",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "currency1",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "fee",
                      type: "uint24",
                      internalType: "uint24",
                    },
                    {
                      name: "tickSpacing",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "hooks",
                      type: "address",
                      internalType: "contract IHooks",
                    },
                  ],
                },
                {
                  name: "sqrtPriceX96",
                  type: "uint160",
                  internalType: "uint160",
                },
                {
                  name: "tick",
                  type: "int24",
                  internalType: "int24",
                },
                {
                  name: "hookData",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bytes4",
                  internalType: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "afterModifyPosition",
              inputs: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "key",
                  type: "tuple",
                  internalType: "struct PoolKey",
                  components: [
                    {
                      name: "currency0",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "currency1",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "fee",
                      type: "uint24",
                      internalType: "uint24",
                    },
                    {
                      name: "tickSpacing",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "hooks",
                      type: "address",
                      internalType: "contract IHooks",
                    },
                  ],
                },
                {
                  name: "params",
                  type: "tuple",
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  components: [
                    {
                      name: "tickLower",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "tickUpper",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "liquidityDelta",
                      type: "int256",
                      internalType: "int256",
                    },
                  ],
                },
                {
                  name: "delta",
                  type: "int256",
                  internalType: "BalanceDelta",
                },
                {
                  name: "hookData",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bytes4",
                  internalType: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "afterSwap",
              inputs: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "key",
                  type: "tuple",
                  internalType: "struct PoolKey",
                  components: [
                    {
                      name: "currency0",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "currency1",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "fee",
                      type: "uint24",
                      internalType: "uint24",
                    },
                    {
                      name: "tickSpacing",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "hooks",
                      type: "address",
                      internalType: "contract IHooks",
                    },
                  ],
                },
                {
                  name: "params",
                  type: "tuple",
                  internalType: "struct IPoolManager.SwapParams",
                  components: [
                    {
                      name: "zeroForOne",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "amountSpecified",
                      type: "int256",
                      internalType: "int256",
                    },
                    {
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                      internalType: "uint160",
                    },
                  ],
                },
                {
                  name: "delta",
                  type: "int256",
                  internalType: "BalanceDelta",
                },
                {
                  name: "hookData",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bytes4",
                  internalType: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "beforeDonate",
              inputs: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "key",
                  type: "tuple",
                  internalType: "struct PoolKey",
                  components: [
                    {
                      name: "currency0",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "currency1",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "fee",
                      type: "uint24",
                      internalType: "uint24",
                    },
                    {
                      name: "tickSpacing",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "hooks",
                      type: "address",
                      internalType: "contract IHooks",
                    },
                  ],
                },
                {
                  name: "amount0",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "amount1",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "hookData",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bytes4",
                  internalType: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "beforeInitialize",
              inputs: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "key",
                  type: "tuple",
                  internalType: "struct PoolKey",
                  components: [
                    {
                      name: "currency0",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "currency1",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "fee",
                      type: "uint24",
                      internalType: "uint24",
                    },
                    {
                      name: "tickSpacing",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "hooks",
                      type: "address",
                      internalType: "contract IHooks",
                    },
                  ],
                },
                {
                  name: "sqrtPriceX96",
                  type: "uint160",
                  internalType: "uint160",
                },
                {
                  name: "hookData",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bytes4",
                  internalType: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "beforeModifyPosition",
              inputs: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "key",
                  type: "tuple",
                  internalType: "struct PoolKey",
                  components: [
                    {
                      name: "currency0",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "currency1",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "fee",
                      type: "uint24",
                      internalType: "uint24",
                    },
                    {
                      name: "tickSpacing",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "hooks",
                      type: "address",
                      internalType: "contract IHooks",
                    },
                  ],
                },
                {
                  name: "params",
                  type: "tuple",
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  components: [
                    {
                      name: "tickLower",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "tickUpper",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "liquidityDelta",
                      type: "int256",
                      internalType: "int256",
                    },
                  ],
                },
                {
                  name: "hookData",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bytes4",
                  internalType: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "beforeSwap",
              inputs: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "key",
                  type: "tuple",
                  internalType: "struct PoolKey",
                  components: [
                    {
                      name: "currency0",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "currency1",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "fee",
                      type: "uint24",
                      internalType: "uint24",
                    },
                    {
                      name: "tickSpacing",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "hooks",
                      type: "address",
                      internalType: "contract IHooks",
                    },
                  ],
                },
                {
                  name: "params",
                  type: "tuple",
                  internalType: "struct IPoolManager.SwapParams",
                  components: [
                    {
                      name: "zeroForOne",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "amountSpecified",
                      type: "int256",
                      internalType: "int256",
                    },
                    {
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                      internalType: "uint160",
                    },
                  ],
                },
                {
                  name: "hookData",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bytes4",
                  internalType: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "clearTradingVolumeDiscountThresholds",
              inputs: [],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "day_of_the_week_before_swap",
              inputs: [
                {
                  name: "data",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getFee",
              inputs: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "key",
                  type: "tuple",
                  internalType: "struct PoolKey",
                  components: [
                    {
                      name: "currency0",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "currency1",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "fee",
                      type: "uint24",
                      internalType: "uint24",
                    },
                    {
                      name: "tickSpacing",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "hooks",
                      type: "address",
                      internalType: "contract IHooks",
                    },
                  ],
                },
                {
                  name: "params",
                  type: "tuple",
                  internalType: "struct IPoolManager.SwapParams",
                  components: [
                    {
                      name: "zeroForOne",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "amountSpecified",
                      type: "int256",
                      internalType: "int256",
                    },
                    {
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                      internalType: "uint160",
                    },
                  ],
                },
                {
                  name: "data",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [
                {
                  name: "fee",
                  type: "uint24",
                  internalType: "uint24",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "getHookFees",
              inputs: [
                {
                  name: "key",
                  type: "tuple",
                  internalType: "struct PoolKey",
                  components: [
                    {
                      name: "currency0",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "currency1",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "fee",
                      type: "uint24",
                      internalType: "uint24",
                    },
                    {
                      name: "tickSpacing",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "hooks",
                      type: "address",
                      internalType: "contract IHooks",
                    },
                  ],
                },
              ],
              outputs: [
                {
                  name: "hookFee",
                  type: "uint24",
                  internalType: "uint24",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getUserTradingVolumeByPool",
              inputs: [
                {
                  name: "user",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "poolId",
                  type: "bytes32",
                  internalType: "PoolId",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "manager",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "not_blacklisted_before_initialize",
              inputs: [
                {
                  name: "data",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "only_owner_before_initialize",
              inputs: [
                {
                  name: "data",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "owner",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "renounceOwnership",
              inputs: [],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setAllowedDaysOfTheWeek",
              inputs: [
                {
                  name: "allowedDaysOfTheWeek",
                  type: "bool[8]",
                  internalType: "bool[8]",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setBlacklistedForAction",
              inputs: [
                {
                  name: "user",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "action",
                  type: "uint8",
                  internalType: "enum IUniversalHook.Action",
                },
                {
                  name: "blacklisted",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setFunctionsForAction",
              inputs: [
                {
                  name: "action",
                  type: "uint8",
                  internalType: "enum IUniversalHook.Action",
                },
                {
                  name: "functions",
                  type: "bytes4[]",
                  internalType: "bytes4[]",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setHookFee",
              inputs: [
                {
                  name: "hookFee",
                  type: "uint24",
                  internalType: "uint24",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setHookFeeForPool",
              inputs: [
                {
                  name: "key",
                  type: "tuple",
                  internalType: "struct PoolKey",
                  components: [
                    {
                      name: "currency0",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "currency1",
                      type: "address",
                      internalType: "Currency",
                    },
                    {
                      name: "fee",
                      type: "uint24",
                      internalType: "uint24",
                    },
                    {
                      name: "tickSpacing",
                      type: "int24",
                      internalType: "int24",
                    },
                    {
                      name: "hooks",
                      type: "address",
                      internalType: "contract IHooks",
                    },
                  ],
                },
                {
                  name: "hookFee",
                  type: "uint24",
                  internalType: "uint24",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setTradingHours",
              inputs: [
                {
                  name: "_tradingHoursStart",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "_tradingHoursEnd",
                  type: "uint8",
                  internalType: "uint8",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setWhitelistedForAction",
              inputs: [
                {
                  name: "user",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "action",
                  type: "uint8",
                  internalType: "enum IUniversalHook.Action",
                },
                {
                  name: "whitelisted",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "trading_hours_before_Swap",
              inputs: [
                {
                  name: "data",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "transferOwnership",
              inputs: [
                {
                  name: "newOwner",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "user_trading_volume_dynamic_fee",
              inputs: [
                {
                  name: "data",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint8",
                  internalType: "uint8",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "whitelist_before_initialize",
              inputs: [
                {
                  name: "data",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "whitelist_swap",
              inputs: [
                {
                  name: "data",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [],
              stateMutability: "view",
            },
            {
              type: "event",
              name: "OwnershipTransferred",
              inputs: [
                {
                  name: "previousOwner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "newOwner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "error",
              name: "FunctionFailed",
              inputs: [
                {
                  name: "",
                  type: "bytes4",
                  internalType: "bytes4",
                },
                {
                  name: "",
                  type: "uint8",
                  internalType: "enum IUniversalHook.Action",
                },
              ],
            },
            {
              type: "error",
              name: "InvalidFee",
              inputs: [
                {
                  name: "",
                  type: "uint24",
                  internalType: "uint24",
                },
              ],
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
