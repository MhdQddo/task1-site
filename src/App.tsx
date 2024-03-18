import React, { useState, useEffect } from 'react';
import { getLastBlockNumber } from './getLastBlockNumber';
import { getUSDTBalance } from './getUSDTBalance';
import './App.css'

const Loader: React.FC = () => <div>Loading...</div>;

const NumberComponent: React.FC = () => {
  const [number, setNumber] = useState<number | null>(null);

  useEffect(() => {
    const fetchNumber = async () => {
      const num = await getLastBlockNumber();
      setNumber(num);
    };
    fetchNumber();
  }, []);

  return <div>{number === null ? <Loader /> : <div>Last Ethereum mainnet block number: {number}</div>}</div>;
};

const AddressComponent: React.FC = () => {
  const [address, setAddress] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await getUSDTBalance(address);
    setResult(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Account Address"
        />
        <button type="submit">Submit</button>
      </form>
      {result === null ? <Loader /> : <div>Result: {result}</div>}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <h1>Task 001</h1>
      <NumberComponent />
      <AddressComponent />
    </div>
  );
};

export default App;
