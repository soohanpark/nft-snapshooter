interface ABIConfig {
  abi: ABIItem[];
}

interface ABIItem {
  inputs: ABIIOType[];
  name: string;
  outputs: ABIIOType[];
  stateMutability: string;
  type: string;
}

interface ABIIOType {
  internalType: string;
  name: string;
  type: string;
}

const abiConfig: ABIConfig = {
  abi: [
    {
      inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
      name: "supportsInterface",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "ownerOf",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
  ],
};

export default abiConfig;
