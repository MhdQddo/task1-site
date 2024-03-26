import { ethers } from 'ethers';

// Function to fetch USDT balance of a provided Ethereum address
export async function getUSDTBalance(address: string): Promise<string> { // address = '0xA7EFAe728D2936e78BDA97dc267687568dD593f3'
    const contractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7'; // USDT contract address
    const abi = ['function balanceOf(address) view returns (uint)'];
    const provider = new ethers.InfuraProvider('mainnet');
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const balanceBigInt = await contract.balanceOf(address);
    const balanceFloat = parseFloat(ethers.formatUnits(Number(balanceBigInt), 6)); // Convert to float (dividing by 10^6)
    return `USDT Balance of ${address} is: ${balanceFloat}`;
}

  