//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract TimelockControl is TimelockController {
    //minDelay: How long you have to wait before executing
    //proposers: array of addresses that can propose
    //executors: who can execute when a proposer passes
    //admin: optional account to be granted admin role; disable with zero address

    constructor(
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors,
        address admin
    ) TimelockController(minDelay, proposers, executors, admin) {}
}
