// GetCache.js

import React, { useState } from 'react';
import { getCache } from '../api/api';

const GetCache = () => {
  const [id, setId] = useState('');
  const [cache, setCache] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const cacheData = await getCache(id);
      setCache(cacheData);
    } catch (error) {
      alert('Cache not found. Please try again with a valid ID.');
    }
  };

  return (
    <div>
      <h2>Get Cache</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <button type="submit">Get Cache</button>
      </form>
      {cache && (
        <div>
          <h3>Cache Value</h3>
          <p>{cache.value}</p>
        </div>
      )}
    </div>
  );
};

export default GetCache;
