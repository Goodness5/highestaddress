// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.17;
interface IERC20 {
    // mapping(address => uint) public balances;

     function totalSupply() external view returns (uint);
      function balanceOf(address _owner) external returns (uint balance);
}