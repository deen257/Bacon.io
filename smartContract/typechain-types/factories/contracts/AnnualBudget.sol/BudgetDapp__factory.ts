/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  BudgetDapp,
  BudgetDappInterface,
} from "../../../contracts/AnnualBudget.sol/BudgetDapp";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_maticContractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_unLockTime",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "amountEqualZero",
    type: "error",
  },
  {
    inputs: [],
    name: "notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "notYetTime",
    type: "error",
  },
  {
    inputs: [],
    name: "transferFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "ID",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "created",
        type: "bool",
      },
    ],
    name: "BudgetCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "ID",
        type: "uint256",
      },
    ],
    name: "ItemRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Budgets",
    outputs: [
      {
        internalType: "uint256",
        name: "ID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maticAmount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "item",
        type: "string",
      },
      {
        internalType: "bool",
        name: "created",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "balance",
    outputs: [
      {
        internalType: "uint256",
        name: "contractBalance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "budgetCount",
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
        internalType: "string",
        name: "_item",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_maticAmount",
        type: "uint256",
      },
    ],
    name: "createBudget",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositBudgetFund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialBudgetFunds",
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
        name: "_ID",
        type: "uint256",
      },
    ],
    name: "listItem",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "ID",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maticAmount",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "item",
            type: "string",
          },
          {
            internalType: "bool",
            name: "created",
            type: "bool",
          },
        ],
        internalType: "struct BudgetDapp.budgetItems",
        name: "value",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maticContractAddress",
    outputs: [
      {
        internalType: "contract ERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "myList",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "ID",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maticAmount",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "item",
            type: "string",
          },
          {
            internalType: "bool",
            name: "created",
            type: "bool",
          },
        ],
        internalType: "struct BudgetDapp.budgetItems[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ID",
        type: "uint256",
      },
    ],
    name: "removeItems",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockTime",
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
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006001553480156200001657600080fd5b50604051620021133803806200211383398181016040528101906200003c9190620001b7565b80421062000081576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000078906200025f565b60405180910390fd5b8060008190555081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000281565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001448262000117565b9050919050565b620001568162000137565b81146200016257600080fd5b50565b60008151905062000176816200014b565b92915050565b6000819050919050565b62000191816200017c565b81146200019d57600080fd5b50565b600081519050620001b18162000186565b92915050565b60008060408385031215620001d157620001d062000112565b5b6000620001e18582860162000165565b9250506020620001f485828601620001a0565b9150509250929050565b600082825260208201905092915050565b7f4e6f7420596574204368726973746d6173000000000000000000000000000000600082015250565b600062000247601183620001fe565b915062000254826200020f565b602082019050919050565b600060208201905081810360008301526200027a8162000238565b9050919050565b611e8280620002916000396000f3fe6080604052600436106100c25760003560e01c80638da5cb5b1161007f578063a11ad09711610059578063a11ad09714610239578063b69ef8a814610262578063d98591441461028d578063da14bde3146102cd576100c2565b80638da5cb5b146101b85780639cd7756f146101e35780639f02f1071461020e576100c2565b80630a3e6fc2146100c7578063251c1aa3146100f25780632ce381901461011d5780633ccfd60b1461015a57806341ddfcb2146101715780637b7e5a0f1461019c575b600080fd5b3480156100d357600080fd5b506100dc6102f6565b6040516100e99190611079565b60405180910390f35b3480156100fe57600080fd5b506101076102fc565b6040516101149190611079565b60405180910390f35b34801561012957600080fd5b50610144600480360381019061013f91906110d4565b610302565b604051610151919061121e565b60405180910390f35b34801561016657600080fd5b5061016f610429565b005b34801561017d57600080fd5b50610186610711565b6040516101939190611079565b60405180910390f35b6101b660048036038101906101b191906110d4565b610717565b005b3480156101c457600080fd5b506101cd610998565b6040516101da9190611281565b60405180910390f35b3480156101ef57600080fd5b506101f86109be565b60405161020591906112fb565b60405180910390f35b34801561021a57600080fd5b506102236109e4565b604051610230919061143b565b60405180910390f35b34801561024557600080fd5b50610260600480360381019061025b9190611592565b610b04565b005b34801561026e57600080fd5b50610277610d64565b6040516102849190611079565b60405180910390f35b34801561029957600080fd5b506102b460048036038101906102af91906110d4565b610e07565b6040516102c49493929190611647565b60405180910390f35b3480156102d957600080fd5b506102f460048036038101906102ef91906110d4565b610ecc565b005b60015481565b60005481565b61030a610fd9565b6000600580549050905060005b81811015610422576005848154811061033357610332611693565b5b90600052602060002090600402016040518060800160405290816000820154815260200160018201548152602001600282018054610370906116f1565b80601f016020809104026020016040519081016040528092919081815260200182805461039c906116f1565b80156103e95780601f106103be576101008083540402835291602001916103e9565b820191906000526020600020905b8154815290600101906020018083116103cc57829003601f168201915b505050505081526020016003820160009054906101000a900460ff1615151515815250509250808061041a90611751565b915050610317565b5050919050565b600054421161046d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610464906117e5565b60405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f490611851565b60405180910390fd5b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161055a9190611892565b602060405180830381865afa158015610577573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059b91906118c2565b9050600081036105d7576040517f1ef4962600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b9381426040516106089291906118ef565b60405180910390a16000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518363ffffffff1660e01b8152600401610691929190611939565b6020604051808303816000875af11580156106b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d4919061198e565b90508061070d576040517fe465903e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b60025481565b600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1603610786576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077d90611a07565b60405180910390fd5b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016107e39190611892565b602060405180830381865afa158015610800573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082491906118c2565b11610864576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085b90611a73565b60405180910390fd5b6000810361089e576040517f1ef4962600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016108ff93929190611a93565b6020604051808303816000875af115801561091e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610942919061198e565b90508061097b576040517fe465903e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b816002600082825461098d9190611aca565b925050819055505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606005805480602002602001604051908101604052809291908181526020016000905b82821015610afb57838290600052602060002090600402016040518060800160405290816000820154815260200160018201548152602001600282018054610a4f906116f1565b80601f0160208091040260200160405190810160405280929190818152602001828054610a7b906116f1565b8015610ac85780601f10610a9d57610100808354040283529160200191610ac8565b820191906000526020600020905b815481529060010190602001808311610aab57829003601f168201915b505050505081526020016003820160009054906101000a900460ff16151515158152505081526020019060010190610a08565b50505050905090565b6001151560066000600154815260200190815260200160002060030160009054906101000a900460ff16151503610b70576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6790611b4a565b60405180910390fd5b60006006600060015481526020019081526020016000206040518060800160405290816000820154815260200160018201548152602001600282018054610bb6906116f1565b80601f0160208091040260200160405190810160405280929190818152602001828054610be2906116f1565b8015610c2f5780601f10610c0457610100808354040283529160200191610c2f565b820191906000526020600020905b815481529060010190602001808311610c1257829003601f168201915b505050505081526020016003820160009054906101000a900460ff161515151581525050905060405180608001604052806001548152602001838152602001848152602001600115158152509050600581908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000155602082015181600101556040820151816002019081610cd29190611d0c565b5060608201518160030160006101000a81548160ff021916908315150217905550505082604051610d039190611e1a565b6040518091039020826001547ff940d73082329298bb2b60070647d4264f2666f40a848526dd284ff4240923e86001604051610d3f9190611e31565b60405180910390a460016000815480929190610d5a90611751565b9190505550505050565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610dc19190611892565b602060405180830381865afa158015610dde573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0291906118c2565b905090565b6006602052806000526040600020600091509050806000015490806001015490806002018054610e36906116f1565b80601f0160208091040260200160405190810160405280929190818152602001828054610e62906116f1565b8015610eaf5780601f10610e8457610100808354040283529160200191610eaf565b820191906000526020600020905b815481529060010190602001808311610e9257829003601f168201915b5050505050908060030160009054906101000a900460ff16905084565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610f53576040517f251c9d6300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600580549050905060005b81811015610fd45760058381548110610f7c57610f7b611693565b5b90600052602060002090600402016000808201600090556001820160009055600282016000610fab9190611003565b6003820160006101000a81549060ff021916905550508080610fcc90611751565b915050610f60565b505050565b60405180608001604052806000815260200160008152602001606081526020016000151581525090565b50805461100f906116f1565b6000825580601f106110215750611040565b601f01602090049060005260206000209081019061103f9190611043565b5b50565b5b8082111561105c576000816000905550600101611044565b5090565b6000819050919050565b61107381611060565b82525050565b600060208201905061108e600083018461106a565b92915050565b6000604051905090565b600080fd5b600080fd5b6110b181611060565b81146110bc57600080fd5b50565b6000813590506110ce816110a8565b92915050565b6000602082840312156110ea576110e961109e565b5b60006110f8848285016110bf565b91505092915050565b61110a81611060565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561114a57808201518184015260208101905061112f565b60008484015250505050565b6000601f19601f8301169050919050565b600061117282611110565b61117c818561111b565b935061118c81856020860161112c565b61119581611156565b840191505092915050565b60008115159050919050565b6111b5816111a0565b82525050565b60006080830160008301516111d36000860182611101565b5060208301516111e66020860182611101565b50604083015184820360408601526111fe8282611167565b915050606083015161121360608601826111ac565b508091505092915050565b6000602082019050818103600083015261123881846111bb565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061126b82611240565b9050919050565b61127b81611260565b82525050565b60006020820190506112966000830184611272565b92915050565b6000819050919050565b60006112c16112bc6112b784611240565b61129c565b611240565b9050919050565b60006112d3826112a6565b9050919050565b60006112e5826112c8565b9050919050565b6112f5816112da565b82525050565b600060208201905061131060008301846112ec565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600060808301600083015161135a6000860182611101565b50602083015161136d6020860182611101565b50604083015184820360408601526113858282611167565b915050606083015161139a60608601826111ac565b508091505092915050565b60006113b18383611342565b905092915050565b6000602082019050919050565b60006113d182611316565b6113db8185611321565b9350836020820285016113ed85611332565b8060005b85811015611429578484038952815161140a85826113a5565b9450611415836113b9565b925060208a019950506001810190506113f1565b50829750879550505050505092915050565b6000602082019050818103600083015261145581846113c6565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61149f82611156565b810181811067ffffffffffffffff821117156114be576114bd611467565b5b80604052505050565b60006114d1611094565b90506114dd8282611496565b919050565b600067ffffffffffffffff8211156114fd576114fc611467565b5b61150682611156565b9050602081019050919050565b82818337600083830152505050565b6000611535611530846114e2565b6114c7565b90508281526020810184848401111561155157611550611462565b5b61155c848285611513565b509392505050565b600082601f8301126115795761157861145d565b5b8135611589848260208601611522565b91505092915050565b600080604083850312156115a9576115a861109e565b5b600083013567ffffffffffffffff8111156115c7576115c66110a3565b5b6115d385828601611564565b92505060206115e4858286016110bf565b9150509250929050565b600082825260208201905092915050565b600061160a82611110565b61161481856115ee565b935061162481856020860161112c565b61162d81611156565b840191505092915050565b611641816111a0565b82525050565b600060808201905061165c600083018761106a565b611669602083018661106a565b818103604083015261167b81856115ff565b905061168a6060830184611638565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061170957607f821691505b60208210810361171c5761171b6116c2565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061175c82611060565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361178e5761178d611722565b5b600182019050919050565b7f4e6f74205965742054696d650000000000000000000000000000000000000000600082015250565b60006117cf600c836115ee565b91506117da82611799565b602082019050919050565b600060208201905081810360008301526117fe816117c2565b9050919050565b7f4e6f74204f776e65720000000000000000000000000000000000000000000000600082015250565b600061183b6009836115ee565b915061184682611805565b602082019050919050565b6000602082019050818103600083015261186a8161182e565b9050919050565b600061187c82611240565b9050919050565b61188c81611871565b82525050565b60006020820190506118a76000830184611883565b92915050565b6000815190506118bc816110a8565b92915050565b6000602082840312156118d8576118d761109e565b5b60006118e6848285016118ad565b91505092915050565b6000604082019050611904600083018561106a565b611911602083018461106a565b9392505050565b6000611923826112c8565b9050919050565b61193381611918565b82525050565b600060408201905061194e600083018561192a565b61195b602083018461106a565b9392505050565b61196b816111a0565b811461197657600080fd5b50565b60008151905061198881611962565b92915050565b6000602082840312156119a4576119a361109e565b5b60006119b284828501611979565b91505092915050565b7f496e76616c696420416464726573730000000000000000000000000000000000600082015250565b60006119f1600f836115ee565b91506119fc826119bb565b602082019050919050565b60006020820190508181036000830152611a20816119e4565b9050919050565b7f496e73756666696369656e74206d617469632062616c616e6365000000000000600082015250565b6000611a5d601a836115ee565b9150611a6882611a27565b602082019050919050565b60006020820190508181036000830152611a8c81611a50565b9050919050565b6000606082019050611aa86000830186611883565b611ab56020830185611883565b611ac2604083018461106a565b949350505050565b6000611ad582611060565b9150611ae083611060565b9250828201905080821115611af857611af7611722565b5b92915050565b7f4974656d20616c72656164792063726561746564000000000000000000000000600082015250565b6000611b346014836115ee565b9150611b3f82611afe565b602082019050919050565b60006020820190508181036000830152611b6381611b27565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611bcc7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611b8f565b611bd68683611b8f565b95508019841693508086168417925050509392505050565b6000611c09611c04611bff84611060565b61129c565b611060565b9050919050565b6000819050919050565b611c2383611bee565b611c37611c2f82611c10565b848454611b9c565b825550505050565b600090565b611c4c611c3f565b611c57818484611c1a565b505050565b5b81811015611c7b57611c70600082611c44565b600181019050611c5d565b5050565b601f821115611cc057611c9181611b6a565b611c9a84611b7f565b81016020851015611ca9578190505b611cbd611cb585611b7f565b830182611c5c565b50505b505050565b600082821c905092915050565b6000611ce360001984600802611cc5565b1980831691505092915050565b6000611cfc8383611cd2565b9150826002028217905092915050565b611d1582611110565b67ffffffffffffffff811115611d2e57611d2d611467565b5b611d3882546116f1565b611d43828285611c7f565b600060209050601f831160018114611d765760008415611d64578287015190505b611d6e8582611cf0565b865550611dd6565b601f198416611d8486611b6a565b60005b82811015611dac57848901518255600182019150602085019450602081019050611d87565b86831015611dc95784890151611dc5601f891682611cd2565b8355505b6001600288020188555050505b505050505050565b600081905092915050565b6000611df482611110565b611dfe8185611dde565b9350611e0e81856020860161112c565b80840191505092915050565b6000611e268284611de9565b915081905092915050565b6000602082019050611e466000830184611638565b9291505056fea26469706673582212200b9d571db3a332ca9f273e5bb85a94a23c3f3b12a1e0cf30b3dd8e72ebd8adc564736f6c63430008110033";

type BudgetDappConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BudgetDappConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BudgetDapp__factory extends ContractFactory {
  constructor(...args: BudgetDappConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _maticContractAddress: PromiseOrValue<string>,
    _unLockTime: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BudgetDapp> {
    return super.deploy(
      _maticContractAddress,
      _unLockTime,
      overrides || {}
    ) as Promise<BudgetDapp>;
  }
  override getDeployTransaction(
    _maticContractAddress: PromiseOrValue<string>,
    _unLockTime: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _maticContractAddress,
      _unLockTime,
      overrides || {}
    );
  }
  override attach(address: string): BudgetDapp {
    return super.attach(address) as BudgetDapp;
  }
  override connect(signer: Signer): BudgetDapp__factory {
    return super.connect(signer) as BudgetDapp__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BudgetDappInterface {
    return new utils.Interface(_abi) as BudgetDappInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BudgetDapp {
    return new Contract(address, _abi, signerOrProvider) as BudgetDapp;
  }
}
