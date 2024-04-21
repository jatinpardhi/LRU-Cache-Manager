// CacheState.js

import React, { useState, useEffect } from 'react';
import { getCacheState } from '../api/api';

const CacheState = () => {
  const [cacheState, setCacheState] = useState(null);

  useEffect(() => {
    const fetchCacheState = async () => {
      try {
        const state = await getCacheState();
        setCacheState(state);
      } catch (error) {
        console.error('Failed to fetch cache state:', error);
      }
    };

    fetchCacheState();
  }, []);

  return (
    <div>
      <h2>Cache State</h2>
      {cacheState ? (
        <div>
          {Object.entries(cacheState).map(([key, value]) => (
            <div key={key}>
              <p>
                <strong>Key:</strong> {key}, <strong>Value:</strong> {value}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading cache state...</p>
      )}
    </div>
  );
};

export default CacheState;
