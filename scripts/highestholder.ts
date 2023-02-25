import { ethers } from 'ethers';
import dotenv from 'dotenv';

dotenv.config();

async function getHighestHolder() {
  const response = await fetch(
    'https://api.ethplorer.io/getTopTokenHolders/0xdAC17F958D2ee523a2206206994597C13D831ec7?apiKey=freekey&limit=1'
  );
  const data = await response.json();
  console.log(data);
}

getHighestHolder().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
