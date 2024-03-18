import { ethers } from 'ethers';

// Function to fetch USDT balance of a provided Ethereum address
export async function getUSDTBalance(address: string): Promise<string> {
    const contractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7'; // USDT contract address
    const abi = ['function balanceOf(address) view returns (uint)'];
    const provider = new ethers.InfuraProvider('mainnet');
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const balance = await contract.balanceOf(address);
    return `USDT Balance of ${address} is: ${Number(balance)}`;
}

  