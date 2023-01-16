// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract One is ERC20 {
    constructor() ERC20("ONE", "One Token") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }
}