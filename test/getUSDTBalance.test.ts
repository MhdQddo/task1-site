import { getUSDTBalance } from '../src/getUSDTBalance';

test('getUSDTBalance returns USDT balance for a valid address', async () => {
  const address = '0x69a64bC34820899AFABa140Bfb6721A922818A7F'; // Provide a valid Ethereum address
  const balance = await getUSDTBalance(address);
  expect(balance).toMatch(/^USDT Balance of /); // Ensure the result starts with 'USDT Balance of'
});

test('getUSDTBalance throws error for an invalid address', async () => {
  const address = 'invalid_address'; // Provide an invalid Ethereum address
  await expect(getUSDTBalance(address)).rejects.toThrow();
});
