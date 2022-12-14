/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { BoxV2, BoxV2Interface } from "../../contracts/BoxV2";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "ValueChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102a7806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632e64cec11461005157806354fd4d501461006f5780636057361d1461008d578063d09de08a146100a9575b600080fd5b6100596100b3565b60405161006691906101ab565b60405180910390f35b6100776100bc565b60405161008491906101ab565b60405180910390f35b6100a760048036038101906100a2919061016f565b6100c5565b005b6100b1610106565b005b60008054905090565b60006002905090565b806000819055507f93fe6d397c74fdf1402a8b72e47b68512f0510d7b98a4bc4cbdf6ac7108b3c59816040516100fb91906101ab565b60405180910390a150565b600160008082825461011891906101c6565b925050819055507f93fe6d397c74fdf1402a8b72e47b68512f0510d7b98a4bc4cbdf6ac7108b3c5960005460405161015091906101ab565b60405180910390a1565b6000813590506101698161025a565b92915050565b60006020828403121561018557610184610255565b5b60006101938482850161015a565b91505092915050565b6101a58161021c565b82525050565b60006020820190506101c0600083018461019c565b92915050565b60006101d18261021c565b91506101dc8361021c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561021157610210610226565b5b828201905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600080fd5b6102638161021c565b811461026e57600080fd5b5056fea2646970667358221220d12a0d8e5fa3164036b5984dd47916bea48957b6d39e01093a6b05fa7834d8fa64736f6c63430008070033";

type BoxV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoxV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BoxV2__factory extends ContractFactory {
  constructor(...args: BoxV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BoxV2> {
    return super.deploy(overrides || {}) as Promise<BoxV2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BoxV2 {
    return super.attach(address) as BoxV2;
  }
  override connect(signer: Signer): BoxV2__factory {
    return super.connect(signer) as BoxV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoxV2Interface {
    return new utils.Interface(_abi) as BoxV2Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): BoxV2 {
    return new Contract(address, _abi, signerOrProvider) as BoxV2;
  }
}
