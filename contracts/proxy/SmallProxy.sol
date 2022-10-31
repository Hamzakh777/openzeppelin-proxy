// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/proxy/Proxy.sol";

contract SmallProxy is Proxy {
  // This is the keccak-256 hash of "eip1967.proxy.implementation" subtracted by 1
  bytes32 private constant _IMPLEMENTATION_SLOT =
    0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;

  function setImplementation(address newImplementation) external {
    assembly {
      sstore(_IMPLEMENTATION_SLOT, newImplementation)
    }
  }

  function _implementation() internal view override returns(address implementationAddress) {
    assembly {
      implementationAddress := sload(_IMPLEMENTATION_SLOT)
    }
  }

  function getDataToTransact(uint256 value) public pure returns(bytes memory) {
    return abi.encodeWithSignature("setValue(uint256)", value);
  }

  function readStorage() public view returns(uint256 valueAtStorageSlotZero) {
    assembly {
      valueAtStorageSlotZero := sload(0);
    }
  }
}

// SmallProxy -> ImplementationA

contract ImplementationA {
  uint256 public value;

  setValue(uin256 newValue) public {
    value = newValue;
  }
}

contract ImplementationB {
  uint256 public value;

  setValue(uint256 newValue) public {
    value = newValue + 1;
  }

  // singature clashes => means we can have the same 
  // function signature on both the proxy and implementation.
  // Transaparant Proxies and UUPS solve this problem
  // Ex:
  // function setImplementation() {

  // }
}