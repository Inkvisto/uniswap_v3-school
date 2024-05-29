// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;

import {IPoolManager} from "./v4-core/interfaces/IPoolManager.sol";
import {UniversalHook} from "./UniversalHook.sol";
import {Ownable} from "openzeppelin-contracts/access/Ownable.sol";
import {EnumerableSet} from "openzeppelin-contracts/utils/structs/EnumerableSet.sol";

interface IOwnable {
    function transferOwnership(address newOwner) external;
}

contract UniversalHookFactory is Ownable {
    event HookCreated(address owner, address hookAddr);

    IPoolManager public immutable manager;
    mapping(uint256 => bool) public usedNonces;
    uint256 lastNonce;

    using EnumerableSet for EnumerableSet.Bytes32Set;

    constructor(IPoolManager _manager) {
        manager = _manager;
    }

    // use next available salt
    function deploy(uint256 nonce) external returns (address contractDeployed) {
        require(!usedNonces[nonce], "Salt has already been used");
        address precomputedAddr = getPrecomputedHookAddress(nonce);
        require(bytes1(bytes20(precomputedAddr)) == 0xff, "Invalid address");
        usedNonces[nonce] = true;
        lastNonce = uint256(nonce);
        contractDeployed = address(
            new UniversalHook{salt: bytes32(nonce)}(manager)
        );
        IOwnable(contractDeployed).transferOwnership(msg.sender);
        emit HookCreated(msg.sender, contractDeployed);
    }

    function getBulkPrecomputeHookAddresses(
        uint256 startNonce,
        uint256 endNonce
    ) external view returns (address[] memory addresses) {
        addresses = new address[](endNonce - startNonce);
        for (uint256 i = startNonce; i < endNonce; i++) {
            addresses[i - startNonce] = getPrecomputedHookAddress(i);
        }
    }

    function getPrecomputedHookAddress(
        uint256 nonce
    ) public view returns (address) {
        bytes32 bytecodeHash = keccak256(
            abi.encodePacked(
                type(UniversalHook).creationCode,
                abi.encode(manager)
            )
        );
        bytes32 hash = keccak256(
            abi.encodePacked(
                bytes1(0xff),
                address(this),
                bytes32(nonce),
                bytecodeHash
            )
        );
        return address(uint160(uint256(hash)));
    }
}
