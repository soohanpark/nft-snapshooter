import fs from "fs";

async function toCsv(owners: Object) {
  const datetime = new Date().toISOString();
  let csvString: string = `Address,Count,${datetime}\n`;
  for (let [address, count] of Object.entries(owners)) {
    csvString += `${address},${count}\n`;
  }
  console.log("Converting to CSV...");
  if (!fs.existsSync("out")) fs.mkdirSync("out");
  fs.writeFileSync(`out/snapshot-${datetime}.csv`, csvString);
  console.log(`Done! Check /out/snapshot-${datetime}.csv`);
}

export { toCsv };