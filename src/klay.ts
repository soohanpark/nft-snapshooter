import Caver from "caver-js";
import abiConfig from "../config/abiConfig";
import providerConfig from "../config/providerConfig";

const caver = new Caver(providerConfig.klay);

async function klay(contractAddress: string) {
  const klayContract = new caver.contract(abiConfig.abi, contractAddress);

  const totalSupply: number = await klayContract.methods.totalSupply().call();
  console.log(`totalSupply: ${totalSupply}`);
  console.log(`Fetching...`);

  const owners = {};
  for (let idx = 0; idx < totalSupply; idx++) {
    const ownerAddress = await klayContract.methods.ownerOf(idx).call();
    if (!(ownerAddress in owners)) {
      owners[ownerAddress] = 0;
    }
    owners[ownerAddress] += 1;
  }

  console.log(owners);

  return owners;
}

export default klay;
