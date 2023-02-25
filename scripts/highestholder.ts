import { ethers } from 'ethers';
import dotenv from "dotenv";

dotenv.config();
async function getHighestHolder(){

const provider = new ethers.providers.JsonRpcProvider(process.env.MAINETURL);
const contractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';


}

getHighestHolder().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
