import { ethers } from 'ethers';
import dotenv from "dotenv";

dotenv.config();

const provider = new ethers.providers.JsonRpcProvider(process.env.MAINETURL);
const contractAddress = '<0xdAC17F958D2ee523a2206206994597C13D831ec7';
const abi = ['function balanceOf(address account) view returns (uint256)'];
const contract = new ethers.Contract(contractAddress, abi, provider);

async function getHighestHolder(): Promise<string> {
  const holders: { [address: string]: ethers.BigNumber } = {};
  const totalSupply: ethers.BigNumber = await contract.totalSupply();
  let highestHolder: string = '';
  let highestBalance: ethers.BigNumber = ethers.BigNumber.from(0);

  // Retrieve balances of all token holders
  for (let i = 0; i < totalSupply.toNumber(); i++) {
    const address = await contract.tokenByIndex(i);
    const balance = await contract.balanceOf(address);
    holders[address] = balance;

    // Check if current holder has a higher balance than previous highest holder
    if (balance.gt(highestBalance)) {
      highestHolder = address;
      highestBalance = balance;
    }
  }

  return highestHolder;
}

getHighestHolder().then((result) => {
  console.log(`The highest holder of ${contractAddress} is ${result}`);
}).catch((error) => {
  console.error(error);
});
