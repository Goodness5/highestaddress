// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


interface IERC20 {
    // mapping(address => uint) public balances;
    function balanceOf(address account) external view returns (uint256);

     function gettotalSupply() external returns (uint);
}
contract gethigestholder {

    IERC20 usdt;
    address[] holders;
    constructor() {
        usdt = IERC20(0xdAC17F958D2ee523a2206206994597C13D831ec7);
    }

     function getHighestHolder(address tokenAddress) public view returns (address) {
        IERC20 token = IERC20(tokenAddress);
        uint256 highestBalance = 0;
        address highestHolder;
        for (uint256 i = 0; i < token.totalSupply(); i++) {
            address holder = token.ownerOf(i);
            uint256 balance = token.balanceOf(holder);
            if (balance > highestBalance) {
                highestBalance = balance;
                highestHolder = holder;
            }
        }
        return highestHolder;
    }
        
  function balanceOf(address account) external view returns (uint256 _balance){
    return _balance;
  }


}