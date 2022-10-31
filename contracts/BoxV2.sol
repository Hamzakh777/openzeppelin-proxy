// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract BoxV2 {
  uint256 internal value;

  event ValueChanged(uint256 newValue);

  function store(uint256 newValue) external {
    value = newValue;
    emit ValueChanged(newValue);
  }  

  function increment() external {
    value += 1;
    emit ValueChanged(value);
  }

  function retrieve() public view returns(uint256) {
    return value;
  }

  function version() public pure returns(uint256) {
    return 2;
  }
}