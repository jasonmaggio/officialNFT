let web3;
if (account && window.ethereum) {
  web3 = new Web3(window.ethereum);
} else {
  web3 = new Web3('https://bsc-dataseed.binance.org/') // bsc main
  // web3 = new Web3('https://data-seed-prebsc-2-s1.binance.org:8545/') // bsc testnet
}

const NFTabi = [{ inputs: [{ internalType: "string", name: "name", type: "string" }, { internalType: "string", name: "symbol", type: "string" }, { internalType: "address", name: "addr", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "owner", type: "address" }, { indexed: true, internalType: "address", name: "approved", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }], name: "Approval", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "owner", type: "address" }, { indexed: true, internalType: "address", name: "operator", type: "address" }, { indexed: false, internalType: "bool", name: "approved", type: "bool" }], name: "ApprovalForAll", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "from", type: "address" }, { indexed: true, internalType: "address", name: "to", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }], name: "Transfer", type: "event" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "approve", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "baseURI", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "getApproved", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "address", name: "operator", type: "address" }], name: "isApprovedForAll", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "ownerOf", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "bytes", name: "_data", type: "bytes" }], name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "operator", type: "address" }, { internalType: "bool", name: "approved", type: "bool" }], name: "setApprovalForAll", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }], name: "supportsInterface", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "token", outputs: [{ internalType: "contract erc20", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "index", type: "uint256" }], name: "tokenByIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "uint256", name: "index", type: "uint256" }], name: "tokenOfOwnerByIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "tokenURI", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "transferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "addr", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "withdrew", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "addr", type: "address" }], name: "setToken", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "getTokenPrice", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "string", name: "name", type: "string" }, { internalType: "string", name: "img", type: "string" }, { internalType: "string", name: "coupon", type: "string" }, { internalType: "string", name: "remark", type: "string" }, { internalType: "uint256", name: "price", type: "uint256" }], name: "mintUniqueTokenTo", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "string", name: "tokenURI", type: "string" }, { internalType: "uint256", name: "price", type: "uint256" }], name: "mintUniqueTokenTo", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "buyNFT", outputs: [], stateMutability: "nonpayable", type: "function" }];
const ERC20abi = [{ inputs: [{ internalType: "string", name: "name", type: "string" }, { internalType: "string", name: "symbol", type: "string" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "owner", type: "address" }, { indexed: true, internalType: "address", name: "spender", type: "address" }, { indexed: false, internalType: "uint256", name: "value", type: "uint256" }], name: "Approval", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "from", type: "address" }, { indexed: true, internalType: "address", name: "to", type: "address" }, { indexed: false, internalType: "uint256", name: "value", type: "uint256" }], name: "Transfer", type: "event" }, { inputs: [], name: "INITIAL_SUPPLY", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function", constant: true }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "address", name: "spender", type: "address" }], name: "allowance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function", constant: true }, { inputs: [{ internalType: "address", name: "spender", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "approve", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "account", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function", constant: true }, { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function", constant: true }, { inputs: [{ internalType: "address", name: "spender", type: "address" }, { internalType: "uint256", name: "subtractedValue", type: "uint256" }], name: "decreaseAllowance", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "spender", type: "address" }, { internalType: "uint256", name: "addedValue", type: "uint256" }], name: "increaseAllowance", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function", constant: true }, { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function", constant: true }, { inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function", constant: true }, { inputs: [{ internalType: "address", name: "recipient", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "transfer", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "sender", type: "address" }, { internalType: "address", name: "recipient", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "transferFrom", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }];

const NFTAddress = '0x5eeFe0180EbB7387fBCE0f598419a9D11B2c9161';
const NFTContract = new web3.eth.Contract(NFTabi, NFTAddress, {
  from: account
});
const ERC20Address = '0x140cfea663C99fCBD63376A99e2B28357B7b2fB2';
const ERC20Contract = new web3.eth.Contract(ERC20abi, ERC20Address, {
  from: account
});
