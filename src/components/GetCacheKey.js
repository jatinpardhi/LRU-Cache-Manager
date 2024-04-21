// GetCacheKey.js

import React, { useState } from 'react';
import { getCache } from '../api/api';

const GetCacheKey = () => {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  const handleGetCache = async () => {
    try {
      const cacheData = await getCache(key);
      setValue(cacheData.value);
    } catch (error) {
      setValue('');
      alert('Key not found. Please try again with a valid key.');
    }
  };

  return (
    <div>
      <h2>Get Cache Key</h2>
      <label>
        Key:
        <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
      </label>
      <button onClick={handleGetCache}>Get Value</button>
      {value && (
        <div>
          <h3>Value</h3>
          <p>{value}</p>
        </div>
      )}
    </div>
  );
};

export default GetCacheKey;
