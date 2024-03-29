# NFT SNAPSHOOTER

- [NFT SNAPSHOOTER](#nft-snapshooter)
  - [TL;DR](#tldr)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
    - [Run](#run)
  - [Built With](#built-with)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

Script for NFT holder snapshots.  
It supports `Klaytn`, `Ethereum`, `Polygon` networks.

## TL;DR

```bash
# SET UP
npm install -g yarn
npm install -g typescript ts-node
yarn install
```

```bash
# RUN
yarn start <"ETH" | "KLAY" | "MATIC"> <CONTRACT_ADDRESS>
```

## Getting Started

### Prerequisites

Install `yarn`.

```bash
npm install -g yarn
```

Install `typescript && ts-node`.  
(If you don't wanna using `ts-node`, you can use compiled file.)

```bash
npm install -g typescript ts-node
```

Fill out your network RPC providers in `/config/networkConfig.ts`.

```typescript
const networkConfig = {
  eth: {
    name: "ETH",
    chainId: 1,
    providerUrl: "<YOUR RPC PROVIDER URL>",
  },
  klay: {
    name: "KLAY",
    chainId: 8217,
    providerUrl: "<YOUR RPC PROVIDER URL>",
  },
  matic: {
    name: "MATIC",
    chainId: 137,
    providerUrl: "<YOUR RPC PROVIDER URL>",
  },
};

export default networkConfig;
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```bash
yarn install
```

### Run

When it all installed,

```bash
yarn start <NETWORK_NAME> <CONTRACT_ADDRESS>
```

- `NETWORK_NAME` will be such as `KLAY`, `ETH`, and `MATIC`.
- `CONTRACT_ADDRESS` will be an address what you want to snapshot.

Finally, you can find the result in `/out/snapshot_<DATETIME>.csv`.

## Built With

- [ts-node](https://github.com/TypeStrong/ts-node) - run typescript file for node.js.
- [caver-js](https://github.com/klaytn/caver-js) - Used to communicate with Klaytn network.
- [web3.js](https://github.com/ChainSafe/web3.js) - Ethereum JavaScript API

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Soohan-Park/nft-snapshooter/tags).

## Authors

- **Soohan Park** - _Initial work_ - [@Soohan-Park](https://github.com/Soohan-Park)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
