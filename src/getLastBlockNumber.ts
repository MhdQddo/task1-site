import { ethers } from 'ethers';

// Function to fetch the last block number of the Ethereum mainnet
export async function getLastBlockNumber(): Promise<number> {
  const provider = new ethers.InfuraProvider('mainnet');
  const blockNumber = await provider.getBlockNumber();
  return blockNumber;
}
