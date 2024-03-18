import { getLastBlockNumber } from '../src/getLastBlockNumber';

test('getLastBlockNumber returns a number', async () => {
  const blockNumber = await getLastBlockNumber();
  expect(typeof blockNumber).toBe('number');
  expect(blockNumber).toBeGreaterThan(0);
});
