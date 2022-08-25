import { toCsv } from "src/common/csv";
import klay from "src/klay";
import eth from "src/ethereum";
import matic from "src/matic";

const NETWORK = process.argv[2];
const CONTRACT_ADDRESS = process.argv[3];

async function run() {
  console.log(`
=== NFT SNAPSHOOTER ===
    * Network: ${NETWORK.toUpperCase()}
    * Contract Address: ${CONTRACT_ADDRESS}
  `);

  switch (NETWORK.toUpperCase()) {
    case "ETH":
      const ownersETH = await eth(CONTRACT_ADDRESS);
      toCsv(CONTRACT_ADDRESS, ownersETH);
      break;

    case "KLAY":
      const ownersKLAY = await klay(CONTRACT_ADDRESS);
      toCsv(CONTRACT_ADDRESS, ownersKLAY);
      break;

    case "MATIC":
      const ownersMATIC = await matic(CONTRACT_ADDRESS);
      toCsv(CONTRACT_ADDRESS, ownersMATIC);
      break;

    default:
      console.log("ERROR: Please check Network.");
      break;
  }
}

run();
