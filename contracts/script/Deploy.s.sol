// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

// WORKING CODE

import "./DeployHelpers.s.sol";
import {PoolManager, IPoolManager} from "../contracts/v4-core/PoolManager.sol";
import {CurrencyLibrary, Currency} from "../contracts/v4-core/types/Currency.sol";
import {UniversalHookFactory} from "../contracts/UniversalHookFactory.sol";
import {Router04} from "../contracts/Router04.sol";
import {UniversalHook} from "../contracts/UniversalHook.sol";
import {MockERC20} from "../test/utils/MockERC20.sol";
import {PoolKey} from "../contracts/v4-core/types/PoolKey.sol";
import {PoolId, PoolIdLibrary} from "../contracts/v4-core/types/PoolId.sol";
import {IHooks} from "../contracts/v4-core/interfaces/IHooks.sol";


contract DeployScript is ScaffoldETHDeploy {
      using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;
    error InvalidPrivateKey(string);

    MockERC20 token0;
    MockERC20 token1;
    MockERC20 token2;
    PoolManager manager;
    Router04 router;
    UniversalHookFactory hookFactory;
    UniversalHook sampleHook;

     PoolKey key;
    PoolId id;

    address secondTestWallet =
        address(0x51f9B9fcBDCb13029779bcaA3fbb34adCcf04BCC);

    uint160 public constant SQRT_RATIO_1_1 = 79228162514264337593543950336;

    function run() external {
        uint256 deployerPrivateKey = setupLocalhostEnv();
        if (deployerPrivateKey == 0) {
            revert InvalidPrivateKey(
                "You don't have a deployer account. Make sure you have set DEPLOYER_PRIVATE_KEY in .env or use `yarn generate` to generate a new random account"
            );
        }

        vm.startBroadcast(deployerPrivateKey);

        string[] memory tokenNames = new string[](3);
        tokenNames[0] = "TESTA";
        tokenNames[1] = "TESTB";
        tokenNames[2] = "TESTC";

        MockERC20[] memory deployedTokens = deployTokens(tokenNames);

        token0 = deployedTokens[0];
        token1 = deployedTokens[1];
        token2 = deployedTokens[2];

        deployments.push(Deployment(token0.name(), address(token0)));
        deployments.push(Deployment(token1.name(), address(token1)));
        deployments.push(Deployment(token2.name(), address(token2)));

        // deploy manager
        manager = new PoolManager(500000);

        console.log("PoolManager address:", address(manager));

         key = PoolKey(Currency.wrap(address(token0)), Currency.wrap(address(token1)), 3000, 2, IHooks(address(0)));
        id = key.toId();

       console.logString("KEYYY");
        console.logBytes32(PoolId.unwrap(id));

        manager.initialize(key, SQRT_RATIO_1_1, bytes(""));

        // deploy hook factory
        UniversalHookFactory hookFactory = new UniversalHookFactory(
            PoolManager(manager)
        );

        // deploy router
        router = new Router04(manager);

        console.log("Router04 address:", address(router));

        // deploy sample hook
        sampleHook = new UniversalHook(PoolManager(payable(address(0))));

        // mint tokens
        token0.mint(vm.addr(deployerPrivateKey), 100000 ether);
        token0.mint(secondTestWallet, 100000 ether);
        token1.mint(vm.addr(deployerPrivateKey), 100000 ether);
        token1.mint(secondTestWallet, 100000 ether);

          token0.approve(address(router), type(uint256).max);
        token1.approve(address(router), type(uint256).max);

        vm.stopBroadcast();
        exportDeployments();
    }

    function deployTokens(
        string[] memory tokenNames
    ) public returns (MockERC20[] memory) {
        MockERC20[] memory tokens = new MockERC20[](tokenNames.length);
        for (uint256 i = 0; i < tokenNames.length; i++) {
            tokens[i] = new MockERC20(
                tokenNames[i],
                tokenNames[i],
                18,
                100000 ether
            );
        }
        return tokens;
    }

    function test() public {}
}
