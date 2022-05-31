import { toCsv } from "./src/common/csv";
import klay from "./src/klay";

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
      console.log("Not supported yet.");
      break;

    case "KLAY":
      const owners = await klay(CONTRACT_ADDRESS);
      toCsv(owners);
      break;

    case "MATIC":
      console.log("Not supported yet.");
      break;

    default:
      console.log("ERROR: Please check Network.");
      break;
  }
}

run();
