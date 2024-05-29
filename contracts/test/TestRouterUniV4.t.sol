// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {TokenFixture} from "./utils/TokenFixture.sol";
import {PoolManager, IPoolManager} from "../contracts/v4-core/PoolManager.sol";
import {TestERC20} from "../contracts/v4-core/test/TestERC20.sol";
import {CurrencyLibrary, Currency} from "../contracts/v4-core/types/Currency.sol";
import {PoolKey} from "../contracts/v4-core/types/PoolKey.sol";
import {PoolId, PoolIdLibrary} from "../contracts/v4-core/types/PoolId.sol";
import {IHooks} from "../contracts/v4-core/interfaces/IHooks.sol";
import {Router04} from "../contracts/Router04.sol";
import {TickMath} from "v4-core/libraries/TickMath.sol";

contract TestRouterUniV4 is Test, TokenFixture {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    uint160 public constant SQRT_RATIO_1_1 = 79228162514264337593543950336;
    uint160 public constant SQRT_RATIO_1_2 = 56022770974786139918731938227;
    uint160 public constant SQRT_RATIO_1_4 = 39614081257132168796771975168;
    uint160 public constant SQRT_RATIO_2_1 = 112045541949572279837463876454;
    uint160 public constant SQRT_RATIO_4_1 = 158456325028528675187087900672;

    TestERC20 token0;
    TestERC20 token1;
    PoolManager manager;

    PoolKey key;
    PoolId id;

    Router04 router;

    address account1 = vm.addr(2);
    address account2 = vm.addr(3);

    function setUp() public {
        initializeTokens();

        token0 = TestERC20(Currency.unwrap(currency0));
        token1 = TestERC20(Currency.unwrap(currency1));

        token0.mint(account2, 1000 ether);
        token1.mint(account2, 1000 ether);
        token0.mint(account1, 1000 ether);
        token1.mint(account1, 1000 ether);

        manager = new PoolManager(500000);

        uint24 fee = 3000 | 0x800000;

        console.logString("printing fee");
        console.logBytes(abi.encodePacked(fee));

        key = PoolKey(currency0, currency1, 3000, 2, IHooks(address(0)));
        id = key.toId();

        manager.initialize(key, SQRT_RATIO_1_1, bytes(""));

        router = new Router04(manager);

        token0.approve(address(router), type(uint256).max);
        token1.approve(address(router), type(uint256).max);
    }

    function testModifyPosition() public {
        console.log("trying to modify position");
        console.log("balance of this contract");
        console.logUint(token0.balanceOf(address(this)));
        console.logUint(token1.balanceOf(address(this)));
        console.log("balance of manager");
        console.logUint(token0.balanceOf(address(manager)));
        console.logUint(token1.balanceOf(address(manager)));

        printSlot0();

        router.modifyPosition(key, IPoolManager.ModifyPositionParams(-100000, 100000, 100 ether));
        printSlot0();

        console.log("balance of manager");
        console.logUint(token0.balanceOf(address(manager)));
        console.logUint(token1.balanceOf(address(manager)));

        // vm.startPrank(account2);
        // token0.approve(address(router), type(uint256).max);
        // token1.approve(address(router), type(uint256).max);
        // router.modifyPosition(
        //     key,
        //     IPoolManager.ModifyPositionParams(-10, 10, 100 ether)
        // );

        // vm.stopPrank();

        console.logString("balances");
        uint256 balance0 = token0.balanceOf(account1);
        uint256 balance1 = token1.balanceOf(account1);
        console.logUint(balance0);
        console.logUint(balance1);
        uint160 sqrtPriceLimit = TickMath.getSqrtRatioAtTick(-1000);
        vm.startPrank(account1);
        token0.approve(address(router), type(uint256).max);
        router.swap(key, IPoolManager.SwapParams(true, 1000 ether, sqrtPriceLimit));
        console.logString("balances");

        console.logUint(balance0 - token0.balanceOf(account1));
        console.logUint(token1.balanceOf(account1) - balance1);

        // balance0 = token0.balanceOf(account1);
        // balance1 = token1.balanceOf(account1);

        // printSlot0();
        // sqrtPriceLimit = TickMath.getSqrtRatioAtTick(-100);
        // // perform another swap
        // router.swap(key, IPoolManager.SwapParams(true, 10 ether, sqrtPriceLimit));
        // console.logString("balances");
        // console.logUint(balance0 - token0.balanceOf(account1));
        // console.logUint(token1.balanceOf(account1) - balance1);
        printSlot0();
    }

    // 4987272070749096134
    // 4876819758127888900
    function testFirst() public {
        // router.swap(
        //     key,
        //     IPoolManager.SwapParams(
        //         false,
        //         1e18,
        //         TickMath.getSqrtRatioAtTick(60)
        //     )
        // );
    }

    function printSlot0() internal {
        (uint160 sqrtPriceX96, int24 tick, uint24 protocolFees, uint24 hookFees) = manager.getSlot0(id);

        console.log("variables of this pool");
        console.logUint(sqrtPriceX96);
        console.logInt(tick);
        console.logUint(protocolFees);
        console.logUint(hookFees);
    }
}
