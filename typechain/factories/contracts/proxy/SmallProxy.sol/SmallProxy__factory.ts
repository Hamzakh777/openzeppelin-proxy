/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SmallProxy,
  SmallProxyInterface,
} from "../../../../contracts/proxy/SmallProxy.sol/SmallProxy";

const _abi = [
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "getDataToTransact",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "readStorage",
    outputs: [
      {
        internalType: "uint256",
        name: "valueAtStorageSlotZero",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "setImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610421806100206000396000f3fe6080604052600436106100385760003560e01c806331fadddf14610051578063d784d4261461007c578063df31349e146100a557610047565b36610047576100456100e2565b005b61004f6100e2565b005b34801561005d57600080fd5b506100666100fc565b6040516100739190610301565b60405180910390f35b34801561008857600080fd5b506100a3600480360381019061009e919061023d565b610105565b005b3480156100b157600080fd5b506100cc60048036038101906100c7919061026a565b61012b565b6040516100d991906102df565b60405180910390f35b6100ea6101c2565b6100fa6100f56101c4565b6101ed565b565b60008054905090565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5550565b60608160405160240161013e9190610301565b6040516020818303038152906040527f55241077000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050919050565b565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54905090565b3660008037600080366000845af43d6000803e806000811461020e573d6000f35b3d6000fd5b600081359050610222816103bd565b92915050565b600081359050610237816103d4565b92915050565b600060208284031215610253576102526103a7565b5b600061026184828501610213565b91505092915050565b6000602082840312156102805761027f6103a7565b5b600061028e84828501610228565b91505092915050565b60006102a28261031c565b6102ac8185610327565b93506102bc818560208601610374565b6102c5816103ac565b840191505092915050565b6102d98161036a565b82525050565b600060208201905081810360008301526102f98184610297565b905092915050565b600060208201905061031660008301846102d0565b92915050565b600081519050919050565b600082825260208201905092915050565b60006103438261034a565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015610392578082015181840152602081019050610377565b838111156103a1576000848401525b50505050565b600080fd5b6000601f19601f8301169050919050565b6103c681610338565b81146103d157600080fd5b50565b6103dd8161036a565b81146103e857600080fd5b5056fea264697066735822122001a3f83b1abfb28b099da10e45357fbe58682d34e299f254c5dc6b2e764da16b64736f6c63430008070033";

type SmallProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SmallProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SmallProxy__factory extends ContractFactory {
  constructor(...args: SmallProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SmallProxy> {
    return super.deploy(overrides || {}) as Promise<SmallProxy>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SmallProxy {
    return super.attach(address) as SmallProxy;
  }
  override connect(signer: Signer): SmallProxy__factory {
    return super.connect(signer) as SmallProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SmallProxyInterface {
    return new utils.Interface(_abi) as SmallProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SmallProxy {
    return new Contract(address, _abi, signerOrProvider) as SmallProxy;
  }
}
