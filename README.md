# NFT SNAPSHOOTER

Program for NFT holder snapshots.  
It supports `Klaytn` network(s). (`Ethereum`, `Polygon` will be supported soon.)

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

Fill out your network RPC providers in `/config/providerConfig.ts`.

```typescript
export default {
  eth: "<YOUR RPC PROVIDER URL>", // will be supported
  klay: "<YOUR RPC PROVIDER URL>",
  matic: "<YOUR RPC PROVIDER URL>", // will be supported
};
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```bash
yarn install
```

When it all installed,

```bash
yarn start <NETWORK_NAME> <CONTRACT_ADDRESS>
```

- `NETWORK_NAME` will be such as `KLAY`, `ETH`, and et cetra.
- `CONTRACT_ADDRESS` will be an address what you want to snapshot.

Finally, you can find the result in `/out/snapshot-DATETIME.csv`.

<!-- ## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
``` -->

<!-- ## Deployment

Add additional notes about how to deploy this on a live system -->

## Built With

- [ts-node](https://github.com/TypeStrong/ts-node) - run typescript file for node.js.
- [caver-js](https://github.com/klaytn/caver-js) - Used to communicate with Klaytn network.

<!-- ## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us. -->

<!-- ## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). -->

## Authors

- **Soohan Park** - _Initial work_ - [@Soohan-Park](https://github.com/Soohan-Park)

<!-- See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project. -->

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

<!-- ## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc -->
