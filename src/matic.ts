import { exit } from "process";
import Web3 from "web3";
import abiConfig from "config/abiConfig";
import networkConfig from "config/networkConfig";
import interfaceId from "src/common/interfaceId";
import { isSupport } from "src/common/tools";

const web3 = new Web3(
  new Web3.providers.HttpProvider(networkConfig.matic.providerUrl)
);

async function matic(contractAddress: string) {
  console.log(`--- FETCH ${contractAddress} ---`);
  const ethContract = new web3.eth.Contract(abiConfig.abi, contractAddress);

  // Check supports
  const isERC721 = await isSupport(ethContract, interfaceId.ERC721);
  console.log(`Is ERC721? ${isERC721}`);
  if (!isERC721) {
    console.log(`@@@ ERROR: ${contractAddress} is not implemented ERC721.`);
    exit(1);
  } else {
    const isERC721Enumerable = await isSupport(
      ethContract,
      interfaceId.ERC721Enumerable
    );
    console.log(`IS ERC721Enumerable? ${isERC721Enumerable}`);
    if (!isERC721Enumerable) {
      console.log(
        `@@@ WARNING: ${contractAddress} is not implemented ERC721Enumerable. So, there is a possible to error while fetching data.`
      );
    }
  }

  const totalSupply = await ethContract.methods.totalSupply().call();
  console.log(`totalSupply: ${totalSupply}`);
  console.log(`Fetching...`);

  let owners: any = {};
  let bunchCount: number = 1;
  let bunchEachCount: number = totalSupply;

  for (let idx = 10; idx > 1; idx--) {
    if (totalSupply % idx === 0) {
      bunchCount = idx;
      bunchEachCount = totalSupply / idx;
      break;
    }
  }
  console.log(
    `totalSupply: ${totalSupply} | bunchCount: ${bunchCount} | bunchEachCount: ${bunchEachCount}`
  );

  for (let idx = 0; idx < bunchCount; idx++) {
    console.log(
      `[Fetch] Start: ${idx * bunchEachCount} | End: ${
        (idx + 1) * bunchEachCount - 1
      } `
    );

    owners = await _fetchOwnerOf(
      owners,
      ethContract,
      totalSupply,
      idx * bunchEachCount, // 0
      (idx + 1) * bunchEachCount - 1 // totalSupply - 1
    );
  }

  return owners;
}

async function _fetchOwnerOf(owners, ethContract_, totalSupply_, start_, end_) {
  return new Promise(async (resolve, reject) => {
    let counter = start_;

    for (let idx = start_; idx <= end_; idx++) {
      ethContract_.methods
        .ownerOf(idx)
        .call()
        .then((ownerAddress) => {
          if (!(ownerAddress in owners)) {
            owners[ownerAddress] = 0;
          }
          owners[ownerAddress] += 1;
          counter++;
        });
    }

    const interval = setInterval(() => {
      if (counter <= end_) {
        console.log(`Fetching... ${counter}/${end_} (${totalSupply_})`);
      } else {
        console.log(`Done! ${counter - 1}/${end_} (${totalSupply_})`);
        clearInterval(interval);
        resolve(owners);
      }
    }, 3000);
  });
}

export default matic;
